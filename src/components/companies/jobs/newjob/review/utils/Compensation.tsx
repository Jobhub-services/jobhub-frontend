import { IconProps } from '@/models/component';
import { JobReviewProps } from '@/models/component';
import { useAppSelector } from '@/utils/appHooks';
import { SPre, STitle } from '../jobReview.styles';
import { BenefitIcon, MoneyIcon } from '@/assets/icons';
import TitleIcon from '@/components/common/jobs/TitleIcon';
import { colors } from '@/assets/theme';
import styled from 'styled-components';

const SSpan = styled.span`
	color: ${colors.BLACK_2};
`;
const Compensation = (props: JobReviewProps) => {
	const { createJob } = useAppSelector((state) => state.job);
	const data = createJob;
	return (
		<div>
			<STitle>Compensation</STitle>
			<div>
				<TitleIcon title="Salary" icon={(props: IconProps) => <MoneyIcon {...props} />} />
				<div style={{ marginLeft: '20px' }}>
					<SSpan>{data.start_salary !== '' ? data.start_salary : 'N/A'}</SSpan>-
					<SSpan>
						{data.end_salary !== '' ? data.end_salary : 'N/A'} / {data.salary_type}
					</SSpan>
					<SSpan style={{ marginLeft: '10px' }}>{data.currency?.name}</SSpan>
				</div>
			</div>
			<div className="mt-10">
				<TitleIcon title="Benefits" icon={(props: IconProps) => <BenefitIcon {...props} />} />
				<SPre>{data.benefits !== '' ? data.benefits : 'N/A'}</SPre>
			</div>
		</div>
	);
};

export default Compensation;
