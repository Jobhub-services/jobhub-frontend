import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '@/assets/theme';
import { authDispatchers } from '@/modules/actions/auth.actions';

const slideIn = keyframes`
	from { transform: translateY(-20px); opacity: 0; }
	to   { transform: translateY(0);     opacity: 1; }
`;

const Alert = styled.div`
	position: fixed;
	top: 20px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 9999;
	display: flex;
	align-items: center;
	gap: 12px;
	background: #fff;
	border: 1.5px solid #f5c6cb;
	border-left: 4px solid #dc3545;
	border-radius: 8px;
	padding: 14px 18px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
	animation: ${slideIn} 0.25s ease;
	max-width: 480px;
	width: calc(100vw - 40px);
`;

const Icon = styled.span`
	font-size: 20px;
	flex-shrink: 0;
`;

const Body = styled.div`
	flex: 1;
`;

const Title = styled.p`
	margin: 0 0 2px;
	font-size: 14px;
	font-weight: 700;
	color: #dc3545;
`;

const Msg = styled.p`
	margin: 0;
	font-size: 13px;
	color: ${colors.BLACK_5};
`;

const Actions = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	flex-shrink: 0;
`;

const Btn = styled.button<{ variant?: 'primary' | 'ghost' }>`
	padding: 6px 14px;
	border-radius: 6px;
	font-size: 13px;
	font-weight: 600;
	cursor: pointer;
	border: none;
	background: ${({ variant }) => (variant === 'primary' ? colors.PURPLE_BASE : 'transparent')};
	color: ${({ variant }) => (variant === 'primary' ? '#fff' : colors.BLACK_5)};
	&:hover { opacity: 0.8; }
`;

interface ErrorPageProps {
	status: number;
	message: string;
}

const ErrorPage: FC<ErrorPageProps> = ({ status, message }) => (
	<Alert role="alert">
		<Icon>⚠️</Icon>
		<Body>
			<Title>Error {status}</Title>
			<Msg>{message}</Msg>
		</Body>
		<Actions>
			<Btn variant="primary" onClick={() => { authDispatchers.clearApiError(); window.location.reload(); }}>
				Try Again
			</Btn>
			<Btn onClick={() => authDispatchers.clearApiError()}>Dismiss</Btn>
		</Actions>
	</Alert>
);

export default ErrorPage;
