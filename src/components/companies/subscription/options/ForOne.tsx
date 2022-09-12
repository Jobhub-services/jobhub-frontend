import { ForOneIcon } from '@/assets/icons';
import { Button, FlexBox } from 'staak-ui';
import { SMainContainer, SH2, SSpan, SMonth, SDollar, SFeatures, FeatureTitle, STag } from '@/components/companies/subscription/options/option.style';
import { useAppSelector } from '@/utils/appHooks';
import { PayOptions, POption } from '@/models/component/companies/subscription/subscription.interface';
import LoadingSimpleData from '@/components/common/loadings/LoadingSimpleData';

const ForOne = (props: POption) => {
	const { subscription, isLoading } = useAppSelector((state) => state.companySettings);
	const forone = subscription.content.find((elem) => elem.title === 'For One');
	const totalCost = props.status === PayOptions.YEARLY ? (forone?.yearly_amount ?? 0) * 12 : (forone?.monthly_amount ?? 0) * 12;
	const costSaved = ((forone?.monthly_amount ?? 0) - (forone?.yearly_amount ?? 0)) * 12;

	const handleClick = () => {
		if (forone?._id) {
			if (props.onSubscribe) props.onSubscribe(forone?._id);
		}
	};
	return (
		<SMainContainer>
			{isLoading ? (
				<FlexBox flexDirection="column" gap={30}>
					<LoadingSimpleData />
					<LoadingSimpleData />
					<LoadingSimpleData />
				</FlexBox>
			) : (
				<>
					<FlexBox flexDirection="column">
						<FlexBox flexDirection="column">
							<span>
								<ForOneIcon width="60px" height="60px" />
							</span>
							<SH2>{forone?.title}</SH2>
						</FlexBox>
						<FlexBox className="mt-15">
							<SDollar>$</SDollar>
							<SSpan>{props.status === PayOptions.YEARLY ? forone?.yearly_amount : forone?.monthly_amount}</SSpan>
							<SMonth>/Month</SMonth>
						</FlexBox>
						<FlexBox gap={15} className="mt-20 mb-15" flexDirection="column">
							<FlexBox gap={5}>
								Total cost per year <strong>{` $${totalCost}`}</strong>
							</FlexBox>
							{props.status === PayOptions.YEARLY && <STag>{`Save $${costSaved} / Year`}</STag>}
						</FlexBox>
						<Button className="mt-10 mb-15" onClick={handleClick}>
							Upgrade to For One
						</Button>
					</FlexBox>
					<div className="mt-20">
						<FeatureTitle>Features :</FeatureTitle>
						<SFeatures>
							<li>AI-powered sourcing</li>
							{forone?.features.map((elem, idx) => {
								return <li key={idx}>{elem.description}</li>;
							})}
						</SFeatures>
					</div>
				</>
			)}
		</SMainContainer>
	);
};

export default ForOne;
