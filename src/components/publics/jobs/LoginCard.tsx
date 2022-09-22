import { colors } from '@/assets/theme';
import { useNavigate } from 'react-router-dom';
import { Button, FlexBox, LockIcon } from 'staak-ui';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	height: 250px;
	box-shadow: 0px 0px 20px -15px ${colors.BLACK_7};
	border-radius: 8px;
	background: white;
	padding: 25px 15px;
	width: 50%;
	margin-bottom: 20px;
`;
const SElem = styled.div<any>`
	background-color: ${colors.GRAY_1};
	height: 20px;
	width: ${(props) => props.width};
	filter: blur(8px);
	opacity: 0.8;
`;
const SIcon = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
`;
const Icon = styled(FlexBox)`
	border: 1px solid ${colors.PURPLE_2};
	padding: 5px;
	border-radius: 50%;
`;
const LoginCard = () => {
	const navigate = useNavigate();
	return (
		<Container>
			<div>
				<SElem width="95%" className="mb-20" />
				<FlexBox flexDirection="column" align="start" gap={30}>
					<SElem className="mt-20" width="30%" />
					<SElem width="60%" />
					<SElem width="80%" />
				</FlexBox>
			</div>
			<SIcon>
				<Icon>
					<LockIcon width="25px" height="25px" color={colors.PURPLE_2} />
				</Icon>
				<div className="mt-10" style={{ textAlign: 'center' }}>
					<FlexBox gap={10}>
						<div>To find out more jobs, see job detail, apply to job or unlock other great features</div>
						<Button
							size="sm"
							variant="text"
							onClick={() => {
								navigate('/login');
							}}
						>
							Login
						</Button>
					</FlexBox>
					<strong>OR</strong>
					<FlexBox gap={10}>
						<div>Become a Staak member today!</div>
						<Button
							size="sm"
							variant="text"
							onClick={() => {
								navigate('/register/developer');
							}}
						>
							Sign up
						</Button>
					</FlexBox>
				</div>
			</SIcon>
		</Container>
	);
};

export default LoginCard;
