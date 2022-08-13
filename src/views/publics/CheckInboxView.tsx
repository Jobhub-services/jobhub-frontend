import { colors } from '@/assets/theme';
import { Link } from 'react-router-dom';
import { Button, FlexBox } from 'staak-ui';
import styled from 'styled-components';

const SContainer = styled(FlexBox)`
	padding: 15px 20px;
`;

const TitleAuth = styled.h1`
	font-size: 1.3em;
	color: ${colors.PURPLE_BASE};
	margin: 5px 0 10px 0;
`;
const SMessage = styled.div`
	border-radius: 7px;
	background-color: ${colors.PURPLE_1};
	padding: 0 15px;
	margin-top: 15px;
`;
const CheckInboxView = () => {
	return (
		<SContainer flexDirection="column">
			<TitleAuth>Please check your inbox</TitleAuth>
			<SMessage>
				<p>Instructions will be sent to your email.</p>
				<p>
					If you don't receive an email within five minutes, please check your spam folder and make sure you entered the correct email address you use
					with <strong style={{ color: `${colors.PURPLE_2}` }}>staak</strong>
				</p>
			</SMessage>
			<Link to="/" style={{ width: '100%', marginTop: '25px' }}>
				<Button width="100%">Return to staak</Button>
			</Link>
		</SContainer>
	);
};

export default CheckInboxView;
