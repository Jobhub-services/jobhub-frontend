import React, { useState } from 'react'
import { Form ,ErrorWrapper} from "@/components/common";
import { FormProps } from "@/models/component";
import { LockIcon, AtSignIcon } from "staak-ui";


const LoginForm = (props: FormProps) => {
    const [values, setValues] = useState({})
    function onValueChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        let tmpValues:{[key in string]:string} = {...values}
        tmpValues[name] = value
        setValues(tmpValues)
    }
    function onSubmitData(event:React.SyntheticEvent){
        alert("its me")
        console.log(values)
    }
    return (
        <Form onChange={onValueChange} onSubmit={onSubmitData} >
            <Form.Input placeholder='email' startIcon={<AtSignIcon />} width="350px" name="email" type="email">
                <ErrorWrapper error={false} message='Your email is incorrect'>
                    Email
                </ErrorWrapper>
            </Form.Input>
            <Form.Input placeholder='password' startIcon={<LockIcon />} width="350px" name='password' type="password">
                <ErrorWrapper error={true} message='Your password is incorrect'>
                    Password
                </ErrorWrapper>
            </Form.Input>
            <Form.Submit width="100%">
                Log In
            </Form.Submit>
        </Form>
    )
}

export default LoginForm