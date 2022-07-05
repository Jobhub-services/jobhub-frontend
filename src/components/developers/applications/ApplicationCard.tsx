import { colors } from '@/assets/theme';
import { SContainer } from '@/components/developers/_common/common.style';
import { PApplicationCard } from '@/models/component/developer/application.interface';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
import ApplicationAvatar from '@/components/developers/applications/ApplicationAvatar';
import { CApplicationStatus, TxtApplicationStatus } from '@/constants/developer/application.constants';
import { ClockIcon } from '@/assets/icons';
import moment from 'moment';

const SPre = styled.pre<any>`
	display: -webkit-box;
	color: ${colors.BLACK_7};
	margin: 10px 0;
	font-family: inherit;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const SStatus = styled.span<any>`
	display: inline-block;
	width: 10px;
	height: 10px;
	background-color: ${(props) => props.color};
	border-radius: 50%;
`;

const SSpan = styled.span`
	font-weight: 500;
	color: ${colors.BLACK_9};
`;
const SBody = styled.div`
	padding: 15px 15px;
	height: 135px;
`;
const SFooter = styled(FlexBox)`
	padding: 10px 15px !important;
	border-top: 1px solid ${colors.PURPLE_1};
	height: 42px;
`;
const ApplicationCard = (props: PApplicationCard) => {
	const posted_at = moment(new Date(props.createdAt!)).fromNow();
	return (
		<SContainer>
			<SBody>
				<FlexBox>
					<ApplicationAvatar img={props.avatar} title={props.jobId?.title} subtitle={props.company?.name} applicationId={props._id} />
				</FlexBox>
				<SPre>{props.motivation}</SPre>
			</SBody>
			<SFooter justify="space-between">
				<FlexBox gap={5}>
					<SStatus color={CApplicationStatus[props.status!]} />
					<SSpan style={{ color: `${CApplicationStatus[props.status!]}` }}>{TxtApplicationStatus[props.status!]}</SSpan>
				</FlexBox>
				<FlexBox gap={5}>
					<ClockIcon color={colors.BLACK_9} />
					<SSpan>Posted {posted_at}</SSpan>
				</FlexBox>
			</SFooter>
		</SContainer>
	);
};

export default ApplicationCard;
