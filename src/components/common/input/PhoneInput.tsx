import { colors } from '@/assets/theme';
import { PPhoneInput } from '@/models/component';
import { useEffect, useState } from 'react';
import { ArrowDownIcon, DropDown, FlexBox, Input } from 'staak-ui';
import styled from 'styled-components';

const countries = [
	{
		name: 'Afghanistan',
		dialCode: '+93',
		isoCode: 'AF',
		flag: 'https://cdn.kcak11.com/CountryFlags/countries/af.svg',
	},
	{
		name: 'Aland Islands',
		dialCode: '+358',
		isoCode: 'AX',
		flag: 'https://cdn.kcak11.com/CountryFlags/countries/ax.svg',
	},
	{
		name: 'Albania',
		dialCode: '+355',
		isoCode: 'AL',
		flag: 'https://cdn.kcak11.com/CountryFlags/countries/al.svg',
	},
];
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
	const [country, setCountry] = useState<{
		name: string;
		dialCode: string;
		isoCode: string;
		flag: string;
	}>(countries[0]);
	const [phone, setPhone] = useState('');

	useEffect(() => {
		setPhone(props.value?.number ?? '');
		if (props.value?.country_code && props.value.country_code !== '') {
			const country = countries.find((elem) => elem.dialCode === props.value?.country_code);
			if (country) setCountry(country);
		}
	}, [props.value]);

	const handleSelect = (e: any, val: any) => {
		setCountry(val);
		if (props.onDataChange) props.onDataChange({ country_code: val?.dialCode, number: phone }, props.name);
	};
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const val = event.target.value.replace(/\D/g, '');
		setPhone(val);
	};
	const handleDataChange = () => {
		if (props.onDataChange) props.onDataChange({ country_code: country?.dialCode, number: phone }, props.name);
	};
	return (
		<div className={props.className} style={{ width: '100%' }}>
			<SLabel>Phone</SLabel>
			<FlexBox justify="start" gap={5} width="100%">
				<DropDown listPosition="left" onSelect={handleSelect}>
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
					{countries.map((elem, idx) => {
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
