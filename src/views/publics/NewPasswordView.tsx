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
	const [data, setData] = useState<{ code?: string; password?: string; confirm_password?: string }>({});
	const [error, setError] = useState<{ code: boolean; password: boolean; confirm_password: boolean }>({
		code: false,
		password: false,
		confirm_password: false,
	});
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		let tmp = { ...data };
		tmp[name as 'code'] = value;
		setData(tmp);
	};

	const handleClick = () => {
		const tmpErr = {
			code: !data.code || data.code === '',
			password: !data.password || data.password === '',
			confirm_password: !data.confirm_password || data.confirm_password === '' || data.confirm_password !== data.password,
		};
		setError(tmpErr);
		if (!tmpErr.code && !tmpErr.password && !tmpErr.confirm_password) {
			const tmp = {
				link: str,
				...data,
			};
			authActions.updatePassword(tmp);
		}
	};
	const handleFocus = (name: string) => {
		let tmp = { ...error };
		tmp[name as 'code'] = false;
		setError(tmp);
	};
	return (
		<SContainer flexDirection="column">
			<TitleAuth>Reset password</TitleAuth>
			<SP>Please enter your verification code and new password</SP>
			<SInputs>
				<Input placeholder="Verification code" type="text" name="code" onChange={onChange} error={error.code} onFocus={() => handleFocus('code')} />
				<Input
					className="mt-15"
					placeholder="Password"
					type="password"
					name="password"
					onChange={onChange}
					error={error.password}
					onFocus={() => handleFocus('password')}
				/>
				<Input
					className="mt-15"
					placeholder="Confirm password"
					type="password"
					name="confirm_password"
					onChange={onChange}
					error={error.confirm_password}
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
