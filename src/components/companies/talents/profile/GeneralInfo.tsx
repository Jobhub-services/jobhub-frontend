import { FlexBox, Tag, HrDivider } from 'staak-ui';
import { colors } from '@/assets/theme';
import EducationCard from './EducationCard';
import CertificationCard from './CertificationCard';
import WorkExperience from '@/components/companies/_common/WorkExperience';
import styled from 'styled-components';

const STitle = styled.h2`
	margin: 10px 0;
	font-size: 18px;
	color: ${colors.BLUE_DARK_4};
`;

const GeneralInfo = () => {
	return (
		<div className="staak_scrollbar" style={{ padding: '0 15px', overflow: 'auto' }}>
			<div>
				<STitle>Professional Summary</STitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
					centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
					of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
					versions of Lorem Ipsum.
				</p>
			</div>
			<div>
				<STitle>Skills</STitle>
				<FlexBox justify="start" gap={10}>
					<Tag>ReactJs</Tag>
					<Tag>PHP</Tag>
					<Tag>Laravel</Tag>
					<Tag>MongoDB</Tag>
				</FlexBox>
			</div>
			<div className="mt-15">
				<STitle>Work Experience</STitle>
				<div>
					<WorkExperience
						title="Senior frontend developer"
						jobType="Part-time"
						company="Google"
						location="Los Angeles"
						dateRange="April 17.2019 - July 18.2020"
						description="The course of the certification, explore the basic structure of a web application, and how a web browser interacts with a web server. You'll be introduced to the request/response cycle, including GET/POST/Redirect. You'll also gain an introductory understanding of Hypertext Markup Language (HTML), as well as the basic syntax and data structures of the PHP language, variables, logic, iteration, arrays, error handling, and superglobal variables, among other elements. An introduction to Cascading Style Sheets (CSS) will allow you to style markup for webpages. Lastly, you'll gain the skills and knowledge to install and use an integrated PHP/MySQL environment like XAMPP or MAMP"
						link="http//www.google.com"
					/>
					<HrDivider top={15} side={0} />
				</div>
			</div>
			<div className="mt-15">
				<STitle>Education</STitle>
				<div>
					<EducationCard title="Master in computer science" university="Hight School of Computer Science" date="Jan 12, 2017 - Dec 12, 2022" />
					<HrDivider top={15} side={0} />
				</div>
			</div>

			<div className="mt-15">
				<STitle>Certifications</STitle>
				<div>
					<CertificationCard
						title="Building Web Applications in PHP"
						date="Jan 12, 2017"
						provider="Coursera"
						description="the course of the certification, explore the basic structure of a web application, and how a web browser interacts with a web server. You'll be introduced to the request/response cycle, including GET/POST/Redirect. You'll also gain an introductory understanding of Hypertext Markup Language (HTML), as well as the basic syntax and data structures of the PHP language, variables, logic, iteration, arrays, error handling, and superglobal variables, among other elements. An introduction to Cascading Style Sheets (CSS) will allow you to style markup for webpages. Lastly, you'll gain the skills and knowledge to install and use an integrated PHP/MySQL environment like XAMPP or MAMP"
						link="http://www.google.com"
					/>
					<HrDivider top={15} side={0} />
					<CertificationCard
						title="Building Web Applications in PHP"
						date="Jan 12, 2017"
						provider="Coursera"
						description="the course of the certification, explore the basic structure of a web application, and how a web browser interacts with a web server. You'll be introduced to the request/response cycle, including GET/POST/Redirect. You'll also gain an introductory understanding of Hypertext Markup Language (HTML), as well as the basic syntax and data structures of the PHP language, variables, logic, iteration, arrays, error handling, and superglobal variables, among other elements. An introduction to Cascading Style Sheets (CSS) will allow you to style markup for webpages. Lastly, you'll gain the skills and knowledge to install and use an integrated PHP/MySQL environment like XAMPP or MAMP"
						link="http://www.google.com"
					/>
					<HrDivider top={15} side={0} />
				</div>
			</div>
		</div>
	);
};

export default GeneralInfo;
