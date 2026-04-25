import { FlexBox, HrDivider } from 'staak-ui';
import { colors } from '@/assets/theme';
import styled from 'styled-components';

const SDiv = styled.div<any>`
	background-color: ${(props) => (props.accepted ? colors.GREEN_CLEAR_4 : colors.RED_CLEAR_4)};
	border-radius: 5px;
	padding: 5px 10px;
	margin-top: 15px;
`;
const ApplicationStatus = (props: any) => {
	return (
		<SDiv accepted={props.accepted}>
			<FlexBox justify="space-between" style={{ fontSize: '13px', padding: '5px 0' }}>
				<span style={{ color: `${colors.BLACK_4}` }}>Applicant {props.accepted ? 'Hired' : 'Declined'}</span>
				{/*<span style={{ color: `${colors.BLACK_4}` }}>22 July 2022</span>*/}
			</FlexBox>
			{/*!props.accepted && (
				<>
					<HrDivider color={props.accepted ? colors.GREEN_CLEAR_3 : colors.RED_CLEAR_3} />
					<p style={{ color: `${colors.BLACK_4}` }}>Because the candidat doesn't have enough experience in javascript</p>
				</>
			)*/}
		</SDiv>
	);
};

export default ApplicationStatus;
