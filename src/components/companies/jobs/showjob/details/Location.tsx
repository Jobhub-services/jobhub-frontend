import { FlexBox } from 'staak-ui';
import { SSpan, STitle, SSubTitle } from './shared.styles';
import { colors } from '@/assets/theme';

const Location = () => {
	return (
		<div>
			<STitle>Location</STitle>
			<div>
				<div className="mt-20">
					<SSubTitle>Work Location</SSubTitle>
					<FlexBox justify="start" gap={2}>
						<SSpan>Allemagne</SSpan>
						<span style={{ display: 'inline-block', width: '6px', height: '3px', background: `${colors.BLUE_DARK_4}` }}></span>
						<SSpan>Berlin</SSpan>
					</FlexBox>
				</div>
				<div className="mt-20">
					<SSubTitle>Hiring Location</SSubTitle>
					<FlexBox justify="start" gap={2}>
						<SSpan>Allemagne</SSpan>
						<span style={{ display: 'inline-block', width: '6px', height: '3px', background: `${colors.BLUE_DARK_4}` }}></span>
						<SSpan>Berlin</SSpan>
					</FlexBox>
				</div>
				<div className="mt-20">
					<SSubTitle>Visa Sponsorship</SSubTitle>
					<SSpan style={{ color: `${colors.GREEN_BASE}` }}>Avavailable</SSpan>
				</div>
			</div>
		</div>
	);
};

export default Location;
