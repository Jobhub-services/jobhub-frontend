import { RequirementIcon, GraduationCapIcon, CertificateIcon } from '@/assets/icons';
import TitleIcon from '@/components/common/jobs/TitleIcon';
import { STitle, SP } from '@/components/developers/jobs/details/common.style';
import { IconProps } from '@/models/component';
import { TJobDetails } from '@/types/developer/job.type';
import styled from 'styled-components';

const SUl = styled.ul`
	margin-top: 0;
`;
const Qualifications = ({ data }: { data: TJobDetails }) => {
	return (
		<div>
			<STitle>Qualifications</STitle>
			{data?.requirements && (
				<div>
					<TitleIcon title="Requirements" icon={(props: IconProps) => <RequirementIcon {...props} />} />
					<SP>{data?.requirements}</SP>
				</div>
			)}
			{data?.education?.length! > 0 && (
				<div>
					<TitleIcon title="Education" icon={(props: IconProps) => <GraduationCapIcon {...props} />} />
					{
						<SUl>
							{data?.education?.map((elem, idx) => {
								return <li key={idx}>{elem}</li>;
							})}
						</SUl>
					}
				</div>
			)}
			{data?.certification?.length! > 0 && (
				<div className="mt-10">
					<TitleIcon title="Certification" icon={(props: IconProps) => <CertificateIcon {...props} />} />
					{
						<SUl>
							{data?.certification?.map((elem, idx) => {
								return <li key={idx}>{elem}</li>;
							})}
						</SUl>
					}
				</div>
			)}
		</div>
	);
};

export default Qualifications;
