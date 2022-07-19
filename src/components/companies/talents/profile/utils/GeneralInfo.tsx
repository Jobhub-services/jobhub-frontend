import { FlexBox, Tag, HrDivider } from 'staak-ui';
import { colors } from '@/assets/theme';
import EducationCard from './EducationCard';
import CertificationCard from './CertificationCard';
import WorkExperience from '@/components/companies/_common/WorkExperience';
import styled from 'styled-components';
import { TalentAllInfo } from '@/types/company/talent.type';

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
				<p>{props.summary}</p>
			</div>
			<div>
				<STitle>Skills</STitle>
				<FlexBox justify="start" gap={10}>
					{props.skills?.map((elem, idx) => {
						return <Tag key={idx}>{elem}</Tag>;
					})}
					{props.skills?.length === 0 && 'N/A'}
				</FlexBox>
			</div>
			<HrDivider top={15} side={0} />
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
									company={elem.company_name}
									location={elem.location}
									dateRange={`${elem.startDate ? new Date(elem.startDate).toDateString() : 'N/A'} - ${
										elem.endDate ? new Date(elem.endDate)?.toDateString() : 'N/A'
									}`}
									description={elem.description}
								/>
								<HrDivider key={idx} top={15} side={0} />
							</>
						);
					})}
					{props.work_experience?.length === 0 && 'N/A'}
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
									title={elem.title!}
									university={elem.school!}
									date={`${elem.startDate ? new Date(elem.startDate).toDateString() : 'N/A'} - ${
										elem.endDate ? new Date(elem.endDate)?.toDateString() : 'N/A'
									}`}
								/>
								<HrDivider key={idx} top={15} side={0} />
							</>
						);
					})}
					{props.educations?.length === 0 && 'N/A'}
				</div>
			</div>

			<div className="mt-15">
				<STitle>Certifications</STitle>
				<div>
					{props.certifications?.map((elem, idx) => {
						return (
							<>
								<CertificationCard
									key={idx}
									title={elem.title!}
									issuedDate={elem.issuedDate ? new Date(elem.issuedDate)?.toDateString() : 'N/A'}
									expirationDate={elem.expirationDate ? new Date(elem.expirationDate)?.toDateString() : 'N/A'}
									provider={elem.provider}
									description={elem.description}
									certificationId={elem.certificationId}
									link={elem.link}
								/>
								<HrDivider key={idx} top={15} side={0} />
							</>
						);
					})}
					{props.certifications?.length === 0 && 'N/A'}
				</div>
			</div>
		</div>
	);
};

export default GeneralInfo;
