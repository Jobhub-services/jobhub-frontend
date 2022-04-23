import styled, { css } from 'styled-components';
import { FlexBox, Tag, Button } from 'staak-ui';
import { LinkedinIcon, GithubIcon } from 'staak-ui';
import { colors } from '@/assets/theme';
import CVIcon from '@/assets/icons/CVIcon';
import Jerome from '@/assets/icons/jerome.jpg';
import { ApplicantCardProps } from '@/models/component/companies/applications/applications.interface';
import { useNavigate } from 'react-router-dom';

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
const SCard = styled.div`
	background: white;
	box-shadow: 0 0 20px 0 rgb(76 87 125 / 2%);
	border-radius: 8px;
	border: 1px solid ${colors.BLACK_12};
`;
const SButton = styled.div<any>`
	display: flex;
	align-items: center;
	gap: 5px;
	padding: 7px 10px;
	background-color: ${(props) => props.background};
	color: ${(props) => props.color};
	border-radius: 8px;
	font-size: 12px;
	cursor: pointer;
`;
const SGap = styled(FlexBox)`
	gap: 10px;
`;
const SSpan = styled.span`
	font-size: 13px;
	font-weight: 500;
	color: ${colors.BLACK_7};
`;

const ApplicationCard = ({ applicantId }: ApplicantCardProps) => {
	const navigate = useNavigate();
	function viewDetails(id?: number) {
		navigate(`/applicants/detail/${id}`);
	}
	return (
		<SCard>
			<FlexBox justify="space-between" style={{ padding: '8px 10px', borderBottom: `1px solid ${colors.BLACK_12}` }}>
				<SGap align="flex-start">
					<img src={Jerome} alt="avatar" width={50} height={50} style={{ borderRadius: '50%' }} />
					<div>
						<div>
							<strong>Jerome Bell</strong>
						</div>
						<SSpan>Fullstack developer</SSpan>
					</div>
				</SGap>
				<CustomizedButton onClick={() => viewDetails(applicantId)} variant="text">
					View details
				</CustomizedButton>
			</FlexBox>
			<div style={{ padding: '10px 10px' }}>
				<p style={{ height: '45px', overflow: 'hidden' }}>
					I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018. I have created a lot of web
					applications for many France companies.
				</p>
				<FlexBox justify="flex-start">
					<span style={{ color: `${colors.BLACK_4}` }}>Skills</span>
					<FlexBox style={{ gap: '10px', marginLeft: '10px' }}>
						<Tag>Laravel</Tag>
						<Tag>PHP</Tag>
						<Tag>Django</Tag>
					</FlexBox>
				</FlexBox>
				<FlexBox justify="flex-start" className="mt-10" style={{ gap: '10px' }}>
					<SButton background={colors.BLUE_CLEAR_5} color={colors.BLUE_BASE}>
						<LinkedinIcon width="20px" height="20px" color={colors.BLUE_BASE} />
						<span>LinkedIn</span>
					</SButton>
					<SButton background={colors.PURPLE_1} color={colors.PURPLE_BASE}>
						<CVIcon width="20px" height="20px" color={colors.PURPLE_BASE} />
						<span>CV (.pdf)</span>
					</SButton>
					<SButton background={colors.BLACK_13}>
						<GithubIcon />
						<span>Git</span>
					</SButton>
				</FlexBox>
			</div>
			<FlexBox justify="space-between" style={{ borderTop: `1px solid ${colors.BLACK_12}`, padding: '10px 10px' }}>
				<FlexBox style={{ gap: '10px' }}>
					<CustomizedButton pColor={colors.PURPLE_1} color="green">
						Approve
					</CustomizedButton>
					<CustomizedButton variant="text" color="red">
						Decline
					</CustomizedButton>
				</FlexBox>
				<div style={{ fontSize: '12px' }}> 12 March 2022</div>
			</FlexBox>
		</SCard>
	);
};

export default ApplicationCard;
