import { FlexBox,Button,Radio } from "staak-ui"
import { InputField,InputPickerField,TextAreaField } from "@/components/common"
import styled from "styled-components"
import JobLocation from "@/components/companies/jobs/newjob/details/JobLocation"

const StyledGap = styled(FlexBox)`
    margin-top:10px;
    gap:15px;
`

const AdditionalInfo = (props:any)=>{
    function handleNext(event:React.SyntheticEvent){
        if(props.onNext) props.onNext(event)
    }
    function handlePrevious(event:React.SyntheticEvent){
        if(props.onPreviouse) props.onPreviouse(event)
    }
    return (
        <div>
            <FlexBox align='flex-start' justify='flex-start'>
                
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
                        <InputPickerField width='160px' name='currency' title='Currency'>
                            <InputPickerField.Option value='dzd'>Algerien Dinar (DZD)</InputPickerField.Option>
                        </InputPickerField>
                    </StyledGap>
                    <StyledGap>
                        <TextAreaField placeholder="Benifts" name='job_desc' width="575px" height="250px">Benifts</TextAreaField>
                    </StyledGap>
                </div>
                <div style={{padding:'0 0 0 15px'}}>
                    <JobLocation />
                </div>
                
            </FlexBox>
            <StyledGap align='flex-start' justify='flex-start'>
                <Button variant='outlined' onClick={handlePrevious}>Back</Button>
                <Button onClick={handleNext}>Save & Continue</Button>
            </StyledGap>
        </div>
    )
}

export default AdditionalInfo