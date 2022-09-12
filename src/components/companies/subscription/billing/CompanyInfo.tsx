import { colors } from '@/assets/theme';
import { InputField, InputPickerField } from '@/components/common';
import { settingsAction, settingsDispatcher } from '@/modules/actions/company/settings.actions';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect } from 'react';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const SH3 = styled.h3`
	color: ${colors.BLACK_4};
	margin: 10px 0;
`;

const CompanyInfo = () => {
	const { billingInfo } = useAppSelector((state) => state.companySettings);
	const { countries } = useAppSelector((state) => state.metadata);

	useEffect(() => {
		if (countries?.size === 0) metadataActions.getCountries();
	}, []);

	const handleChange = (event: any, value?: string, name?: string) => {
		settingsDispatcher.setBillingInfo(value ?? '', name ?? '');
	};

	const handleInput = (event: any, value: string, label: string, name: string) => {
		settingsDispatcher.setBillingInfo({ _id: value, name: label }, 'country');
	};
	return (
		<div>
			<SH3>Company information</SH3>
			<InputField name="address" placeholder="Adress" required value={billingInfo?.address} onDataChange={handleChange}>
				Address
			</InputField>
			<FlexBox gap={15} className="mt-10">
				<InputField name="city" placeholder="City" required value={billingInfo?.city} onDataChange={handleChange}>
					City
				</InputField>
				<InputField name="zipCode" placeholder="Zip Code" required value={billingInfo?.zipCode} onDataChange={handleChange}>
					Zip code
				</InputField>
			</FlexBox>
			<FlexBox gap={15} className="mt-10">
				<InputField name="region" placeholder="State or Region" required value={billingInfo?.region} onDataChange={handleChange}>
					State/Region
				</InputField>
				<InputPickerField name="country" placeholder="Country" title="Country" value={billingInfo?.country?.name} onChange={handleInput}>
					{countries?.content?.map((elem, idx) => {
						const st = elem.name + ' (' + elem.code + ')';
						return (
							<InputPickerField.Option key={idx} value={elem._id ?? ''}>
								{st}
							</InputPickerField.Option>
						);
					})}
				</InputPickerField>
			</FlexBox>
		</div>
	);
};

export default CompanyInfo;
