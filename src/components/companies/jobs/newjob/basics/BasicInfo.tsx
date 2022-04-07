import { JobReviewProps } from "@/models/component"
import { FlexBox, Button, Radio, Input } from "staak-ui"
import { InputField, InputPickerField, TextAreaField } from "@/components/common"
import styled from "styled-components"
import React from "react"

const StyledGap = styled(FlexBox)`
    margin-top:10px;
    gap:15px;
`

const BasicDetails = (props: JobReviewProps) => {
    function handleNext(event: React.SyntheticEvent) {
        if (props.onNext) props.onNext(event)
    }
    function handlePrevious(event: React.SyntheticEvent) {
        if (props.onPreviouse) props.onPreviouse(event)
    }
    return (
        <>
            <FlexBox justify='flex-start' align='flex-start'>
                <div style={{ padding: '0px 15px 0 0' }}>
                    <h3>General information</h3>
                    <InputField placeholder="Title" name="job_title" width="600px">Title</InputField>
                    <TextAreaField className='mt-10' placeholder="Description" name='job_desc' width="580px" height="250px">Job Description</TextAreaField>
                    <TextAreaField className='mt-10' placeholder="Responsabilities" name='job_desc' width="580px" height="200px">Job Responsabilities</TextAreaField>
                </div>
                <div style={{ padding: '0px 0px 0px 15px' }} >
                    <div>
                        <h3>Job function</h3>
                        <StyledGap justify='flex-start'>
                            <InputPickerField width='495px' name='job_type' placeholder="Division" title="Company division">
                                <InputPickerField.Option value="full_time">Full-time</InputPickerField.Option>
                                <InputPickerField.Option value="part_time">Part-time</InputPickerField.Option>
                                <InputPickerField.Option value="contract">Contract</InputPickerField.Option>
                                <InputPickerField.Option value="temporary">Temporary</InputPickerField.Option>
                                <InputPickerField.Option value="other">Other</InputPickerField.Option>
                            </InputPickerField>
                        </StyledGap>
                        <InputPickerField width='495px' name='job_type' placeholder="Category" title="Category">
                            <InputPickerField.Option value="full_time">Full-time</InputPickerField.Option>
                            <InputPickerField.Option value="part_time">Part-time</InputPickerField.Option>
                            <InputPickerField.Option value="contract">Contract</InputPickerField.Option>
                            <InputPickerField.Option value="temporary">Temporary</InputPickerField.Option>
                            <InputPickerField.Option value="other">Other</InputPickerField.Option>
                        </InputPickerField>
                    </div>
                    <div >
                        <h3>Employment type & Duration</h3>
                        <div>
                            <label>Type</label>
                            <StyledGap justify='flex-start'>
                                <Radio>Full-Time</Radio>
                                <Radio>Part-Time</Radio>
                            </StyledGap>
                        </div>
                        <div style={{ margin: '15px 0px 0px 0px' }}>
                            <label>Duration</label>
                            <StyledGap justify='flex-start'>
                                <Radio>Permanent</Radio>
                                <Radio>Temporary/Seasonal</Radio>
                            </StyledGap>
                        </div>
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