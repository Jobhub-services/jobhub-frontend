import { BasicDetailsProps } from "@/models/component"
import { FlexBox,Button,Radio} from "staak-ui"
import { InputField,InputPickerField,TextAreaField } from "@/components/common"
import styled from "styled-components"
import React from "react"

const StyledGap = styled(FlexBox)`
    margin-top:10px;
    gap:15px;
`

const BasicDetails = (props:BasicDetailsProps)=>{
    function handleNext(event:React.SyntheticEvent){
        if(props.onNext) props.onNext(event)
    }
    function handlePrevious(event:React.SyntheticEvent){
        if(props.onPreviouse) props.onPreviouse(event)
    }
    return (
        <>
            <FlexBox align='flex-start' justify='flex-start'>
                <div style={{padding:'0px 15px 0 0'}}>
                    <h3>Generale information</h3>
                    <InputField placeholder="Title" name="job_title" width="600px" >Job title</InputField>
                    <TextAreaField className='mt-10' placeholder="Description" name='job_desc' width="580px" height="135px">Job Description</TextAreaField>
                    <TextAreaField className='mt-10' placeholder="Responsabilities" name='job_desc' width="580px" height="135px">Job Responsabilities</TextAreaField>
                    <TextAreaField className='mt-10' placeholder="Requirements" name='job_desc' width="580px" height="135px">Job Requirements</TextAreaField>    
                </div>
                <div style={{padding:'0px 0px 0px 15px'}}>
                    <div>
                        <h3>Job function</h3>
                        <StyledGap justify='flex-start'>
                            <InputPickerField width='295px' name='job_type' placeholder="Type" title="Type">
                                <InputPickerField.Option value="full_time">Full-time</InputPickerField.Option>
                                <InputPickerField.Option value="part_time">Part-time</InputPickerField.Option>
                                <InputPickerField.Option value="contract">Contract</InputPickerField.Option>
                                <InputPickerField.Option value="temporary">Temporary</InputPickerField.Option>
                                <InputPickerField.Option value="other">Other</InputPickerField.Option>
                            </InputPickerField>
                            <InputPickerField width='295px' name='job_type' placeholder="Category" title="Category">
                                <InputPickerField.Option value="full_time">Full-time</InputPickerField.Option>
                                <InputPickerField.Option value="part_time">Part-time</InputPickerField.Option>
                                <InputPickerField.Option value="contract">Contract</InputPickerField.Option>
                                <InputPickerField.Option value="temporary">Temporary</InputPickerField.Option>
                                <InputPickerField.Option value="other">Other</InputPickerField.Option>
                            </InputPickerField>
                        </StyledGap>
                    </div>
                    <div>
                        <h3>Compensation</h3>
                        <StyledGap justify='flex-start'>
                            <Radio>Salary</Radio>
                            <Radio>Hourly</Radio>
                            <Radio>Contract</Radio>
                        </StyledGap>
                        <StyledGap justify='flex-start'>
                            <InputField width='200px' name='low' placeholder="Low end" >From</InputField>
                            <InputField width='200px' name='low' placeholder="High end" >To</InputField>
                            <InputPickerField width='170px' name='currency' title='Currency'>
                                <InputPickerField.Option value='dzd'>Algerien Dinar (DZD)</InputPickerField.Option>
                            </InputPickerField>
                        </StyledGap>
                        <StyledGap>
                            <TextAreaField placeholder="Benifts" name='job_desc' width="585px" height="120px">Benifts</TextAreaField>
                        </StyledGap>
                    </div>
                </div>
            </FlexBox>
            <StyledGap align='flex-start' justify='flex-start'>
                <Button variant='outlined' onClick={handlePrevious}>Back</Button>
                <Button onClick={handleNext}>Save & Continue</Button>
            </StyledGap>
        </>    
    )
}

export default BasicDetails