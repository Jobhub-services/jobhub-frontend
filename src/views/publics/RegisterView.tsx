import { FlexBox, TabPane } from 'staak-ui';
import { AuthFooter, CompanyForm, DeveloperForm } from '@/components';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RegisterProps } from '@/models/component';
import { authDispatchers } from '@/modules/actions/auth.actions';

const SignUpFlexBox = styled(FlexBox)`
	width: 100%;
	padding: 0 15px;
`;

const RegisterView = (props: RegisterProps) => {
	const navigate = useNavigate();
	function changeTab(name: string) {
		authDispatchers.setAuthErrors({});
		navigate(`/register/${name}`, { replace: true });
	}
	return (
		<>
			<TabPane activeItem={props.for} onChange={changeTab}>
				<TabPane.Pane name="company" title="Company">
					<SignUpFlexBox>
						<CompanyForm />
					</SignUpFlexBox>
				</TabPane.Pane>
				<TabPane.Pane name="developer" title="Developer">
					<SignUpFlexBox>
						<DeveloperForm />
					</SignUpFlexBox>
				</TabPane.Pane>
			</TabPane>
			<AuthFooter title="Already have a Staak account?" link="Sign in Now" to="/login" />
		</>
	);
};

export default RegisterView;
