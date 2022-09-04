import { ForOneIcon } from '@/assets/icons';
import { Button, FlexBox } from 'staak-ui';
import { SMainContainer, SH2, SSpan, SMonth, SDollar, SFeatures, FeatureTitle } from '@/components/companies/subscription/options/option.style';

const ForOne = () => {
	return (
		<SMainContainer>
			<FlexBox flexDirection="column">
				<FlexBox flexDirection="column">
					<span>
						<ForOneIcon width="70px" height="70px" />
					</span>
					<SH2>For One</SH2>
				</FlexBox>
				<FlexBox className="mt-15 mb-15">
					<SDollar>$</SDollar>
					<SSpan>199</SSpan>
					<SMonth>/Month</SMonth>
				</FlexBox>
				<Button className="mt-15 mb-15">Upgrade to For One</Button>
			</FlexBox>
			<div className="mt-20">
				<FeatureTitle>Features :</FeatureTitle>
				<SFeatures>
					<li>One (01) job posting</li>
					<li>AI-powered sourcing</li>
					<li>Select and invite 10 interesting candidate to apply to your job opening</li>
					<li>45 days job opening duration</li>
					<li>Renewal of post for only $99</li>
				</SFeatures>
			</div>
		</SMainContainer>
	);
};

export default ForOne;
