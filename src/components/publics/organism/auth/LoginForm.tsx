import { Form } from "@/components/common";
import { FormProps } from "@/models";
import { LockIcon ,AtSignIcon} from "staak-ui";


const LoginForm = (props:FormProps)=>{
    return (
        <Form>
            <Form.Input startIcon={<AtSignIcon />} width="350px" name="email">
                Email
            </Form.Input>
            <Form.Input startIcon={<LockIcon />} width="350px" name='password' type="password">
                Password
            </Form.Input>
            <Form.Submit width="100%">
                Log In
            </Form.Submit>
        </Form>
    )
}

export default LoginForm