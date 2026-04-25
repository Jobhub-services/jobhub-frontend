import { InputField } from '@/components/common';
import { FormProps } from '@/models/component';
import { UserType } from '@/models/store/user.interface';
import { authActions } from '@/modules/actions/auth.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useState } from 'react';
import { Button, CheckBox } from 'staak-ui';
import styled from 'styled-components';
import PhoneInput from '@/components/common/input/PhoneInput';
import { Link } from 'react-router-dom';
import { colors } from '@/assets/theme';
import { pushNotification } from '@/utils/helpers';

const { APP_URL } = STAAK_ENV;
const FormStyled = styled.form`
	width: 100%;
`;
const SLink = styled(Link)`
	color: ${colors.PURPLE_BASE};
	text-decoration: underline;
`;
const DeveloperForm = (props: FormProps) => {
	const { authErrors } = useAppSelector((state) => state.auth);
	const [state, setState] = useState({
		phone: { number: '', country_code: '' },
		email: '',
		username: '',
		password: '',
		confirmpassword: '',
		userType: UserType.DEVELOPER,
		agree: false,
	});
	const [developerInfo, setDeveloperInfo] = useState({ firstName: '', lastName: '' });
	const [confirmPasswordError, setConfirmPasswordError] = useState(false);
	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		setState({
			...state,
			[name]: value,
		});
	}
	function onInfoChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		setDeveloperInfo({
			...developerInfo,
			[name]: value,
		});
	}
	const handleDataChange = (value: any, name: string) => {
		setState({
			...state,
			[name]: value,
		});
	};
	const handleBox = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = event.target;
		let tmp = { ...state };
		tmp.agree = checked;
		setState(tmp);
	};
	const onSubmit = (e: any) => {
		e.preventDefault();
		const userInfo = { ...state, developerInfo: developerInfo };
		if (userInfo.password !== userInfo.confirmpassword) {
			setConfirmPasswordError(true);
			return;
		}
		if (!state.agree) {
			pushNotification.error('Please agree check agree privacy policy and terms & conditions', { position: 'top-center' });
			return;
		}
		if (confirmPasswordError) setConfirmPasswordError(false);
		authActions.register(userInfo);
	};
	return (
		<FormStyled onSubmit={onSubmit}>
			<InputField
				name="firstName"
				onChange={onInfoChange}
				placeholder="First name"
				type="text"
				error={authErrors.firstName as any}
				errorMessage={authErrors.firstName}
			>
				First name
			</InputField>
			<InputField
				className="mt-10"
				name="lastName"
				onChange={onInfoChange}
				placeholder="Last name"
				type="text"
				error={authErrors.lastName as any}
				errorMessage={authErrors.lastName}
			>
				Last name
			</InputField>
			<InputField
				className="mt-10"
				name="email"
				onChange={onChange}
				placeholder="Email"
				type="email"
				error={authErrors.email as any}
				errorMessage={authErrors.email}
			>
				Email
			</InputField>
			<PhoneInput name="phone" placeholder="Phone number" className="mt-10" onDataChange={handleDataChange} />
			<InputField
				className="mt-10"
				name="username"
				onChange={onChange}
				placeholder="Username"
				type="text"
				error={authErrors.username as any}
				errorMessage={authErrors.username}
			>
				Username
			</InputField>
			<InputField
				className="mt-10"
				name="password"
				onChange={onChange}
				placeholder="Password"
				type="password"
				error={authErrors.password as any}
				errorMessage={authErrors.password}
			>
				Password
			</InputField>
			<InputField
				className="mt-10"
				name="confirmpassword"
				onChange={onChange}
				placeholder="Confirm Password"
				type="password"
				error={confirmPasswordError}
				errorMessage={'Password and password confirmation not match'}
			>
				Confirm Password
			</InputField>
			<CheckBox size="md" className="mt-15" name="agree" onChange={handleBox}>
				I agree to the <SLink to={`${APP_URL}/privacy-policy`}>privacy policy</SLink> and{' '}
				<SLink to={`${APP_URL}/terms-conditions`}>terms and conditions</SLink>
			</CheckBox>
			<Button width="100%" type="submit" className="mt-10">
				Sign Up
			</Button>
		</FormStyled>
	);
};

export default DeveloperForm;
