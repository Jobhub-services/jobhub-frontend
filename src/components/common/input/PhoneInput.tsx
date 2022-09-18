import { colors } from '@/assets/theme';
import { PPhoneInput } from '@/models/component';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useState } from 'react';
import { ArrowDownIcon, DropDown, FlexBox, Input } from 'staak-ui';
import styled from 'styled-components';

const STitle = styled(FlexBox)`
	border: 1px solid ${colors.BLACK_12};
	border-radius: 8px;
	padding: 9px;
`;
const SLabel = styled.label`
	display: inline-block;
	margin: 5px 0px;
`;
const PhoneInput = (props: PPhoneInput) => {
	const { countries } = useAppSelector((state) => state.metadata);
	const [country, setCountry] = useState<{
		name?: string;
		dialCode?: string;
		isoCode?: string;
		flag?: string;
	}>();
	const [phone, setPhone] = useState('');

	useEffect(() => {
		if (countries?.size === 0) metadataActions.getCountries();
	}, []);
	useEffect(() => {
		if (countries?.content?.length! > 0) {
			if (props.value) changeValue();
			else setCountry(countries?.content?.at(0));
		}
	}, [countries]);

	useEffect(() => {
		changeValue();
	}, [props.value]);

	const changeValue = () => {
		setPhone(props.value?.number ?? '');
		if (props.value?.country_code && props.value.country_code !== '') {
			const country = countries?.content?.find((elem) => elem.dialCode === props.value?.country_code);
			if (country) setCountry(country);
		}
	};
	const handleSelect = (e: any, val: any) => {
		setCountry(val);
		if (props.onDataChange) props.onDataChange({ country_code: val?.dialCode, number: phone }, props.name);
	};
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const val = event.target.value.replace(/\D/g, '');
		setPhone(val);
	};
	const handleDataChange = () => {
		if (props.onDataChange) props.onDataChange({ country_code: country?.dialCode ?? '', number: phone }, props.name);
	};
	return (
		<div className={props.className} style={{ width: '100%' }}>
			<SLabel>Phone</SLabel>
			<FlexBox justify="start" gap={5} width="100%">
				<DropDown listPosition="left" onSelect={handleSelect} style={{ zIndex: '1' }}>
					<DropDown.Title>
						<STitle gap={5} width="90px">
							<FlexBox justify="start" gap={5}>
								<FlexBox>
									<img alt="" width={20} height={20} src={country?.flag} />
								</FlexBox>
								<span>{country?.dialCode}</span>
							</FlexBox>
							<span>
								<ArrowDownIcon color={colors.BLACK_5} />
							</span>
						</STitle>
					</DropDown.Title>
					{countries?.content?.map((elem, idx) => {
						return (
							<DropDown.Item key={idx} value={elem}>
								<FlexBox gap={10} justify="start">
									<FlexBox>
										<img alt="" width={20} height={20} src={elem.flag} />
									</FlexBox>
									<span>{elem.name}</span>
									<span>{elem.dialCode}</span>
								</FlexBox>
							</DropDown.Item>
						);
					})}
				</DropDown>
				<Input
					name={props.name}
					placeholder={props.placeholder}
					width="calc(100% - 90px)"
					value={phone}
					onChange={handleChange}
					onDataChange={handleDataChange}
				/>
			</FlexBox>
		</div>
	);
};

export default PhoneInput;
