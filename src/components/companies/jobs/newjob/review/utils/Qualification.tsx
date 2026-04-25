import { FlexBox, Tag } from 'staak-ui';
import { SUl, SPre, STitle } from '../jobReview.styles';
import styled from 'styled-components';
import { JobReviewProps } from '@/models/component';
import { useAppSelector } from '@/utils/appHooks';
import TitleIcon from '@/components/common/jobs/TitleIcon';
import { GraduationCapIcon, CertificateIcon, SkillsIcon, RequirementIcon, QuestionIcon } from '@/assets/icons';
import { IconProps } from '@/models/component';
import parse from 'html-react-parser';

const TagWrapper = styled(FlexBox)`
	justify-content: flex-start !important;
	flex-wrap: wrap;
	gap: 10px !important;
`;
const Qualifications = (props: JobReviewProps) => {
	const { createJob } = useAppSelector((state) => state.job);
	const data = createJob;
	return (
		<div>
			<STitle>Qualifications</STitle>
			<div className="mt-10">
				<TitleIcon title="Education" icon={(props: IconProps) => <GraduationCapIcon {...props} />} />

				{data.education!.length > 0 ? (
					<SUl>
						{data.education?.map((elem, idx) => {
							return <li key={idx}>{elem}</li>;
						})}
					</SUl>
				) : (
					'N/A'
				)}
			</div>
			<div className="mt-10">
				<TitleIcon title="Certification" icon={(props: IconProps) => <CertificateIcon {...props} />} />

				{data.certification!.length > 0 ? (
					<SUl>
						{data.certification?.map((elem, idx) => {
							return <li key={idx}>{elem}</li>;
						})}
					</SUl>
				) : (
					'N/A'
				)}
			</div>
			<div className="mt-10">
				<TitleIcon title="Skills" icon={(props: IconProps) => <SkillsIcon {...props} />} />
				<TagWrapper>
					{data.skills!.length > 0
						? data.skills?.map((elem, idx) => {
								return <Tag key={idx}>{elem.label}</Tag>;
						  })
						: 'N/A'}
				</TagWrapper>
			</div>
			<div className="mt-10">
				<TitleIcon title="Requirements" icon={(props: IconProps) => <RequirementIcon {...props} />} />
				<SPre>{data.requirements !== '' ? parse(data.requirements ?? '') : 'N/A'}</SPre>
			</div>
			<div className="mt-10">
				<TitleIcon title="Questions" icon={(props: IconProps) => <QuestionIcon {...props} />} />

				{data.questions!.length > 0 && data.questions![0] !== '' ? (
					<SUl>
						{data.questions?.map((elem, idx) => {
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
