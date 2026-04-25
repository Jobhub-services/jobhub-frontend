import { IconProps } from '@/models/component';
import { JobReviewProps } from '@/models/component';
import { useAppSelector } from '@/utils/appHooks';
import { SPre, STitle } from '@/components/companies/jobs/newjob/review/jobReview.styles';
import { BenefitIcon, MoneyIcon } from '@/assets/icons';
import TitleIcon from '@/components/common/jobs/TitleIcon';
import { colors } from '@/assets/theme';
import styled from 'styled-components';
import parse from 'html-react-parser';

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
				<div className="mt-10">
					<SSpan>{data?.start_salary !== '' ? parseInt(data?.start_salary!).toLocaleString('en-US') : 'N/A'}</SSpan>-
					<SSpan>
						{data?.end_salary !== '' ? parseInt(data?.end_salary!).toLocaleString('en-US') : 'N/A'} / {data.salary_type}
					</SSpan>
					<SSpan style={{ marginLeft: '10px' }}>{data.currency?.name}</SSpan>
				</div>
			</div>
			<div className="mt-10">
				<TitleIcon title="Benefits" icon={(props: IconProps) => <BenefitIcon {...props} />} />
				<SPre>{data.benefits !== '' ? parse(data.benefits ?? '') : 'N/A'}</SPre>
			</div>
		</div>
	);
};

export default Compensation;
