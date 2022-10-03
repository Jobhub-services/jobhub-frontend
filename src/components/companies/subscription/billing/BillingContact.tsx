import { colors } from '@/assets/theme';
import { InputField } from '@/components/common';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';
import { settingsDispatcher } from '@/modules/actions/company/settings.actions';
import { FlexBox } from 'staak-ui';
import PhoneInput from '@/components/common/input/PhoneInput';

const SH3 = styled.h3`
	color: ${colors.BLACK_4};
	margin: 10px 0;
`;

const BillingContact = () => {
	const { billingInfo } = useAppSelector((state) => state.companySettings);

	const handleChange = (event: any, value?: string, name?: string) => {
		settingsDispatcher.setBillingInfo(value ?? '', name ?? '');
	};
	const handleDataChange = (value: any, name: string) => {
		settingsDispatcher.setBillingInfo(value ?? '', name ?? '');
	};
	return (
		<div className="mt-20">
			<SH3>Billing Contact</SH3>
			<FlexBox gap={15}>
				<InputField name="first_name" placeholder="First Name" required value={billingInfo?.first_name} onDataChange={handleChange}>
					First Name
				</InputField>
				<InputField name="last_name" placeholder="Last Name" required value={billingInfo?.last_name} onDataChange={handleChange}>
					Last Name
				</InputField>
			</FlexBox>
			<FlexBox gap={15} className="mt-10">
				<InputField name="email" placeholder="Email" required value={billingInfo?.email} type="email" onDataChange={handleChange}>
					Email
				</InputField>
				<PhoneInput name="phone" placeholder="Phone number" onDataChange={handleDataChange} value={billingInfo.phone} />
			</FlexBox>
		</div>
	);
};

export default BillingContact;
