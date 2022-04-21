import styled from 'styled-components';
import { colors } from '@/assets/theme';
import InterviewInfo from './InterviewInfo';

const STh = styled.th`
	text-align: left;
	color: ${colors.BLACK_8};
	font-weight: 500;
	padding: 10px 10px;
`;

const InterviewsList = () => {
	return (
		<div>
			<h3>Interviews</h3>
			<table style={{ width: '100%' }}>
				<tr>
					<STh>Interview Title</STh>
					<STh>Interview Date</STh>
					<STh>Interview Location</STh>
					<STh>Interview Status</STh>
				</tr>
				<InterviewInfo title="HR interview" date={`17 July 2022 12:30 AM \n\r 20 July 2022 12:30 AM`} location="Remote" status="Pending" />
				<InterviewInfo title="Technical interview" date={`17 July 2022 12:30 AM \r\n 20 July 2022 12:30 AM`} location="remote" status="On Progress" />
				<InterviewInfo
					title="HR interview"
					date={`17 July 2022 12:30 AM \n\r 20 July 2022 12:30 AM`}
					location="Silver Crysta room."
					status="Finished"
				/>
			</table>
		</div>
	);
};

export default InterviewsList;
