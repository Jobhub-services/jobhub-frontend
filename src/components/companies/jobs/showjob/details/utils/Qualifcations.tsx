import { Tag, FlexBox } from 'staak-ui';
import { CertificateIcon, GraduationCapIcon, QuestionIcon, RequirementIcon, SkillsIcon } from '@/assets/icons';
import { IconProps } from '@/models/component';
import { STitle, SP } from './shared.styles';
import TitleIcon from '../../../_common/TitleIcon';
import styled from 'styled-components';
import { JobDetails } from '@/types/jobs.type';

const SUl = styled.ul`
	margin-top: 0;
`;
const Qualifications = (props: JobDetails) => {
	return (
		<div>
			<STitle>Qualifications</STitle>
			<div>
				<TitleIcon title="Education" icon={(props: IconProps) => <GraduationCapIcon {...props} />} />
				{props.education!.length > 0 ? (
					<SUl>
						{props.education?.map((elem, idx) => {
							return <li key={idx}>{elem}</li>;
						})}
					</SUl>
				) : (
					'N/A'
				)}
			</div>
			<div className="mt-10">
				<TitleIcon title="Certification" icon={(props: IconProps) => <CertificateIcon {...props} />} />
				{props.certification!.length > 0 ? (
					<SUl>
						{props.certification?.map((elem, idx) => {
							return <li key={idx}>{elem}</li>;
						})}
					</SUl>
				) : (
					'N/A'
				)}
			</div>
			<div className="mt-10">
				<TitleIcon title="Skills" icon={(props: IconProps) => <SkillsIcon {...props} />} />
				{props.skills!.length > 0 ? (
					<FlexBox justify="start" gap={10} style={{ marginLeft: '20px', marginTop: '5px' }}>
						{props.skills?.map((elem, idx) => {
							return <Tag key={idx}>{elem}</Tag>;
						})}
					</FlexBox>
				) : (
					'N/A'
				)}
			</div>
			<div className="mt-15">
				<TitleIcon title="Requirements" icon={(props: IconProps) => <RequirementIcon {...props} />} />
				{<SP>{props.requirements ?? 'N/A'}</SP>}
			</div>
			<div className="mt-10">
				<TitleIcon title="Questions" icon={(props: IconProps) => <QuestionIcon {...props} />} />
				{props.questions!.length > 0 ? (
					<SUl>
						{props.questions?.map((elem, idx) => {
							return <li key={idx}>{elem}</li>;
						})}
					</SUl>
				) : (
					'N/A'
				)}
			</div>
		</div>
	);
};

export default Qualifications;
