import React, { useState } from 'react';
import { InputField } from '@/components/common';
import { FormProps } from '@/models/component';
import { LockIcon, AtSignIcon, Button } from 'staak-ui';
import { authActions } from '@/modules/actions/auth.actions';
import { useAppSelector } from '@/utils/appHooks';
import styled from 'styled-components';

const FormStyled = styled.form`
	width: 100%;
`;

const LoginForm = (props: FormProps) => {
	const { authErrors } = useAppSelector((state) => state.auth);
	const [state, setState] = useState({ username: '', password: '' });
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setState({
			...state,
			[name]: value,
		});
	};
	const onSubmit = (e: any) => {
		e.preventDefault();
		authActions.login(state);
	};
	return (
		<FormStyled onSubmit={onSubmit}>
			<InputField
				onChange={onChange}
				placeholder="Email or Username"
				startIcon={<AtSignIcon />}
				name="username"
				type="text"
				error={authErrors.username as any}
				errorMessage={authErrors.username}
			>
				Email or Username
			</InputField>
			<InputField
				className="mt-10"
				onChange={onChange}
				placeholder="Password"
				startIcon={<LockIcon />}
				name="password"
				type="password"
				error={authErrors.password as any}
				errorMessage={authErrors.password}
			>
				Password
			</InputField>
			<Button width="100%" type="submit" className="mt-20">
				Log In
			</Button>
		</FormStyled>
	);
};

export default LoginForm;
