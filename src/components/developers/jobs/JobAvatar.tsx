import styled from 'styled-components';
import { FlexBox } from 'staak-ui';
import { colors } from '@/assets/theme';
import { PJobAvatar } from '@/models/component/developer/jobs.interface';
import { CompanyIcon, EmpolyeesIcon } from '@/assets/icons';
import { useNavigate } from 'react-router-dom';
import { jobActions } from '@/modules/actions/developer/jobs.actions';
import { useAppSelector } from '@/utils/appHooks';

const SContainer = styled(FlexBox)`
	cursor: pointer;
`;
const SImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	object-fit: cover;
`;

const ImgContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 50%;
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
const SIcon = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${colors.BLACK_13};
	border-radius: 50%;
	padding: 8px;
`;
const JobAvatar = (props: PJobAvatar) => {
	const { jobDetails } = useAppSelector((state) => state.developerJobs);
	const navigate = useNavigate();
	const viewDetail = () => {
		if (jobDetails?._id !== props._id) jobActions.getJob(props._id);
		navigate(`/jobs/detail/${props._id}`, { state: { activeTab: 'Overview' } });
	};
	return (
		<SContainer gap={10} justify="start" width="100%" onClick={viewDetail}>
			{props.img ? (
				<ImgContainer>
					<SImg src={props.img} alt="img" />
				</ImgContainer>
			) : (
				<SIcon>
					<CompanyIcon width="28px" height="28px" color={colors.BLACK_7} />
				</SIcon>
			)}

			<div style={{ width: 'calc(100% - 40px)' }}>
				<FlexBox justify="space-between">
					<SH3>{props.title}</SH3>
				</FlexBox>

				<FlexBox justify="start" gap={20} className="mt-5">
					<SSpan>{props.subtitle ?? 'N/A'}</SSpan>
					<FlexBox gap={5}>
						<EmpolyeesIcon width="18px" height="18px" color={colors.BLACK_9} />
						<Span>{props.company_size ?? 'N/A'}</Span>
					</FlexBox>
				</FlexBox>
			</div>
		</SContainer>
	);
};

export default JobAvatar;
