import { RequirementIcon, GraduationCapIcon, CertificateIcon } from '@/assets/icons';
import TitleIcon from '@/components/common/jobs/TitleIcon';
import { STitle, SP } from '@/components/developers/jobs/details/common.style';
import { IconProps } from '@/models/component';
import { useAppSelector } from '@/utils/appHooks';
import styled from 'styled-components';

const SUl = styled.ul`
	margin-top: 0;
`;
const Qualifications = () => {
	const { jobDetails } = useAppSelector((state) => state.developerJobs);
	return (
		<div>
			<STitle>Qualifications</STitle>
			{jobDetails?.requirements && (
				<div>
					<TitleIcon title="Requirements" icon={(props: IconProps) => <RequirementIcon {...props} />} />
					<SP>{jobDetails?.requirements}</SP>
				</div>
			)}
			{jobDetails?.education?.length! > 0 && (
				<div>
					<TitleIcon title="Education" icon={(props: IconProps) => <GraduationCapIcon {...props} />} />
					{
						<SUl>
							{jobDetails?.education?.map((elem, idx) => {
								return <li key={idx}>{elem}</li>;
							})}
						</SUl>
					}
				</div>
			)}
			{jobDetails?.certification?.length! > 0 && (
				<div className="mt-10">
					<TitleIcon title="Certification" icon={(props: IconProps) => <CertificateIcon {...props} />} />
					{
						<SUl>
							{jobDetails?.certification?.map((elem, idx) => {
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
