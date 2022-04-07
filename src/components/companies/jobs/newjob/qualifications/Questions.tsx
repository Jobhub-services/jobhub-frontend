import React, { useState } from "react"
import { TextAreaField } from "@/components/common"
import { SButton,SIcon } from "@/components/companies/jobs/newjob/newjob.styles"
import { PlusIcon,TrashIcon } from "staak-ui"
import { TextArea,FlexBox } from "staak-ui"


const Questions = (props:any)=>{
    const [questions,setQuestions] = useState<{index:number,value:string}[]>([])
    function addQuestion(event:React.SyntheticEvent){
        const tmp = [...questions,{index:questions.length+2,value:''}]
        setQuestions(tmp)
    }
    function removeQuestion(event:React.SyntheticEvent,index:number){
        setQuestions(questions.filter(elem => {
            if(elem.index!==index){
                elem.index = elem.index-1
                return elem
            }
        }))
    }
    return (
        <div>
            <h3>Pre-qualifications</h3>
            <div>
                <div>
                    <TextAreaField className='mt-10 mb-10' placeholder="Requirements" name='job_desc' width="785px" height='60px' >Question 1</TextAreaField>
                    {questions.map((elem,key)=>{
                        return (
                            <div key={key}>
                                <FlexBox justify='space-between'>
                                    <label>Question {elem.index}</label>
                                    <SIcon onClick={(event:React.SyntheticEvent)=>removeQuestion(event,elem.index)} width='25px' height='25px'>
                                        <TrashIcon color='inherit' />
                                    </SIcon>
                                </FlexBox>
                                <TextArea className='mt-5 mb-10' placeholder="Requirements" name='job_desc' width="785px" height='60px' ></TextArea>
                            </div>
                        )
                    })}
                    <SButton onClick={addQuestion} variant='text' startIcon={<PlusIcon />}>Add question</SButton>
                </div>
            </div>
        </div>
    )
}

export default Questions