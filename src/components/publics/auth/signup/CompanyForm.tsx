import { useState } from 'react';
import { FormProps } from '@/models/component';
import { Form } from '@/components';
import { ErrorWrapper } from '@/components/common';
import { useAppSelector } from '@/utils/appHooks';
import { authActions } from '@/modules/actions/auth.actions';
import { UserType } from '@/models/store/user.interface';

const CompanyForm = (props: FormProps) => {
	const { authErrors } = useAppSelector((state) => state.auth);
	const [state, setState] = useState({ email: '', username: '', password: '', confirmpassword: '', userType: UserType.COMPANY });
	const [companyInfo, setCompanyInfo] = useState({ companyName: '' });
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
		setCompanyInfo({
			...companyInfo,
			[name]: value,
		});
	}
	function onSubmit() {
		const userInfo = { ...state, companyInfo: companyInfo };
		if (userInfo.password !== userInfo.confirmpassword) {
			setConfirmPasswordError(true);
			return;
		}
		if (confirmPasswordError) setConfirmPasswordError(false);
		authActions.register(userInfo);
	}
	return (
		<Form onSubmit={onSubmit}>
			<Form.Input name="companyName" onChange={onInfoChange} placeholder="Company name" type="text">
				<ErrorWrapper error={authErrors.companyName} message={authErrors.companyName}>
					Company name
				</ErrorWrapper>
			</Form.Input>
			<Form.Input name="email" onChange={onChange} placeholder="Business email" type="email">
				<ErrorWrapper error={authErrors.email} message={authErrors.email}>
					Business email
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

export default CompanyForm;
