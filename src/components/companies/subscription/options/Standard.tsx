import { BowlingIcon } from '@/assets/icons';
import { Button, FlexBox } from 'staak-ui';
import { SMainContainer, SH2, SSpan, SMonth, STag, SDollar, SFeatures, FeatureTitle } from '@/components/companies/subscription/options/option.style';

const Standard = () => {
	return (
		<SMainContainer>
			<FlexBox flexDirection="column">
				<FlexBox flexDirection="column">
					<span>
						<BowlingIcon width="70px" height="70px" />
					</span>
					<SH2>Standard</SH2>
				</FlexBox>
				<FlexBox className="mt-15">
					<SDollar>$</SDollar>
					<SSpan>299</SSpan>
					<SMonth>/Month</SMonth>
				</FlexBox>
				<FlexBox gap={15} className="mt-20 mb-15">
					<FlexBox gap={5}>
						Total cost per year <strong>{` $${299 * 12}`}</strong>
					</FlexBox>
					<STag>Save $1400 / Year</STag>
				</FlexBox>
				<Button className="mt-20 mb-15">Upgrade to Standard</Button>
			</FlexBox>
			<div className="mt-20">
				<FeatureTitle>Features :</FeatureTitle>
				<SFeatures>
					<li>Three (03) job postings</li>
					<li>AI-powered sourcing</li>
					<li>Select and invite 25 interesting candidate to apply to your job opening</li>
					<li>60 days job opening duration</li>
					<li>Renewal of post for only $79</li>
				</SFeatures>
			</div>
		</SMainContainer>
	);
};

export default Standard;
