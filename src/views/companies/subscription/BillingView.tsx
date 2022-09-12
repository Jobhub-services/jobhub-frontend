import { colors } from '@/assets/theme';
import { Button, FlexBox, Headline } from 'staak-ui';
import styled from 'styled-components';
import BillingContact from '@/components/companies/subscription/billing/BillingContact';
import CompanyInfo from '@/components/companies/subscription/billing/CompanyInfo';
import CreditCardInfo from '@/components/companies/subscription/billing/CreditCardInfo';
import { CloseIcon, CreditCardIcon, LoadingIcon } from '@/assets/icons';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/utils/appHooks';
import { settingsAction, settingsDispatcher } from '@/modules/actions/company/settings.actions';
import { LoadingScreen } from '@/components/common/loadings/LoadingScreen';
import CardViewier from '@/components/companies/subscription/billing/CardViewier';
import { pushNotification } from '@/utils/helpers';
import { TBooleanAttr } from '@/types/company/settings.type';

const HEADER_STEP_HEIGHT = 45;

const StyledHeadline = styled(Headline)`
	margin: 0px;
`;
const HeaderContainer = styled(FlexBox)`
	border-bottom: 1px solid ${colors.BLACK_12};
	padding: 5px 20px;
	height: ${HEADER_STEP_HEIGHT}px;
`;
const SFooter = styled.div`
	padding: 15px 20px;
	border-top: 1px solid ${colors.BLACK_12};
`;
const SCard = styled(FlexBox)`
	background-color: ${colors.GRAY_2};
	height: 240px;
	border-radius: 8px;
`;
const SH3 = styled.h3`
	color: ${colors.BLACK_4};
	margin: 10px 0;
`;
const SIcon = styled.span`
	padding: 0 15px 10px 15px;
	align-self: end;
	cursor: pointer;
`;
const BillingView = () => {
	const [addCard, setAddCard] = useState(false);
	const [cardLoaded, setCardLoaded] = useState(false);
	const [tap, setTap] = useState<any>(null);
	const [card, setCard] = useState<any>(null);
	const { billingInfo, isLoading, paymentMethod, isFetchingPaymentMethod, billingInfoUpdated, paymentMethodAdded } = useAppSelector(
		(state) => state.companySettings
	);
	const paymentMethodNotEmpty =
		paymentMethod?.card_id && paymentMethod?.card_id !== '' && paymentMethod?.card_token && paymentMethod?.card_token !== '';

	useEffect(() => {
		if (!isFetchingPaymentMethod && !paymentMethodNotEmpty) {
			settingsAction.getPaymentMethod();
		}
		settingsAction.getBillingInfo();
	}, []);

	useEffect(() => {
		if (billingInfoUpdated) {
			settingsDispatcher.setBooleanAttr(false, TBooleanAttr.BILLING_INFO_UDPATED);
			pushNotification.success('Billing information updated successfully');
		}
	}, [billingInfoUpdated]);
	useEffect(() => {
		if (paymentMethodAdded) {
			settingsDispatcher.setBooleanAttr(false, TBooleanAttr.PAYMENT_METHOD_ADDED);
			pushNotification.success('Payment card added successfully');
			settingsAction.getPaymentMethod();
		}
	}, [paymentMethodAdded]);
	const saveChanges = () => {
		console.log(tap, card);
		if (cardLoaded) {
			tap.createToken(card).then(function (result: any) {
				if (result.error) {
					// Inform the user if there was an error
					var errorElement = document.getElementById('error-handler');
					if (errorElement) errorElement.textContent = result.error.message;
				} else {
					tapTokenHandler(result);
				}
			});
		} else {
			tapTokenHandler(null);
		}
	};
	const tapTokenHandler = (token: any) => {
		const tmpPaymentMethod = token
			? {
					card_id: token?.card?.id,
					card_token: token?.id,
					first_six: token?.card?.first_six,
					exp_year: token?.card?.exp_year,
					exp_month: token?.card?.exp_month,
					brand: token?.card?.brand,
					name: token?.card?.name,
					funding: token?.card?.funding,
					fingerprint: token?.card?.fingerprint,
					last_four: token?.card?.last_four,
					issuer: token?.card?.issuer,
			  }
			: null;

		settingsAction.createCustomer(billingInfo, tmpPaymentMethod);
	};
	return (
		<div style={{ position: 'relative' }}>
			<HeaderContainer justify="space-between">
				<StyledHeadline variant="h2" size="sm">
					Billing Informations
				</StyledHeadline>
			</HeaderContainer>
			<div style={{ padding: '10px 20px' }}>
				<CompanyInfo />
				<BillingContact />
				<div className="mt-20">
					<SH3>Card information</SH3>
					<SCard flexDirection="column">
						{isFetchingPaymentMethod ? (
							<LoadingIcon color={colors.PURPLE_2} width="55px" height="55px" />
						) : paymentMethodNotEmpty ? (
							<CardViewier />
						) : !addCard ? (
							<>
								<span>
									<CreditCardIcon width="40px" height="40px" />
								</span>
								<h3>No credit card provided</h3>
								<Button onClick={() => setAddCard(true)}>Add a credit card</Button>
							</>
						) : (
							<FlexBox flexDirection="column" width="100%" justify="start">
								<SIcon
									onClick={() => {
										setAddCard(false);
										setCardLoaded(false);
									}}
								>
									<CloseIcon color={colors.BLACK_5} />
								</SIcon>
								<CreditCardInfo
									elementContainer="element-container"
									errorHandler="error-handler"
									formContainer="form-container"
									success="success"
									token="token"
									onTapChange={(tap: any, card: any) => {
										setCardLoaded(true);
										setTap(tap);
										setCard(card);
									}}
								/>
							</FlexBox>
						)}
					</SCard>
				</div>
			</div>
			<SFooter>
				<Button onClick={saveChanges}>Save changes</Button>
			</SFooter>
			{isLoading && <LoadingScreen />}
		</div>
	);
};

export default BillingView;
