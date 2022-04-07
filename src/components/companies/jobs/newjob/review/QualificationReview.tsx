import { FlexBox, Headline } from "staak-ui"
import IconTitle from "./IconTitle"
import { SUl } from "./jobReview.styles"
import Tag from "./Tag"
import School from '@/__icons__/School.svg'
import Certification from '@/__icons__/Certification.svg'
import Skills from '@/__icons__/Skills.svg'
import Requirement from '@/__icons__/Requirement.svg'
import Questions from '@/__icons__/Questions.svg'
import styled from "styled-components"
import { JobReviewProps } from "@/models/component"

const TagWrapper = styled(FlexBox)`
    justify-content:flex-start !important;
    flex-wrap: wrap;
    gap: 10px;
    margin-left: 20px;
`
const QualificationsReview = (props:JobReviewProps)=>{
    return (
        <div>
            <Headline variant='h2' size="sm">Qualifications</Headline>
            <div>
                <IconTitle title="Education" icon={School}/>
                <SUl>
                    <li>Bachelor degrees in management</li>
                    <li>Master in Information Technology field</li>
                </SUl>
            </div>
            <div>
                <IconTitle title="Certification" icon={Certification}/>
                <SUl>
                    <li>Machin learning and deep learning</li>
                    <li>Web developement using react js</li>
                    <li>Web developement using react js</li>
                </SUl>
            </div>
            <div>
                <IconTitle title="Skills" icon={Skills}/>
                <TagWrapper>
                    <Tag>Reactjs</Tag>
                    <Tag>Laravel</Tag>
                    <Tag>Python</Tag>
                    <Tag>Nodejs</Tag>
                </TagWrapper>
            </div>
            <div>
                <IconTitle title="Requirements" icon={Requirement}/>
                <p style={{marginLeft:'20px',marginTop:'0'}}>
                - 1 year of experience building production, customer-facing React applications.<br/>
                - 3 years of experience building production, customer-facing frontend applications (using React or any other frontend toolchain)<br/>
                - Strong verbal and written communication skills<br/>
                - Some experience with a statically-typed language (e.g. TypeScript)<br/>
                </p>
            </div>
            <div>
                <IconTitle title="Questions" icon={Questions}/>
                <SUl>
                    <li>Profit-sharing distributed quarterly?</li>
                    <li>Continuous events like happy hour & regular hosted meetups?</li>
                    <li>Why do you live in algeria?</li>
                </SUl>
            </div>
    </div>
    )
}

export default QualificationsReview