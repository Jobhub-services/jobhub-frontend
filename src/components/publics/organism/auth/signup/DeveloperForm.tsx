import { Form } from "@/components"
import { FormProps } from "@/models/component"

const DeveloperForm = (props:FormProps)=>{

    return(
        <Form>
            <Form.Input name="firstname" width="350px">First name</Form.Input>
            <Form.Input name="lastname" width="350px">Last name</Form.Input>
            <Form.Input name='email' width="350px">Email</Form.Input>
            <Form.Input name="password" width="350px">Password</Form.Input>
            <Form.Input name="confirm-password" width="350px">Confirm Password</Form.Input>
            <Form.CheckBox name=''>
                Yes, I'd like to be invited to Staak events and receive new resources like tutorials, templates or the latest advice.
            </Form.CheckBox>
            <Form.Submit width="100%">Sign Up</Form.Submit>
        </Form>
    )
}

export default DeveloperForm