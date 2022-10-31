import { colors } from '@/assets/theme';
import { PopModel } from '@/components/common';
import { Button, FlexBox, HrDivider } from 'staak-ui';
import styled from 'styled-components';
import InfoItem from '@/components/companies/subscription/InfoItem';
import { useAppSelector } from '@/utils/appHooks';
import CardViewier from '@/components/companies/subscription/billing/CardViewier';
import { CreditCardIcon, LoadingIcon } from '@/assets/icons';
import { PPaymentModal } from '@/models/component/companies/subscription/subscription.interface';
import { Link } from 'react-router-dom';
import { LoadingScreen } from '@/components/common/loadings/LoadingScreen';

const SH3 = styled.h3`
	margin: 0;
`;
const SOrder = styled.div`
	width: 35%;
	border-radius: 8px;
	background-color: ${colors.PURPLE_2};
	color: white;
	padding: 5px 15px;
`;
const SBilling = styled.div`
	width: 65%;
`;
const SCard = styled(FlexBox)`
	background-color: ${colors.BLACK_13};
	border-radius: 8px;
	padding: 15px 0;
`;
const SUSD = styled.span`
	font-size: 20px;
`;
const SSubType = styled.div`
	font-size: 16px;
	text-decoration: underline;
`;
const PaymentPopModal = ({ open, onClose, orderTitle, description, amount, onPlaceOrder, isLoading }: PPaymentModal) => {
	const { billingInfo, paymentMethod, isFetchingPaymentMethod, isBillingFetching } = useAppSelector((state) => state.companySettings);
	const placeOrder = () => {
		if (onPlaceOrder) onPlaceOrder();
	};
	return (
		<PopModel closed={!open} width="45%" onClose={() => onClose()}>
			<PopModel.Header>
				<h3 style={{ margin: '0' }}>Checkout</h3>
			</PopModel.Header>
			<PopModel.Body>
				{isLoading ? (
					<div style={{ height: '460px' }}>
						<LoadingScreen />
					</div>
				) : (
					<FlexBox align="start" gap={20}>
						<SBilling>
							{isBillingFetching ? (
								<FlexBox height="250px">
									<LoadingIcon color={colors.PURPLE_2} width="50px" height="50px" />
								</FlexBox>
							) : (
								<>
									<div>
										<FlexBox justify="space-between">
											<SH3>Company Information</SH3>
											<Link to="/settings/billing">
												<Button variant="text" size="sm">
													Edit Billing
												</Button>
											</Link>
										</FlexBox>
										<div className="mt-15">
											<InfoItem title="Address" value={billingInfo?.address ?? 'N/A'} />
											<FlexBox gap={20} className="mt-10" justify="start">
												<div>
													<InfoItem title="City" value={billingInfo?.city ?? 'N/A'} />
													<InfoItem title="State/Region" value={billingInfo?.region ?? 'N/A'} className="mt-10" />
												</div>
												<div>
													<InfoItem title="Zip Code" value={billingInfo?.zipCode ?? 'N/A'} />
													<InfoItem title="Country" value={billingInfo?.country?.name ?? 'N/A'} className="mt-10" />
												</div>
											</FlexBox>
										</div>
									</div>
									<div className="mt-20">
										<SH3>Billing Contact</SH3>
										<div className="mt-15">
											<FlexBox gap={20} justify="start">
												<div>
													<InfoItem title="First Name" value={billingInfo?.first_name ?? 'N/A'} />
													<InfoItem title="Email" value={billingInfo?.email ?? 'N/A'} className="mt-10" />
												</div>
												<div>
													<InfoItem title="Last Name" value={billingInfo?.last_name ?? 'N/A'} />
													<InfoItem
														title="Phone"
														value={(billingInfo?.phone?.country_code ?? 'N/A') + ' ' + (billingInfo?.phone?.number ?? 'N/A')}
														className="mt-10"
													/>
												</div>
											</FlexBox>
										</div>
									</div>
								</>
							)}
							<div className="mt-20">
								<SH3>Card Information</SH3>
								{isFetchingPaymentMethod ? (
									<FlexBox height="150px">
										<LoadingIcon color={colors.PURPLE_2} width="50px" height="50px" />
									</FlexBox>
								) : paymentMethod?._id && paymentMethod._id !== '' ? (
									<CardViewier style={{ padding: '15px 0' }} enableRemove={false} />
								) : (
									<SCard flexDirection="column" className="mt-15">
										<span>
											<CreditCardIcon width="40px" height="40px" />
										</span>
										<h3>No credit card provided</h3>
									</SCard>
								)}
							</div>
						</SBilling>
						<SOrder>
							<SH3>Order Summary</SH3>
							<HrDivider top={15} />
							<div>
								<FlexBox justify="space-between">
									<SSubType>{orderTitle}</SSubType>
									<span>
										<strong>${amount.toLocaleString('en-US')}</strong>
									</span>
								</FlexBox>
								<div className="mt-10">{description}</div>
							</div>
							<HrDivider top={15} />
							<FlexBox justify="space-between">
								<div>Total in USD</div>
								<SUSD>
									<strong>${amount.toLocaleString('en-US')}</strong>
								</SUSD>
							</FlexBox>
						</SOrder>
					</FlexBox>
				)}
			</PopModel.Body>
			<PopModel.Footer>
				<FlexBox gap={15} width="100%" justify="end">
					<Button variant="light" onClick={() => onClose()}>
						Cancel
					</Button>
					<Button onClick={placeOrder}>Place your order</Button>
				</FlexBox>
			</PopModel.Footer>
		</PopModel>
	);
};

export default PaymentPopModal;
