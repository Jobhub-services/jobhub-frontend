import JobDescription from '@/components/developers/jobs/details/JobDescription';
import Compensation from '@/components/developers/jobs/details/Compensation';
import Qualifications from '@/components/developers/jobs/details/Qualifications';
import { colors } from '@/assets/theme';
import { HrDivider } from 'staak-ui';
import { PJobGeneralInfo } from '@/models/component/developer/jobs.interface';
import styled from 'styled-components';

const SContainer = styled.div`
	padding: 0 10px;
	width: 77%;
`;
const JobGeneralInfo = ({ qualificationIsEmpty, storeData }: PJobGeneralInfo) => {
	return (
		<SContainer>
			<JobDescription data={storeData} />
			<HrDivider color={colors.BLACK_12} top={10} side={0} />
			<Compensation data={storeData} />
			{qualificationIsEmpty && (
				<>
					<HrDivider color={colors.BLACK_12} top={10} side={0} />
					<Qualifications data={storeData} />
				</>
			)}
		</SContainer>
	);
};

export default JobGeneralInfo;
