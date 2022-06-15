import { useAppSelector } from '@/utils/appHooks';
import { STitle, SSpan } from '@/components/developers/jobs/details/common.style';
import { Button, FlexBox } from 'staak-ui';
import styled from 'styled-components';
import { ClockIcon, EmpolyeesIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import moment from 'moment';
import Google from '@/assets/icons/google.jpg';

const Container = styled(FlexBox)`
	width: 100%;
`;
const SImg = styled.img`
	width: 35px;
	height: 35px;
	border-radius: 7px;
`;
const Span = styled.span<any>`
	font-size: 13px;
	color: ${colors.BLACK_9};
`;
const JobHeader = () => {
	const { jobDetails } = useAppSelector((state) => state.developerJobs);
	const posted_at = moment(new Date(jobDetails?.createdAt!)).fromNow();
	return (
		<Container justify="start" gap={10}>
			<SImg src={Google} alt="google" />
			<div>
				<STitle>{jobDetails?.title}</STitle>
				<FlexBox justify="space-between" gap={20}>
					<FlexBox justify="start" gap={20}>
						<SSpan>{jobDetails?.company_name}</SSpan>
						<FlexBox gap={5}>
							<EmpolyeesIcon width="18px" height="18px" color={colors.BLACK_9} />
							<Span>1-10 Employees</Span>
						</FlexBox>
						<Button size="sm" variant="text" style={{ fontSize: '13px' }}>
							View company details
						</Button>
					</FlexBox>
					<FlexBox justify="start" gap={5}>
						<ClockIcon color={colors.BLACK_9} />
						<SSpan>Posted {posted_at}</SSpan>
					</FlexBox>
				</FlexBox>
			</div>
		</Container>
	);
};

export default JobHeader;
