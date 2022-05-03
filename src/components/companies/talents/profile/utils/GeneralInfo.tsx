import { FlexBox, Tag, HrDivider } from 'staak-ui';
import { colors } from '@/assets/theme';
import EducationCard from './EducationCard';
import CertificationCard from './CertificationCard';
import WorkExperience from '@/components/companies/_common/WorkExperience';
import styled from 'styled-components';
import { TalentAllInfo } from '@/types/talent.type';

const STitle = styled.h2`
	margin: 10px 0;
	font-size: 18px;
	color: ${colors.BLUE_DARK_4};
`;

const GeneralInfo = (props: TalentAllInfo) => {
	return (
		<div className="staak_scrollbar" style={{ padding: '0 15px', overflow: 'auto' }}>
			<div>
				<STitle>Professional Summary</STitle>
				<p>{props.professional_summary}</p>
			</div>
			<div>
				<STitle>Skills</STitle>
				<FlexBox justify="start" gap={10}>
					{props.skills?.map((elem, idx) => {
						return <Tag key={idx}>{elem}</Tag>;
					})}
				</FlexBox>
			</div>
			<div className="mt-15">
				<STitle>Work Experience</STitle>
				<div>
					{props.work_experience?.map((elem, idx) => {
						return (
							<>
								<WorkExperience
									key={idx}
									title={elem.title}
									jobType={elem.job_type}
									company={elem.company}
									location={elem.location}
									dateRange={`${elem.startDate?.toDateString()} - ${elem.endDate?.toDateString()}`}
									description={elem.description}
								/>
								<HrDivider key={idx} top={15} side={0} />
							</>
						);
					})}
				</div>
			</div>
			<div className="mt-15">
				<STitle>Education</STitle>
				<div>
					{props.educations?.map((elem, idx) => {
						return (
							<>
								<EducationCard
									key={idx}
									title={elem.degree!}
									university={elem.school!}
									date={`${elem.startDate?.toDateString()} - ${elem.endDate?.toDateString()}`}
								/>
								<HrDivider key={idx} top={15} side={0} />
							</>
						);
					})}
				</div>
			</div>

			<div className="mt-15">
				<STitle>Certifications</STitle>
				<div>
					{props.certifications?.map((elem, idx) => {
						return (
							<>
								<CertificationCard
									title={elem.title!}
									date={elem.date?.toDateString()}
									provider={elem.provider}
									description={elem.description}
									link={elem.link}
								/>
								<HrDivider key={idx} top={15} side={0} />
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default GeneralInfo;
