import { RocketIcon } from '@/assets/icons';
import { Button, FlexBox } from 'staak-ui';
import { SMainContainer, SH2, SSpan, SMonth, STag, SDollar, SFeatures, FeatureTitle } from '@/components/companies/subscription/options/option.style';

const InfinityPro = () => {
	return (
		<SMainContainer>
			<FlexBox flexDirection="column">
				<FlexBox flexDirection="column">
					<span>
						<RocketIcon width="70px" height="70px" />
					</span>
					<SH2>Infinity</SH2>
				</FlexBox>
				<FlexBox className="mt-15">
					<SDollar>$</SDollar>
					<SSpan>599</SSpan>
					<SMonth>/Month</SMonth>
				</FlexBox>
				<FlexBox gap={15} className="mt-20 mb-15">
					<FlexBox gap={5}>
						Total cost per year <strong>{` $${599 * 12}`}</strong>
					</FlexBox>
					<STag>Save $1400 / Year</STag>
				</FlexBox>
				<Button className="mt-20 mb-15">Upgrade to Infinity</Button>
			</FlexBox>
			<div className="mt-20">
				<FeatureTitle>Features :</FeatureTitle>
				<SFeatures>
					<li>Unlimited job postings</li>
					<li>AI-powered sourcing</li>
					<li>Select and invite unlimited interesting candidate to apply to your job opening</li>
					<li>90 days job opening duration</li>
					<li>Renewal of post for free</li>
				</SFeatures>
			</div>
		</SMainContainer>
	);
};

export default InfinityPro;
