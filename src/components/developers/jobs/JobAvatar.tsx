import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { colors } from '@/assets/theme';
import { PJobAvatar } from '@/models/component/developer/jobs.interface';
import { EmpolyeesIcon } from '@/assets/icons';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { jobActions } from '@/modules/actions/developer/jobs.actions';

const SContainer = styled(FlexBox)`
	cursor: pointer;
`;
const SImg = styled.img`
	width: 40px;
	height: 40px;
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
	font-size: 13px;
	color: ${colors.BLACK_9};
`;

const JobAvatar = (props: PJobAvatar) => {
	const navigate = useNavigate();
	const viewDetail = () => {
		jobActions.getJob(props._id);
		navigate(`/jobs/detail/${props._id}`, { state: { activeTab: 'Overview' } });
	};
	return (
		<SContainer gap={10} justify="start" width="100%" onClick={viewDetail}>
			<SImg src={props.img} alt="google" />
			<div style={{ width: '100%' }}>
				<FlexBox justify="space-between">
					<SH3>{props.title}</SH3>
				</FlexBox>

				<FlexBox justify="start" gap={20} className="mt-5">
					<SSpan>{props.subtitle}</SSpan>
					<FlexBox gap={5}>
						<EmpolyeesIcon width="18px" height="18px" color={colors.BLACK_9} />
						<Span>1-10 Employees</Span>
					</FlexBox>
				</FlexBox>
			</div>
		</SContainer>
	);
};

export default JobAvatar;
