import { colors } from '@/assets/theme';
import { PApplicationAvatar } from '@/models/component/developer/application.interface';
import { FlexBox } from 'staak-ui';
import { DetailIcon } from '@/assets/icons';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { applicationActions } from '@/modules/actions/developer/application.actions';
import { useAppSelector } from '@/utils/appHooks';

const SContainer = styled(FlexBox)`
	cursor: pointer;
	padding: 15px 15px 5px 15px;
	transition: all 0.2s;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	&:hover {
		background-color: ${colors.PURPLE_1};
	}
`;
const SImg = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 7px;
`;

const SH3 = styled.h3`
	display: -webkit-box;
	margin: 0;
	font-family: inherit;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const SSpan = styled.span`
	display: inline-block;
	color: ${colors.BLACK_7};
	font-weight: 500;
`;
const Span = styled.span<any>`
	color: ${colors.PURPLE_BASE};
`;

const ApplicationAvatar = (props: PApplicationAvatar) => {
	const { applicationDetails } = useAppSelector((state) => state.talentApplications);
	const navigate = useNavigate();
	const handleClick = () => {
		if (applicationDetails?._id !== props.applicationId) applicationActions.getApplication(props.applicationId);
		navigate(`/applications/detail/${props.applicationId}`);
	};

	return (
		<SContainer gap={10} justify="start" width="100%" onClick={handleClick}>
			<SImg src={props.img} alt="img" />
			<div style={{ width: '100%' }}>
				<SH3>{props.title}</SH3>
				<FlexBox justify="space-between" gap={20} className="mt-5">
					<SSpan>{props.subtitle}</SSpan>
					<FlexBox gap={5} onClick={handleClick}>
						<Span>More details</Span>
						<DetailIcon color={colors.PURPLE_BASE} />
					</FlexBox>
				</FlexBox>
			</div>
		</SContainer>
	);
};
export default ApplicationAvatar;
