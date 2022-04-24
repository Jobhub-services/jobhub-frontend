import { colors } from '@/assets/theme';
import { MoneyIcon, BenefitIcon } from '@/assets/icons';
import { IconProps } from '@/models/component';
import { STitle, SP } from './shared.styles';
import TitleIcon from './TitleIcon';

const Compensation = () => {
	return (
		<div>
			<STitle>Compensation</STitle>
			<div>
				<TitleIcon title="Salary" icon={(props: IconProps) => <MoneyIcon {...props} />} />
				<span style={{ marginLeft: '20px', color: `${colors.BLACK_2}` }}>3500 - 4000 EUR</span>
			</div>
			<div className="mt-10">
				<TitleIcon title="Benefits" icon={(props: IconProps) => <BenefitIcon {...props} />} />
				<SP>
					1- Fully remote, no location restrictions
					<br />
					2- Profit-sharing distributed quarterly
					<br />
					3- 4 weeks vacation
					<br />
					4- Unlimited paid sick days
					<br />
					5- Extended health benefits
					<br />
					6- Continued education allowance
					<br />
					7- Annual fitness allowance
					<br />
					8- Continuous events like happy hour & regular hosted meetups
					<br />
				</SP>
			</div>
		</div>
	);
};

export default Compensation;
