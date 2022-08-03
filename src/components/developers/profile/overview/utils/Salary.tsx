import { SpanTitle, SSpan } from '@/components/developers/profile/common';
import { useAppSelector } from '@/utils/appHooks';
import { FlexBox } from 'staak-ui';

const Salary = () => {
	const { salary, currency } = useAppSelector((state) => state.developerProfile.profile);
	const displaySalary = salary && salary !== '' && currency;
	return (
		<div>
			<SpanTitle>Annual salary</SpanTitle>
			<div className="mt-15">
				{displaySalary ? (
					<FlexBox justify="start" align="start" gap={10}>
						<span>{parseInt(salary).toLocaleString('en-US')}</span>
						<SSpan>{currency.name}</SSpan>
					</FlexBox>
				) : (
					<SSpan>Flexible</SSpan>
				)}
			</div>
		</div>
	);
};

export default Salary;
