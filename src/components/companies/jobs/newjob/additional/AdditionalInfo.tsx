import { FlexBox,Button } from "staak-ui"
import styled from "styled-components"
import JobLocation from "@/components/companies/jobs/newjob/additional/JobLocation"

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
                <div style={{padding:'0px 15px 0 0'}}>
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