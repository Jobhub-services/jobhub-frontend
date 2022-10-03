import { useAppSelector } from '@/utils/appHooks';
import { STitle, SSpan } from '@/components/developers/jobs/details/common.style';
import { Button, FlexBox } from 'staak-ui';
import styled from 'styled-components';
import { ClockIcon, CompanyIcon, EmpolyeesIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const Container = styled(FlexBox)`
	width: 100%;
`;
const SImg = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 7px;
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

const JobHeader = () => {
	const navigate = useNavigate();
	const { jobDetails } = useAppSelector((state) => state.developerJobs);
	const posted_at = moment(new Date(jobDetails?.createdAt!)).fromNow();

	const handleClick = () => {
		navigate(`/companies/detail/${jobDetails?.company?._id}`, { state: { onlyDetail: true } });
	};

	return (
		<Container justify="start" gap={10}>
			{jobDetails?.company?.avatar ? (
				<SImg src={jobDetails?.company?.avatar} alt="img" />
			) : (
				<SIcon>
					<CompanyIcon width="28px" height="28px" color={colors.BLACK_7} />
				</SIcon>
			)}
			<div>
				<STitle>{jobDetails?.title}</STitle>
				<FlexBox justify="space-between" gap={20}>
					<FlexBox justify="start" gap={20}>
						<SSpan>{jobDetails?.company?.companyName ?? 'N/A'}</SSpan>
						<FlexBox gap={5}>
							<EmpolyeesIcon width="18px" height="18px" color={colors.BLACK_9} />
							<Span>{jobDetails?.company?.company_size}</Span>
						</FlexBox>
						<Button size="sm" variant="text" style={{ fontSize: '13px' }} onClick={handleClick}>
							View company details
						</Button>
					</FlexBox>
					{jobDetails?.createdAt && (
						<FlexBox justify="start" gap={5}>
							<ClockIcon color={colors.BLACK_9} />
							<SSpan>Posted {posted_at}</SSpan>
						</FlexBox>
					)}
				</FlexBox>
			</div>
		</Container>
	);
};

export default JobHeader;
