import { Component } from "react";
import styled from "styled-components";
import { FlexBox,Headline } from "staak-ui";
import { AddNewJobProps, AddNewJobState } from "@/models/component";
import { StepProgress } from "@/components/companies/progressBar";
import BasicDetails from "@/components/companies/jobs/newjob/basics/BasicInfo";
import AdditionalInfo from "@/components/companies/jobs/newjob/details/DetailedInfo";
import AddTests from "@/components/companies/jobs/newjob/qualifications/QaulificationsInfo";
import JobReview from "@/components/companies/jobs/newjob/review/JobReview";
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss'

/* component style */

const StyledDiv = styled.div`
    align-self:flex-start;
    padding:0px 20px;
    position:sticky;
    top:77px;
`
const StyledFlexBox = styled(FlexBox)`
	padding: 5px 0px !important;
	height: 100%;
`
const StyledHeadline = styled(Headline)`
    margin-top:0px;
`
const SContainer = styled.div`
    padding: 15px 0px;
    background: white;
    box-shadow: 0 0 20px 0 rgb(76 87 125 / 2%);
    border-radius: 8px;
`
/* component class */

class AddNewJob extends Component<any,AddNewJobState> {
    constructor(props:AddNewJobProps){
        super(props)
        this.state = {
            currentStep:0,
            validSteps:[false,false,false,false]
        }
        this.handleNext = this.handleNext.bind(this)
        this.handlePreviouse = this.handlePreviouse.bind(this)
        this.selectStep = this.selectStep.bind(this)
    }
    selectStep(event:React.SyntheticEvent,step:number){
        this.setState({currentStep:step})
    }
    handleNext(){
        const {currentStep,validSteps} = this.state
        const tmp = [...validSteps!]
        tmp[currentStep!] = true
        this.setState({
            currentStep:currentStep!+1,
            validSteps:tmp
        })
    }
    handlePreviouse(){
        const {currentStep,validSteps} = this.state
        const tmp = [...validSteps!]
        tmp[currentStep!-1] = false
        this.setState({currentStep:currentStep!>0?currentStep!-1:0,validSteps:tmp})
    }
    render(){
        const {currentStep,validSteps} = this.state
        let step = null,title=null
        switch(currentStep){
            case 0:
                step = <BasicDetails onNext={this.handleNext}/>
                title = 'Basic Informations'
                break
            case 1:
                step = <AdditionalInfo onNext={this.handleNext} onPreviouse={this.handlePreviouse}/>
                title = 'Detailed Informations'
                break
            case 2:
                step = <AddTests onNext={this.handleNext} onPreviouse={this.handlePreviouse}/>
                title = 'Qualifications'
                break
            case 3:
                step = <JobReview onPreviouse={this.handlePreviouse}/>
                title = 'Job Review'
        }
        return(
            <StyledFlexBox  align='flex-start'  height='100%'>
                <StyledDiv>
                    <StepProgress onSelectStep={this.selectStep} style={{marginLeft:'40px'}} direction="vertical" items={[{ name: 'Basics', valid:validSteps![0],active: currentStep===0 }, { name: 'Details', valid: validSteps![1],active:currentStep===1 },{ name: 'Qualifications',valid:validSteps![2] ,active: currentStep===2 }, { name: 'Review',valid:validSteps![3],active:currentStep===3 }]} />
                </StyledDiv>
                <SContainer>     
                    <div style={{borderBottom:`1px solid ${Colors.BLACK_12}`,padding:'0px 20px'}}>
                        <StyledHeadline variant='h2' size='md'>{title}</StyledHeadline>
                    </div>
                    <div style={{padding:'0px 20px'}}>
                        {step}
                    </div>
                </SContainer>
            </StyledFlexBox>
        )
    }
}

export default AddNewJob