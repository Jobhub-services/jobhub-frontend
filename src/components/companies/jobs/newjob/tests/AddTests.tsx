import { FlexBox,Button } from "staak-ui"
import { InputPickerField,InputField } from "@/components/common"
import PreQualification from './PreQualification'
import styled from "styled-components"


const StyledGap = styled(FlexBox)`
    margin-top:10px;
    gap:15px;
`
const AddTests = (props:any)=>{
    function handleNext(event:React.SyntheticEvent){
        if(props.onNext) props.onNext(event)
    }
    function handlePrevious(event:React.SyntheticEvent){
        if(props.onPreviouse) props.onPreviouse(event)
    }
    return (
        <>
            <FlexBox flexDirection='column' align='flex-start'>
                <div>
                    <h3>Employements details</h3>
                    <StyledGap justify='flex-start'>
                        <InputPickerField width='400px' name='job_type' placeholder="Experience" title="Experience">
                            <InputPickerField.Option value="full_time">Full-time</InputPickerField.Option>
                            <InputPickerField.Option value="part_time">Part-time</InputPickerField.Option>
                            <InputPickerField.Option value="contract">Contract</InputPickerField.Option>
                            <InputPickerField.Option value="temporary">Temporary</InputPickerField.Option>
                            <InputPickerField.Option value="other">Other</InputPickerField.Option>
                        </InputPickerField>
                        <InputPickerField width='400px' name='education' placeholder="Education" title="Education">
                            <InputPickerField.Option value="full_time">Full-time</InputPickerField.Option>
                            <InputPickerField.Option value="part_time">Part-time</InputPickerField.Option>
                            <InputPickerField.Option value="contract">Contract</InputPickerField.Option>
                            <InputPickerField.Option value="temporary">Temporary</InputPickerField.Option>
                            <InputPickerField.Option value="other">Other</InputPickerField.Option>
                        </InputPickerField>
                    </StyledGap>
                </div>
                <div style={{padding:'0 0 0 0'}}>
                    <PreQualification />
                </div>
            </FlexBox>
            <StyledGap align='flex-start' justify='flex-start'>
                <Button variant='outlined' onClick={handlePrevious}>Back</Button>
                <Button onClick={handleNext}>Save & Continue</Button>
            </StyledGap>
        </>
    )
}

export default AddTests