import React, { useState } from 'react';
import { Form, ErrorWrapper } from '@/components/common';
import { FormProps } from '@/models/component';
import { LockIcon, AtSignIcon } from 'staak-ui';
import { authActions } from '@/modules/actions/auth.actions';
import { useAppSelector } from '@/utils/appHooks';

const LoginForm = (props: FormProps) => {
	const { authErrors } = useAppSelector((state) => state.auth);
	const [state, setState] = useState({ username: '', password: '' });
	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		setState({
			...state,
			[name]: value,
		});
	}
	function onSubmit() {
		authActions.login(state);
	}
	return (
		<Form onSubmit={onSubmit}>
			<Form.Input onChange={onChange} placeholder="Email or Username" startIcon={<AtSignIcon />} name="username" type="text">
				<ErrorWrapper error={authErrors.username} message={authErrors.username}>
					Email or Username
				</ErrorWrapper>
			</Form.Input>
			<Form.Input onChange={onChange} placeholder="Password" startIcon={<LockIcon />} name="password" type="password">
				<ErrorWrapper error={authErrors.password} message={authErrors.password}>
					Password
				</ErrorWrapper>
			</Form.Input>
			<Form.Submit width="100%">Log In</Form.Submit>
		</Form>
	);
};

export default LoginForm;
