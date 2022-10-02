import { RocketIcon } from '@/assets/icons';
import { Button, FlexBox } from 'staak-ui';
import { SMainContainer, SH2, SSpan, SMonth, STag, SDollar, SFeatures, FeatureTitle } from '@/components/companies/subscription/options/option.style';
import { useAppSelector } from '@/utils/appHooks';
import { PayOptions, POption } from '@/models/component/companies/subscription/subscription.interface';
import LoadingSimpleData from '@/components/common/loadings/LoadingSimpleData';

const InfinityPro = (props: POption) => {
	const { subscription, isLoading } = useAppSelector((state) => state.companySettings);
	const infinity = subscription.content.find((elem) => elem.title === 'Infinity');
	const totalCost = props.status === PayOptions.YEARLY ? (infinity?.yearly_amount ?? 0) * 12 : (infinity?.monthly_amount ?? 0) * 12;
	const costSaved = ((infinity?.monthly_amount ?? 0) - (infinity?.yearly_amount ?? 0)) * 12;

	const handleClick = () => {
		if (infinity?._id) {
			if (props.onSubscribe) props.onSubscribe(infinity?._id);
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
								<RocketIcon width="60px" height="60px" />
							</span>
							<SH2>{infinity?.title}</SH2>
						</FlexBox>
						<FlexBox className="mt-15">
							<SDollar>$</SDollar>
							<SSpan>{(props.status === PayOptions.YEARLY ? infinity?.yearly_amount : infinity?.monthly_amount)?.toLocaleString('en-US')}</SSpan>
							<SMonth>/Month</SMonth>
						</FlexBox>
						<FlexBox gap={15} className="mt-20 mb-15" flexDirection="column">
							<FlexBox gap={5}>
								Total cost per year <strong>{` $${totalCost.toLocaleString('en-US')}`}</strong>
							</FlexBox>
							{props.status === PayOptions.YEARLY && <STag>{`Save $${costSaved.toLocaleString('en-US')} / Year`}</STag>}
						</FlexBox>
						<Button className="mt-10 mb-15" onClick={handleClick}>
							Upgrade to Infinity
						</Button>
					</FlexBox>
					<div className="mt-20">
						<FeatureTitle>Features :</FeatureTitle>
						<SFeatures>
							<li>AI-powered sourcing</li>
							{infinity?.features.map((elem, idx) => {
								return <li key={idx}>{elem.description}</li>;
							})}
						</SFeatures>
					</div>
				</>
			)}
		</SMainContainer>
	);
};

export default InfinityPro;
