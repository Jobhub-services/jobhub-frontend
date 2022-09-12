import { colors } from '@/assets/theme';
import { StandardProps } from '@/models/component';
import { settingsAction, settingsDispatcher } from '@/modules/actions/company/settings.actions';
import { useAppSelector } from '@/utils/appHooks';
import { Button, FlexBox } from 'staak-ui';
import styled from 'styled-components';

const SContainer = styled(FlexBox)`
	padding: 20px 15px;
	align-self: start;
`;
const SSDiv = styled.div`
	font-weight: 500;
	color: ${colors.BLACK_3};
`;
const SVal = styled.div`
	font-weight: 500;
	color: ${colors.BLACK_7};
`;
const SCircle = styled.div`
	background-color: ${colors.BLACK_7};
	width: 3px;
	height: 3px;
	border-radius: 50%;
`;
const CardViewier = ({ enableRemove, style }: { enableRemove: boolean } & StandardProps) => {
	const { paymentMethod } = useAppSelector((state) => state.companySettings);

	const handleRemove = () => {
		settingsAction.removePaymentMethod(paymentMethod._id);
	};
	return (
		<SContainer style={{ ...style }} justify="space-between" width="100%" height="100%" align="start">
			<div>
				<FlexBox justify="start" gap={10}>
					<SSDiv>Card Brand : </SSDiv>
					<SVal>{paymentMethod?.brand}</SVal>
				</FlexBox>
				<FlexBox justify="start" gap={10} className="mt-10">
					<SSDiv>Card Name : </SSDiv>
					<SVal>{paymentMethod?.name}</SVal>
				</FlexBox>
				<FlexBox justify="start" gap={10} className="mt-10">
					<SSDiv>Experation Date : </SSDiv>
					<SVal>
						{paymentMethod?.exp_month} / {paymentMethod?.exp_year}
					</SVal>
				</FlexBox>
				<FlexBox justify="start" gap={10} className="mt-10">
					<SSDiv>Card Number : </SSDiv>
					<FlexBox gap={5}>
						{new Array(12).fill(0).map((elem, idx) => (
							<SCircle key={idx} />
						))}
						<SVal>{paymentMethod?.last4}</SVal>
					</FlexBox>
				</FlexBox>
			</div>
			{enableRemove && (
				<Button color="red" size="md" onClick={handleRemove}>
					Remove
				</Button>
			)}
		</SContainer>
	);
};
CardViewier.defaultProps = {
	enableRemove: true,
};
export default CardViewier;
