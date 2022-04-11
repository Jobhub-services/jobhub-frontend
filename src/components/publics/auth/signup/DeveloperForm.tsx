import { Form } from '@/components';
import { ErrorWrapper } from '@/components/common';
import { FormProps } from '@/models/component';
import { UserType } from '@/models/store/user.interface';
import { authActions } from '@/modules/actions/auth.actions';
import { useAppSelector } from '@/utils/appHooks';
import { useState } from 'react';

const DeveloperForm = (props: FormProps) => {
	const { authErrors } = useAppSelector((state) => state.auth);
	const [state, setState] = useState({ email: '', username: '', password: '', confirmpassword: '', userType: UserType.DEVELOPER });
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
	function onSubmit() {
		const userInfo = { ...state, developerInfo: developerInfo };
		if (userInfo.password !== userInfo.confirmpassword) {
			setConfirmPasswordError(true);
			return;
		}
		if (confirmPasswordError) setConfirmPasswordError(false);
		authActions.register(userInfo);
	}
	return (
		<Form onSubmit={onSubmit}>
			<Form.Input name="firstName" width="390px" onChange={onInfoChange} placeholder="First name" type="text">
				<ErrorWrapper error={authErrors.firstName} message={authErrors.firstName}>
					First name
				</ErrorWrapper>
			</Form.Input>
			<Form.Input name="lastName" onChange={onInfoChange} placeholder="Last name" type="text">
				<ErrorWrapper error={authErrors.lastName} message={authErrors.lastName}>
					Last name
				</ErrorWrapper>
			</Form.Input>
			<Form.Input name="email" onChange={onChange} placeholder="Email" type="email">
				<ErrorWrapper error={authErrors.email} message={authErrors.email}>
					Email
				</ErrorWrapper>
			</Form.Input>
			<Form.Input name="username" onChange={onChange} placeholder="Username" type="text">
				<ErrorWrapper error={authErrors.username} message={authErrors.username}>
					Username
				</ErrorWrapper>
			</Form.Input>
			<Form.Input name="password" onChange={onChange} placeholder="Password" type="password">
				<ErrorWrapper error={authErrors.password} message={authErrors.password}>
					Password
				</ErrorWrapper>
			</Form.Input>
			<Form.Input name="confirmpassword" onChange={onChange} placeholder="Confirm Password" type="password">
				<ErrorWrapper error={confirmPasswordError} message="Password and password confirmation not match">
					Confirm Password
				</ErrorWrapper>
			</Form.Input>
			<Form.Submit width="100%">Sign Up</Form.Submit>
		</Form>
	);
};

export default DeveloperForm;
