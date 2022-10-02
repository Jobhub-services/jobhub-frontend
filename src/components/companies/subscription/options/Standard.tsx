import { BowlingIcon } from '@/assets/icons';
import { Button, FlexBox } from 'staak-ui';
import { SMainContainer, SH2, SSpan, SMonth, STag, SDollar, SFeatures, FeatureTitle } from '@/components/companies/subscription/options/option.style';
import { useAppSelector } from '@/utils/appHooks';
import { PayOptions, POption } from '@/models/component/companies/subscription/subscription.interface';
import LoadingSimpleData from '@/components/common/loadings/LoadingSimpleData';

const Standard = (props: POption) => {
	const { subscription, isLoading } = useAppSelector((state) => state.companySettings);
	const standard = subscription.content.find((elem) => elem.title === 'Standard');
	const totalCost = props.status === PayOptions.YEARLY ? (standard?.yearly_amount ?? 0) * 12 : (standard?.monthly_amount ?? 0) * 12;
	const costSaved = ((standard?.monthly_amount ?? 0) - (standard?.yearly_amount ?? 0)) * 12;

	const handleClick = () => {
		if (standard?._id) {
			if (props.onSubscribe) props.onSubscribe(standard?._id);
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
								<BowlingIcon width="60px" height="60px" />
							</span>
							<SH2>{standard?.title}</SH2>
						</FlexBox>
						<FlexBox className="mt-15">
							<SDollar>$</SDollar>
							<SSpan>{(props.status === PayOptions.YEARLY ? standard?.yearly_amount : standard?.monthly_amount)?.toLocaleString('en-US')}</SSpan>
							<SMonth>/Month</SMonth>
						</FlexBox>
						<FlexBox gap={15} className="mt-20 mb-15" flexDirection="column">
							<FlexBox gap={5}>
								Total cost per year <strong>{` $${totalCost.toLocaleString('en-US')}`}</strong>
							</FlexBox>
							{props.status === PayOptions.YEARLY && <STag>{`Save $${costSaved.toLocaleString('en-US')} / Year`}</STag>}
						</FlexBox>
						<Button className="mt-10 mb-15" onClick={handleClick}>
							Upgrade to Standard
						</Button>
					</FlexBox>
					<div className="mt-20">
						<FeatureTitle>Features :</FeatureTitle>
						<SFeatures>
							<li>AI-powered sourcing</li>
							{standard?.features.map((elem, idx) => {
								return <li key={idx}>{elem.description}</li>;
							})}
						</SFeatures>
					</div>
				</>
			)}
		</SMainContainer>
	);
};

export default Standard;
