import { Tag, FlexBox } from 'staak-ui';
import { CertificateIcon, GraduationCapIcon, QuestionIcon, RequirementIcon, SkillsIcon } from '@/assets/icons';
import { IconProps } from '@/models/component';
import { STitle, SP } from './shared.styles';
import TitleIcon from '../../../_common/TitleIcon';
import styled from 'styled-components';

const SUl = styled.ul`
	margin-top: 0;
`;
const Qualifications = () => {
	return (
		<div>
			<STitle>Qualifications</STitle>
			<div>
				<TitleIcon title="Education" icon={(props: IconProps) => <GraduationCapIcon {...props} />} />
				<SUl>
					<li>Bachelor degrees in management</li>
					<li>Master in Information Technology field</li>
				</SUl>
			</div>
			<div className="mt-10">
				<TitleIcon title="Certification" icon={(props: IconProps) => <CertificateIcon {...props} />} />
				<SUl>
					<li>Machin learning and deep learning</li>
					<li>Web developement using react js</li>
					<li>Web developement using react js</li>
				</SUl>
			</div>
			<div className="mt-10">
				<TitleIcon title="Skills" icon={(props: IconProps) => <SkillsIcon {...props} />} />
				<FlexBox justify="start" gap={10} style={{ marginLeft: '20px', marginTop: '5px' }}>
					<Tag>Reactjs</Tag>
					<Tag>Laravel</Tag>
					<Tag>Python</Tag>
					<Tag>Nodejs</Tag>
				</FlexBox>
			</div>
			<div className="mt-15">
				<TitleIcon title="Requirements" icon={(props: IconProps) => <RequirementIcon {...props} />} />
				<SP>
					- 1 year of experience building production, customer-facing React applications.
					<br />
					- 3 years of experience building production, customer-facing frontend applications (using React or any other frontend toolchain)
					<br />
					- Strong verbal and written communication skills
					<br />
					- Some experience with a statically-typed language (e.g. TypeScript)
					<br />
				</SP>
			</div>
			<div className="mt-10">
				<TitleIcon title="Questions" icon={(props: IconProps) => <QuestionIcon {...props} />} />
				<SUl>
					<li>Profit-sharing distributed quarterly?</li>
					<li>Continuous events like happy hour & regular hosted meetups?</li>
					<li>Why do you live in algeria?</li>
				</SUl>
			</div>
		</div>
	);
};

export default Qualifications;
