import PayGo from '@/components/companies/subscription/options/PayGo';
import { useAppSelector } from '@/utils/appHooks';
import { FlexBox, Headline } from 'staak-ui';
import styled from 'styled-components';
import PaymentPopModal from '@/components/companies/subscription/Modal/PaymentPopModal';
import { useEffect, useState } from 'react';
import { pushNotification } from '@/utils/helpers';
import { settingsAction } from '@/modules/actions/company/settings.actions';
import ChargePopModal from '@/components/companies/subscription/Modal/ChargePopModal';
import { userActions } from '@/modules/actions/user.actions';

const HEADER_STEP_HEIGHT = 45;

const StyledHeadline = styled(Headline)`
	margin: 0px;
`;
const HeaderContainer = styled(FlexBox)`
	padding: 5px 20px 5px 0;
	height: ${HEADER_STEP_HEIGHT}px;
`;

const PayAsYouGo = () => {
	const { currentSubscription, paymentMethod, billingInfo, isCreatingCharge, chargeData } = useAppSelector((state) => state.companySettings);
	const [quantity, setQuantity] = useState(0);
	const [openPopPayment, setOpenPopPayment] = useState(false);
	const [openChargeModal, setOpenChargeModal] = useState(false);

	useEffect(() => {
		if (chargeData?.paymentUrl && chargeData?.paymentUrl !== '' && chargeData?.message && chargeData?.message !== '') {
			setOpenPopPayment(false);
			setOpenChargeModal(true);
		} else if (chargeData?.message && chargeData?.message !== '') {
			setOpenPopPayment(false);
			pushNotification.success('Your subscription is created successfully');
			userActions.getUserInfo();
		}
	}, [chargeData]);

	const handleCharge = (quantity: string) => {
		if (!paymentMethod?._id || paymentMethod._id === '') settingsAction.getPaymentMethod();
		if (Object.keys(billingInfo).length === 0) settingsAction.getBillingInfo();
		setQuantity(parseInt(quantity));
		setOpenPopPayment(true);
	};
	const handleOrder = () => {
		if (paymentMethod?._id && paymentMethod?._id !== '') {
			const tmp = {
				paymentMethodId: paymentMethod._id,
				quantity: quantity,
			};
			settingsAction.createJobCharge(tmp);
		} else {
			pushNotification.error('There is missing informations, please check your credit card and billing informations');
		}
	};
	return (
		<>
			{openChargeModal && (
				<ChargePopModal
					message={chargeData?.message}
					paymentUrl={chargeData?.paymentUrl}
					open={openChargeModal}
					onClose={() => setOpenChargeModal(false)}
				/>
			)}
			{openPopPayment && (
				<PaymentPopModal
					isLoading={isCreatingCharge}
					onPlaceOrder={handleOrder}
					open={openPopPayment}
					onClose={() => setOpenPopPayment(false)}
					amount={isNaN(quantity * (currentSubscription?.renewJob ?? 0)) ? 0 : quantity * (currentSubscription?.renewJob ?? 0)}
					orderTitle={'PayGo'}
					description={`Pay now and enjoy posting ${quantity} jobs`}
				/>
			)}
			{currentSubscription.isSubscribed && currentSubscription?.title !== 'Infinity' && (
				<div className="mt-20">
					<HeaderContainer justify="start">
						<StyledHeadline variant="h2" size="sm">
							Pay as you go
						</StyledHeadline>
					</HeaderContainer>
					<PayGo renewJob={currentSubscription?.renewJob} onSubscribe={handleCharge} />
				</div>
			)}
		</>
	);
};

export default PayAsYouGo;
