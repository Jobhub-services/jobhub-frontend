import { colors } from '@/assets/theme';
import { authActions } from '@/modules/actions/auth.actions';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, FlexBox, Input } from 'staak-ui';
import styled from 'styled-components';

const SContainer = styled(FlexBox)`
	padding: 15px 20px;
`;
const SInputs = styled.div`
	width: 100%;
	margin-top: 25px;
`;
const TitleAuth = styled.h1`
	font-size: 1.5em;
	color: ${colors.PURPLE_BASE};
	margin: 5px 0 10px 0;
`;
const SP = styled.p`
	margin: 0;
`;
const NewPasswordView = () => {
	const { str } = useParams();
	const [data, setData] = useState<{ email?: string; newPassword?: string; confirmationPassword?: string }>({});
	const [error, setError] = useState<{ email: boolean; newPassword: boolean; confirmationPassword: boolean }>({
		email: false,
		newPassword: false,
		confirmationPassword: false,
	});
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		let tmp = { ...data };
		tmp[name as 'email'] = value;
		setData(tmp);
	};

	const handleClick = () => {
		const tmpErr = {
			email: !data.email || data.email === '',
			newPassword: !data.newPassword || data.newPassword === '',
			confirmationPassword: !data.confirmationPassword || data.confirmationPassword === '' || data.confirmationPassword !== data.newPassword,
		};
		setError(tmpErr);
		if (!tmpErr.email && !tmpErr.newPassword && !tmpErr.confirmationPassword) {
			const tmp = {
				token: str,
				...data,
			};
			authActions.updatePassword(tmp);
		}
	};
	const handleFocus = (name: string) => {
		let tmp = { ...error };
		tmp[name as 'email'] = false;
		setError(tmp);
	};
	return (
		<SContainer flexDirection="column">
			<TitleAuth>Reset password</TitleAuth>
			<SP>Please enter your verification code and new password</SP>
			<SInputs>
				<Input placeholder="Email" type="text" name="email" onChange={onChange} error={error.email} onFocus={() => handleFocus('email')} />
				<Input
					className="mt-15"
					placeholder="Password"
					type="password"
					name="password"
					onChange={onChange}
					error={error.newPassword}
					onFocus={() => handleFocus('password')}
				/>
				<Input
					className="mt-15"
					placeholder="Confirm password"
					type="password"
					name="confirm_password"
					onChange={onChange}
					error={error.confirmationPassword}
					onFocus={() => handleFocus('confirm_password')}
				/>
				<Button className="mt-20" width="100%" onClick={handleClick}>
					Update password
				</Button>
			</SInputs>
		</SContainer>
	);
};

export default NewPasswordView;
