import styled, { css } from 'styled-components';
import { colors } from '@/assets/theme';
import { FlexBox, Button } from 'staak-ui';
import ApplicationCard from './ApplicationCard';

const SSpan = styled.span<any>`
	font-size: 13px;
	font-weight: 500;
	color: ${colors.BLACK_7};
	opacity: ${(props) => props.opacity};
`;
const CustomizedButton = styled(Button)`
	font-size: 12px !important;
	font-weight: 500 !important;
	${(props) =>
		props.pColor &&
		css`
			background-color: ${props.pColor} !important;
			border: none !important;
			color: ${props.textColor ? props.textColor : colors.PURPLE_BASE} !important;
		`}
`;
const AppContainer = styled.div`
	background-color: white;
	border-radius: 8px;
	border: 1px solid ${colors.BLACK_12};
`;
const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
	padding: 10px 10px;
`;
const ApplicationContainer = () => {
	return (
		<AppContainer>
			<div>
				<FlexBox style={{ borderBottom: `1px solid ${colors.BLACK_12}`, padding: '7px 10px' }} justify="space-between">
					<FlexBox justify="flex-start" align="flex-start">
						<div style={{ marginLeft: '5px' }}>
							<div style={{ fontWeight: '600', fontSize: '18px' }}>Senior frontend developer</div>
							<SSpan opacity={0.6}>Humain resource administration </SSpan>
						</div>
					</FlexBox>
					<FlexBox style={{ gap: '10px' }}>
						<CustomizedButton variant="text">View Job</CustomizedButton>
						<CustomizedButton pColor={colors.PURPLE_1}>All Applicants</CustomizedButton>
					</FlexBox>
				</FlexBox>
			</div>
			<CardContainer>
				<ApplicationCard applicantId={1} />
				<ApplicationCard />
			</CardContainer>
		</AppContainer>
	);
};

export default ApplicationContainer;
