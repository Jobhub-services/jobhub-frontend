import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { FlexBox, Button } from 'staak-ui';
import ApplicationCard from './ApplicationCard';
import { ApplicationContainerProps } from '@/models/component/companies/applications/applications.interface';
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';

const SHeader = styled(FlexBox)`
	justify-content: space-between !important;
	border-bottom: 1px solid ${colors.BLACK_12};
	padding: 7px 15px !important;
`;
const SButton = styled(Button)`
	font-size: 12px !important;
	font-weight: 500 !important;
`;
const STitle = styled.div`
	font-size: 18px;
	font-weight: 600;
	display: -webkit-box;
	margin: 0;
	font-family: inherit;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const SSpan = styled.span<any>`
	font-size: 13px;
	font-weight: 500;
	color: ${colors.BLACK_7};
	opacity: ${(props) => props.opacity};
`;
const AppContainer = styled.div`
	background-color: white;
	border-radius: 8px;
	box-shadow: 0px 0px 20px -15px ${colors.BLACK_7};
`;
const CardContainer = styled.div<any>`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
	padding: 10px 15px;
`;
const ApplicationContainer = (props: ApplicationContainerProps) => {
	const { status } = useParams();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	function handleClick() {
		navigate(`/jobs/details/${props.job_id}`);
	}
	function allApplicants() {
		searchParams.set('jobId', props.job_id);
		const params = createSearchParams(searchParams);
		navigate(`/applicants/search/${status}/?${params}`);
	}
	return (
		<AppContainer>
			<div>
				<SHeader>
					<div style={{ width: '65%' }}>
						<STitle>{props.title}</STitle>
						<SSpan opacity={0.6}>{props.category}</SSpan>
					</div>
					<FlexBox justify="end" gap={10} width="45%">
						<SButton size="md" variant="text" onClick={handleClick}>
							View Job
						</SButton>
						<SButton size="md" variant="light" onClick={allApplicants}>
							All Applicants
						</SButton>
					</FlexBox>
				</SHeader>
			</div>
			<CardContainer>
				{props.applications?.map((elem, idx) => {
					return (
						<ApplicationCard
							key={idx}
							_id={elem._id}
							avatar={elem.avatar}
							firstName={elem.firstName}
							lastName={elem.lastName}
							role={elem.role}
							motivation={elem.motivation}
							skills={elem.skills}
							createdAt={elem.createdAt}
							linkedIn={elem.linkedIn}
							git={elem.git}
							cv={elem.cv}
							status={elem.status}
							userStatus={elem.userStatus}
						/>
					);
				})}
			</CardContainer>
		</AppContainer>
	);
};

export default ApplicationContainer;
