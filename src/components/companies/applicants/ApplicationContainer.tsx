import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { FlexBox, Button } from 'staak-ui';
import ApplicationCard from './ApplicationCard';
import { ApplicationContainerProps } from '@/models/component/companies/applications/applications.interface';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';

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
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	function handleClick() {
		navigate(`/jobs/details/${props.jobId}`);
	}
	function allApplicants() {
		searchParams.set('jobId', props.jobId);
		const params = createSearchParams(searchParams);
		navigate(`search?${params}`);
	}
	return (
		<AppContainer>
			<div>
				<SHeader>
					<div>
						<STitle>{props.title}</STitle>
						<SSpan opacity={0.6}>{props.category}</SSpan>
					</div>
					<FlexBox gap={10}>
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
				{props.applicants?.map((elem, idx) => {
					return (
						<ApplicationCard
							key={idx}
							applicantId={elem.applicantId}
							img={elem.img}
							name={elem.name}
							role={elem.role}
							experience_duration={elem.experience_duration}
							cover_letter={elem.cover_letter}
							skils={elem.skils}
							applied={elem.applied}
							linkedIn={elem.linkedIn}
							github={elem.github}
							cv={elem.cv}
							applicationStatus={elem.applicationStatus}
						/>
					);
				})}
			</CardContainer>
		</AppContainer>
	);
};

export default ApplicationContainer;
