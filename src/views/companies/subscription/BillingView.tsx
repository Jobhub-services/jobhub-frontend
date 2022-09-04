import { CreditCardIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { InputField } from '@/components';
import { Button, FlexBox, Headline } from 'staak-ui';
import styled from 'styled-components';

const HEADER_STEP_HEIGHT = 45;

const SH3 = styled.h3`
	color: ${colors.BLACK_4};
	margin: 10px 0;
`;
const StyledHeadline = styled(Headline)`
	margin: 0px;
`;
const HeaderContainer = styled(FlexBox)`
	border-bottom: 1px solid ${colors.BLACK_12};
	padding: 5px 20px;
	height: ${HEADER_STEP_HEIGHT}px;
`;
const SCard = styled(FlexBox)`
	background-color: ${colors.GRAY_2};
	height: 300px;
	border-radius: 8px;
`;
const SFooter = styled.div`
	padding: 15px 20px;
	border-top: 1px solid ${colors.BLACK_12};
`;
const BillingView = () => {
	return (
		<div>
			<HeaderContainer justify="space-between">
				<StyledHeadline variant="h2" size="sm">
					Billing Informations
				</StyledHeadline>
			</HeaderContainer>
			<div style={{ padding: '10px 20px' }}>
				<div>
					<SH3>Company information</SH3>
					<InputField name="address" required>
						Address
					</InputField>
					<FlexBox gap={15}>
						<InputField name="city" required>
							City
						</InputField>
						<InputField name="zipCode" required>
							Zip code
						</InputField>
					</FlexBox>
					<FlexBox gap={15}>
						<InputField name="state" required>
							State/Region
						</InputField>
						<InputField name="country" required>
							Country
						</InputField>
					</FlexBox>
				</div>
				<div className="mt-20">
					<SH3>Billing contact</SH3>
					<FlexBox gap={15}>
						<InputField name="firstName" required>
							First name
						</InputField>
						<InputField name="lasttName" required>
							Last name
						</InputField>
					</FlexBox>
					<FlexBox gap={15}>
						<InputField name="email" required>
							Email
						</InputField>
						<InputField name="phone">Phone</InputField>
					</FlexBox>
					<SCard className="mt-20" flexDirection="column">
						<span>
							<CreditCardIcon width="40px" height="40px" />
						</span>
						<h3>No credit card provided</h3>
						<Button>Add a credit card</Button>
					</SCard>
				</div>
			</div>
			<SFooter>
				<Button>Save changes</Button>
			</SFooter>
		</div>
	);
};

export default BillingView;
