import { useState } from "react"
import { FormProps } from "@/models/component"
import { Form } from "@/components"
import { ErrorWrapper } from "@/components/common"

const CompanyForm = (props:FormProps)=>{
    const [values, setValues] = useState<{password?:string,'confirm-password'?:string}>({})
    function onValueChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        let tmpValues:{[key in string]:string} = {...values}
        tmpValues[name] = value
        setValues(tmpValues)
    }
    function onSubmitData(event:React.SyntheticEvent){
        //alert("its me")
        console.log('get values',values)
    }
    return (
        <Form onChange={onValueChange} onSubmit={onSubmitData}>
            <Form.Input name="companyname" width='350px'>Company name</Form.Input>
            <Form.Input name='email' width='350px' type="email">Business email</Form.Input>
            <Form.Input name="password" width='350px' type="password">Password</Form.Input>
            <Form.Input name="confirm-password" width='350px' type="password">
                <ErrorWrapper error={values['confirm-password']===undefined&&values['confirm-password']!==''&&values['password']===values['confirm-password']} message='Confirme your password'>
                    Confirm Password
                </ErrorWrapper>
            </Form.Input>
            <Form.CheckBox name='conditions'>
                Yes, I'd like to be invited to Staak events and receive new resources like tutorials, templates or the latest advice.
            </Form.CheckBox>
            <Form.Submit width="100%">Sign Up</Form.Submit>
        </Form>
    )
}

export default CompanyForm