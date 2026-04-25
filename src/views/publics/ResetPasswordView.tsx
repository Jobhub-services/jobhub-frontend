import { colors } from '@/assets/theme';
import { authActions } from '@/modules/actions/auth.actions';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AtSignIcon, Button, FlexBox, Input } from 'staak-ui';
import styled from 'styled-components';

const SContainer = styled.div`
	padding: 15px 20px;
`;
const TitleAuth = styled.h1`
	font-size: 1.6em;
	color: ${colors.PURPLE_BASE};
	margin: 5px 0 10px 0;
`;
const LinkLogin = styled(Link)`
	color: ${colors.PURPLE_BASE};
`;
const ResetPasswordView = () => {
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setEmail(value);
	};
	const handleClick = () => {
		if (email === '' || !email) setError(true);
		else {
			authActions.forgetPassword(email);
		}
	};
	return (
		<SContainer>
			<TitleAuth>Forgot your password</TitleAuth>
			<p>Fill in your login email and we will send a reset password link to your email.</p>
			<Input
				className="mt-20"
				onChange={onChange}
				placeholder="Your email"
				startIcon={<AtSignIcon color={colors.BLACK_4} />}
				name="email"
				type="email"
				error={error}
				errorMessage="Please enter your email"
				onFocus={() => setError(false)}
			/>
			<Button width="100%" className="mt-20" onClick={handleClick}>
				Send reset link
			</Button>
			<FlexBox justify="start" gap={5} className="mt-20">
				<span>Already have staak account ?</span>
				<LinkLogin to="/login">Login now</LinkLogin>
			</FlexBox>
		</SContainer>
	);
};

export default ResetPasswordView;
