import styled from 'styled-components';
import { colors } from '@/assets/theme';
import InterviewInfo from './InterviewInfo';
import { useAppSelector } from '@/utils/appHooks';
import DataEmpty from '@/components/companies/_common/DataEmpty';
import { useEffect } from 'react';
import { interviewActions } from '@/modules/actions/company/interview.action';

const STh = styled.th`
	text-align: left;
	color: ${colors.BLACK_8};
	font-weight: 500;
	padding: 10px 10px;
`;

const InterviewsList = () => {
	const { interviews } = useAppSelector((state) => state.applications.applicantDetails);
	return (
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
									title={elem.title}
									endDate={elem.endDate}
									startDate={elem.startDate}
									location="Remote"
									status={elem.status}
									note={elem.note}
									link={elem.link}
								/>
							);
						})}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default InterviewsList;
