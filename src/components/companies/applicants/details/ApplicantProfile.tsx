import WorkExperience from './WorkExperience';
import { FlexBox, Button, Tag, HrDivider } from 'staak-ui';
import { CVIcon } from '@/assets/icons';
import styled from 'styled-components';
import { colors } from '@/assets/theme';

const SH3 = styled.h3`
	margin: 10px 0;
`;
const SDiv = styled.div`
	color: ${colors.BLACK_8};
`;
const ApplicantProfile = () => {
	return (
		<div>
			<div>
				<FlexBox justify="space-between">
					<SH3>Cover letter</SH3>
					<Button startIcon={<CVIcon />} size="md">
						Download CV
					</Button>
				</FlexBox>
				<p style={{ textAlign: 'justify', margin: '5px 0' }}>
					I am Jerome Bell, a software enginner. I am working as a frontend, backend, and full-stack developer since 2018. I have created a lot of web
					applications for many France companies. I have worked as a project manager for several projects I have team management capabilities. I have
					very good experience javascript/ReactJs and php/laravel (more than 4 years of hard work) I like challenges and solving complex problems I
					always make my efforts, and I like innovation and the adoption of new technologies I don't care about the amount of work I do, the thing
					that interests me is the contribution to the growth of the business I am very excited to join the company and contribute to its growth I
					have very good experience in javascript and its frameworks (reactjs, nodejs, express js) (more than 3 years) I am experienced with
					PHP/Laravel.(more than 4 years) I use docker in my work I am experienced with Python (more than 3 years) I have a professional certificate
					in deep learning and machine learning I always try to integrate technologies of artificial intelligence into my work. More details are
					shared in my resume I can share with you all the work that i have performed
				</p>
			</div>
			<FlexBox justify="flex-start" gap={10}>
				<SH3>Skills</SH3>
				<FlexBox gap={10}>
					<Tag>Laravel</Tag>
					<Tag>PHP</Tag>
					<Tag>Django</Tag>
				</FlexBox>
			</FlexBox>
			<div>
				<SH3>Work Experience</SH3>
				<WorkExperience
					title="Senior frontend developer"
					jobType="Part-time"
					company="Google"
					location="Los Angeles"
					dateRange="April 17.2019 - July 18.2020"
				/>
				<HrDivider top={10} side={0} />
				<WorkExperience
					title="Junior frontend developer"
					jobType="Full-time"
					company="Figma"
					location="San Fransisco"
					dateRange="Fev 25.2020 - Jan 25.2022"
				/>
				<HrDivider top={10} side={0} />
				<WorkExperience
					title="Junior frontend developer"
					jobType="Full-time"
					company="Figma"
					location="San Fransisco"
					dateRange="Fev 25.2020 - Jan 25.2022"
				/>
			</div>
			<div>
				<SH3>Questions</SH3>
				<div>
					<div style={{ margin: '5px 0' }}>Motivational letter: Why do you want to work here?</div>
					<SDiv>Because i want to join </SDiv>
				</div>
				<div>
					<div style={{ margin: '5px 0' }}>Motivational letter: Why do you want to work here?</div>
					<SDiv>Because i think i am fit the requirements of the job </SDiv>
				</div>
			</div>
			<div>
				<SH3>Availability</SH3>
				<FlexBox justify="start" gap={5}>
					<span>Notice period</span>
					<SDiv>Immediately</SDiv>
				</FlexBox>
				<FlexBox justify="start" gap={5}>
					<span>Start working</span>
					<SDiv>July 29.2022</SDiv>
				</FlexBox>
			</div>
		</div>
	);
};

export default ApplicantProfile;
