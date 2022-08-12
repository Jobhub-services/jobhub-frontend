import React, { useEffect, useState } from 'react';
import { FlexBox, Button } from 'staak-ui';
import { metadataActions } from '@/modules/actions/metadata.actions';
import HireLocation from '@/components/companies/jobs/newjob/details/HireLocation';
import Compensation from '@/components/companies/jobs/newjob/details/Compensation';
import WorkLocation from '@/components/companies/jobs/newjob/details/WorkLocation';
import { HeaderContainer, StyledHeadline, StepContent } from '@/components/companies/jobs/newjob/newjob.styles';
import { jobDispatcher } from '@/modules/actions/company/job.actions';
import { useAppSelector } from '@/utils/appHooks';

const DetailedInfo = (props: any) => {
	const { createJob } = useAppSelector((state) => state.job);
	const { countries } = useAppSelector((state) => state.metadata);
	const [compensationErrors, setCompensationErrors] = useState({
		start_salary: false,
		end_salary: false,
		currency: false,
	});
	const [workLocError, setWorkLocError] = useState({ country: false, city: false });
	let benefit = createJob.benefits;

	useEffect(() => {
		if (countries?.size === 0) metadataActions.getCountries();
	}, []);

	const onBenefitChange = (v: string, n: string) => {
		benefit = v;
	};

	const handleNext = (event: React.SyntheticEvent) => {
		let tmp = { ...createJob, benefits: benefit };
		let tmpErr: any = {
			start_salary:
				tmp.salary_type && (!tmp.start_salary || tmp.start_salary === '' || parseInt(tmp?.start_salary ?? '0') > parseInt(tmp?.end_salary ?? '0')),
			end_salary:
				tmp.salary_type && (!tmp.end_salary || tmp.end_salary === '' || parseInt(tmp?.start_salary ?? '0') > parseInt(tmp?.end_salary ?? '0')),
			currency: tmp.salary_type && (!tmp.currency?.id || tmp.currency.id === ''),
		};
		let workErr: any = {
			country: !createJob.work_remotly && createJob.work_location?.some((elem) => elem.country?.id === ''),
			city: !createJob.work_remotly && createJob.work_location?.some((elem) => elem.city === ''),
		};
		setCompensationErrors(tmpErr);
		setWorkLocError(workErr);
		jobDispatcher.saveJobData(tmp);
		if (props.onNext) props.onNext(event, tmpErr.start_salary || tmpErr.end_salary || tmpErr.currency || workErr.country || workErr.city);
	};

	const handlePrevious = (event: React.SyntheticEvent) => {
		if (props.onPreviouse) props.onPreviouse(event);
	};

	return (
		<>
			<HeaderContainer justify="space-between">
				<StyledHeadline variant="h2" size="sm">
					Detailed Informations
				</StyledHeadline>
				<FlexBox gap={10} align="flex-start" justify="flex-start">
					<Button variant="outlined" onClick={handlePrevious}>
						Back
					</Button>
					<Button onClick={handleNext}>Save & Continue</Button>
				</FlexBox>
			</HeaderContainer>
			<StepContent className="staak_scrollbar">
				<FlexBox align="flex-start" justify="flex-start">
					<Compensation onBenefitChange={onBenefitChange} errors={compensationErrors} />
					<div style={{ padding: '0 0 0 15px', width: '50%' }}>
						<div>
							<h3>Job Location</h3>
							<WorkLocation errors={workLocError} />
							<HireLocation />
						</div>
					</div>
				</FlexBox>
			</StepContent>
		</>
	);
};

export default DetailedInfo;
