import { FlexBox, Headline, Tag } from 'staak-ui';
import { SUl, SPre, STitle } from '../jobReview.styles';
import styled from 'styled-components';
import { JobReviewProps } from '@/models/component';
import { useAppSelector } from '@/utils/appHooks';
import TitleIcon from '@/components/companies/jobs/_common/TitleIcon';
import { GraduationCapIcon, CertificateIcon, SkillsIcon, RequirementIcon, QuestionIcon } from '@/assets/icons';
import { IconProps } from '@/models/component';

const TagWrapper = styled(FlexBox)`
	justify-content: flex-start !important;
	flex-wrap: wrap;
	gap: 10px;
	margin-left: 20px;
`;
const Qualifications = (props: JobReviewProps) => {
	const { createJob } = useAppSelector((state) => state.job);
	const data = createJob;
	return (
		<div>
			<STitle>Qualifications</STitle>
			{data.education!.length > 0 && (
				<div className="mt-10">
					<TitleIcon title="Education" icon={(props: IconProps) => <GraduationCapIcon {...props} />} />
					<SUl>
						{data.education?.map((elem, idx) => {
							return <li key={idx}>{elem}</li>;
						})}
					</SUl>
				</div>
			)}
			{data.certification!.length > 0 && (
				<div className="mt-10">
					<TitleIcon title="Certification" icon={(props: IconProps) => <CertificateIcon {...props} />} />
					<SUl>
						{data.certification?.map((elem, idx) => {
							return <li key={idx}>{elem}</li>;
						})}
					</SUl>
				</div>
			)}
			{data.skills!.length > 0 && (
				<div className="mt-10">
					<TitleIcon title="Skills" icon={(props: IconProps) => <SkillsIcon {...props} />} />
					<TagWrapper>
						{data.skills?.map((elem, idx) => {
							return <Tag key={idx}>{elem.label}</Tag>;
						})}
					</TagWrapper>
				</div>
			)}
			{data.requirements !== '' && (
				<div className="mt-10">
					<TitleIcon title="Requirements" icon={(props: IconProps) => <RequirementIcon {...props} />} />
					<SPre>{data.requirements}</SPre>
				</div>
			)}
			{data.questions!.length > 0 && data.questions![0] !== '' && (
				<div className="mt-10">
					<TitleIcon title="Questions" icon={(props: IconProps) => <QuestionIcon {...props} />} />
					<SUl>
						{data.questions?.map((elem, idx) => {
							return <li key={idx}>{elem}</li>;
						})}
					</SUl>
				</div>
			)}
		</div>
	);
};

export default Qualifications;
