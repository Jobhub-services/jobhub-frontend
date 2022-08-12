import { FlexBox, IconButton, Button, InputPicker, Headline } from 'staak-ui';
import { CloseIcon, EditIcon, LoadingIcon, TrashIcon } from '@/assets/icons';
import { useEffect, useState } from 'react';
import StatusElem from '@/components/companies/_common/StatusElem';
import { StatusTitle } from '@/constants/company/job.contants';
import { colors } from '@/assets/theme';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/utils/appHooks';
import { jobActions, jobDispatcher } from '@/modules/actions/company/job.actions';
import DeleteDialogue from '@/components/companies/jobs/showjob/details/DeleteDialogue';
import { pushNotification } from '@/utils/helpers';

const JobDetailHeader = () => {
	const navigate = useNavigate();
	const { jobDetails, jobDeleted, jobUpdated } = useAppSelector((state) => state.job);
	const [status, setStatus] = useState<typeof jobDetails.status>(jobDetails.status);
	const [showDelete, setShowDelete] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (jobDeleted) {
			pushNotification.success('Job deleted successfully');
			jobDispatcher.setJobAction(false, 'jobDeleted');
			navigate(-1);
		}
	}, [jobDeleted]);

	useEffect(() => {
		if (jobUpdated) {
			pushNotification.success('Job updated successfully');
			jobDispatcher.setJobAction(false, 'jobUpdated');
			setLoading(false);
		}
	}, [jobUpdated]);

	const onClose = () => {
		navigate(-1);
	};
	const handleEdit = () => {
		let tmp: any = { ...jobDetails };
		tmp.company_division = { id: jobDetails.company_division, name: jobDetails.company_division };
		tmp.category = { id: jobDetails.category, name: jobDetails.category };
		tmp.work_location = [
			{
				country: { id: jobDetails.work_location?.country._id, name: jobDetails.work_location?.country.name },
				city: jobDetails.work_location?.city,
			},
		];
		tmp.hire_location = jobDetails?.hire_location?.map((elem) => {
			return {
				country: { id: elem.country._id, name: elem?.country.name },
				city: elem?.city,
			};
		});
		tmp.currency = { id: jobDetails.currency?.name, name: jobDetails.currency?.name };
		tmp.skills = jobDetails.skills?.map((elem) => {
			return { value: elem._id, label: elem.name };
		});
		jobDispatcher.saveJobData(tmp);
		navigate('/jobs/new', { state: { action: 'update' } });
	};
	const handleStatus = (event: any, value: string, label: string, name: string) => {
		if (value !== status) {
			setLoading(true);
			setStatus(value as any);
			jobActions.updateJob(jobDetails, {}, false, true, value as any);
		}
	};
	return (
		<>
			<DeleteDialogue show={showDelete} onClose={() => setShowDelete(false)} jobId={jobDetails._id} />
			<FlexBox justify="space-between" height="62px" style={{ padding: '5px 10px' }}>
				<FlexBox gap={10}>
					<IconButton width="30px" height="30px" circle onClick={() => onClose()}>
						<CloseIcon color={colors.BLACK_8} />
					</IconButton>
					<Headline variant="h2" size="sm">
						Job details
					</Headline>
				</FlexBox>
				<FlexBox gap={20}>
					{loading ? (
						<FlexBox width="150px">
							<LoadingIcon color={colors.PURPLE_BASE} />
						</FlexBox>
					) : (
						<InputPicker value={StatusTitle[status ?? 'ready']} onChange={handleStatus}>
							<InputPicker.Option value="ready">
								<StatusElem style={{ marginTop: '0' }} title={StatusTitle['ready']} status={'ready'} />
							</InputPicker.Option>
							<InputPicker.Option value="open">
								<StatusElem style={{ marginTop: '0' }} title={StatusTitle['open']} status={'open'} />
							</InputPicker.Option>
							<InputPicker.Option value="closed">
								<StatusElem style={{ marginTop: '0' }} title={StatusTitle['closed']} status={'closed'} />
							</InputPicker.Option>
						</InputPicker>
					)}
					<FlexBox gap={10}>
						<Button variant="light" size="md" startIcon={<EditIcon />} onClick={handleEdit}>
							Edit
						</Button>
						<Button color="red" variant="text" size="md" startIcon={<TrashIcon />} onClick={() => setShowDelete(true)}>
							Delete
						</Button>
					</FlexBox>
				</FlexBox>
			</FlexBox>
		</>
	);
};

export default JobDetailHeader;
