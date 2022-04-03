import React, { useState } from "react"
import { InputPicker,Input,CheckBox,Radio } from "staak-ui"
import { PlusIcon,TrashIcon } from "staak-ui"
import { SIcon,SButton,StyledGap } from "@/components/companies/jobs/newjob/additional/additional.styles"


const JobLocation = (props:any)=>{
    const [workLocations,setWorkLocations] = useState<{index:number,value:string}[]>([])
    const [hireLocations,setHireLocations] = useState<{index:number,value:string}[]>([])
    function addWorkLocation(event:React.SyntheticEvent){
        const tmp = [...workLocations,{index:workLocations.length+2,value:''}]
        setWorkLocations(tmp)
    }
    function addHireLocation(event:React.SyntheticEvent){
        const tmp = [...hireLocations,{index:hireLocations.length+2,value:''}]
        setHireLocations(tmp)
    }
    function removeWorkLocation(event:React.SyntheticEvent,index:number){
        setWorkLocations(workLocations.filter(elem=>elem.index!==index))
    }
    function removeHireLocation(event:React.SyntheticEvent,index:number){
        setHireLocations(hireLocations.filter(elem=>elem.index!==index))
    }
    return (
        <div>
            <h3>Location</h3>
            <div style={{marginBottom:'20px'}}>
                <label>Job location</label>
                <StyledGap justify='flex-start'>
                    <InputPicker width='240px' name='job_location' placeholder="Country" title="Country">
                        <InputPicker.Option value="full_time">Full-time</InputPicker.Option>
                        <InputPicker.Option value="part_time">Part-time</InputPicker.Option>
                        <InputPicker.Option value="contract">Contract</InputPicker.Option>
                        <InputPicker.Option value="temporary">Temporary</InputPicker.Option>
                        <InputPicker.Option value="other">Other</InputPicker.Option>
                    </InputPicker>
                    <Input width='240px' name='zip_code' placeholder='Region, City or Zip Code' />
                    <CheckBox>Remote</CheckBox>
                </StyledGap>
                {workLocations.map((elem,key)=>{
                    return (
                        <StyledGap key={key} justify='flex-start'>
                            <InputPicker width='240px' name='job_location' placeholder="Country" title="Country">
                                <InputPicker.Option value="full_time">Full-time</InputPicker.Option>
                                <InputPicker.Option value="part_time">Part-time</InputPicker.Option>
                                <InputPicker.Option value="contract">Contract</InputPicker.Option>
                                <InputPicker.Option value="temporary">Temporary</InputPicker.Option>
                                <InputPicker.Option value="other">Other</InputPicker.Option>
                            </InputPicker>
                            <Input width='240px' name='zip_code' placeholder='Region, City or Zip Code' />
                            <SIcon onClick={(event:React.SyntheticEvent)=>removeWorkLocation(event,elem.index)} width='25px' height='25px'>
                                <TrashIcon color='inherit' />
                            </SIcon>
                        </StyledGap>
                    )
                })}
                <SButton onClick={addWorkLocation} variant='text' startIcon={<PlusIcon />}>Add location</SButton>
            </div>
            <div style={{marginBottom:'20px'}}>
                <label>Hire Remotly</label>
                <StyledGap justify='flex-start'>
                    <InputPicker width='240px' name='hire_remotly' placeholder="Country" title="Hire Remotly">
                        <InputPicker.Option value="full_time">Full-time</InputPicker.Option>
                        <InputPicker.Option value="part_time">Part-time</InputPicker.Option>
                        <InputPicker.Option value="contract">Contract</InputPicker.Option>
                        <InputPicker.Option value="temporary">Temporary</InputPicker.Option>
                        <InputPicker.Option value="other">Other</InputPicker.Option>
                    </InputPicker>
                    <Input width='240px' name='zip_code' placeholder='Region, City or Zip Code' />
                    <CheckBox>Remote</CheckBox>
                </StyledGap>
                {hireLocations.map((elem,key)=>{
                    return (
                        <StyledGap key={key} justify='flex-start'>
                            <InputPicker width='240px' name='job_location' placeholder="Country" title="Country">
                                <InputPicker.Option value="full_time">Full-time</InputPicker.Option>
                                <InputPicker.Option value="part_time">Part-time</InputPicker.Option>
                                <InputPicker.Option value="contract">Contract</InputPicker.Option>
                                <InputPicker.Option value="temporary">Temporary</InputPicker.Option>
                                <InputPicker.Option value="other">Other</InputPicker.Option>
                            </InputPicker>
                            <Input width='240px' name='zip_code' placeholder='Region, City or Zip Code' />
                            <SIcon onClick={(event:React.SyntheticEvent)=>removeHireLocation(event,elem.index)} width='25px' height='25px'>
                                <TrashIcon color='inherit' />
                            </SIcon>
                        </StyledGap>
                    )
                })}
                <SButton onClick={addHireLocation} variant='text' startIcon={<PlusIcon />}>Add location</SButton>
            </div>
            <div style={{marginBottom:'20px'}}>
                <label>Visa sponsorship</label>
                <StyledGap align='flex-start' justify='flex-start'>
                    <Radio>Yes</Radio>
                    <Radio>No</Radio>
                </StyledGap>
            </div>
        </div>
    )
}

export default JobLocation