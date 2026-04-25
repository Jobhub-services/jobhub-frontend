import styled from 'styled-components';
import { colors } from '@/assets/theme';
import InterviewInfo from './InterviewInfo';
import { useAppSelector } from '@/utils/appHooks';
import DataEmpty from '@/components/common/DataEmpty';
import { useEffect } from 'react';
import { interviewDispatcher } from '@/modules/actions/company/interview.action';
import { applicationsActions } from '@/modules/actions/company/applications.actions';
import { pushNotification } from '@/utils/helpers';

const STh = styled.th`
	text-align: left;
	color: ${colors.BLACK_8};
	font-weight: 500;
	padding: 10px 10px;
`;

const InterviewsList = () => {
	const { interviews, _id } = useAppSelector((state) => state.applications.applicantDetails);
	const { isDeleted, isUpdated } = useAppSelector((state) => state.interview);

	useEffect(() => {
		if (isDeleted) {
			interviewDispatcher.setIsDeleted(false);
			applicationsActions.getApplicantDetails('NEW', _id, false);
			pushNotification.success('Interview deleted succefully');
		}
	}, [isDeleted]);

	useEffect(() => {
		if (isUpdated) {
			pushNotification.success('Interview updated succefully');
			interviewDispatcher.setAttribute(false, 'isUpdated');
		}
	}, [isUpdated]);
	return (
		<>
			<div>
				<h3>Interviews</h3>
				{interviews?.length === 0 ? (
					<DataEmpty title="No data founds" description="There is no interview scheduled yet" />
				) : (
					<table style={{ width: '100%' }}>
						<tr>
							<STh>Interview Title</STh>
							<STh>Interview Date</STh>
							<STh>Interview Location</STh>
							<STh>Interview Link</STh>
							<STh>Interview Status</STh>
						</tr>
						<tbody>
							{interviews?.map((elem, idx) => {
								return (
									<InterviewInfo
										key={idx}
										_id={elem._id}
										title={elem.title}
										endDate={elem.endDate}
										startDate={elem.startDate}
										location={elem.location}
										status={elem.status}
										note={elem.note}
										link={elem.link}
									/>
								);
							})}
							{interviews?.length === 0 && 'Empty data'}
						</tbody>
					</table>
				)}
			</div>
		</>
	);
};

export default InterviewsList;
