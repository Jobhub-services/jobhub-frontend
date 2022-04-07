import { Headline } from "staak-ui"
import IconTitle from "./IconTitle"
import { JobReviewProps } from "@/models/component"
import Benefits from '@/__icons__/Benefits.svg'
import Salary from '@/__icons__/Salary.svg'

const CompensationReview = (props:JobReviewProps)=>{
    return (
    <div>
        <Headline variant='h2' size="sm">Compensation</Headline>
        <div>
            <IconTitle title="Salary" icon={Salary} />
            <div style={{marginLeft:'20px'}}>
                <span>32000</span>-<span>45000</span>
                <span style={{marginLeft:'10px'}}>EUR</span>
            </div>
        </div>
        <div>
            <IconTitle title="Benefits" icon={Benefits} />
            <p style={{marginLeft:'20px',marginTop:'0'}}>
                1- Fully remote, no location restrictions<br/>
                2- Profit-sharing distributed quarterly<br/>
                3- 4 weeks vacation<br/>
                4- Unlimited paid sick days<br/>
                5- Extended health benefits<br/>
                6- Continued education allowance<br/>
                7- Annual fitness allowance<br/>
                8- Continuous events like happy hour & regular hosted meetups<br/>
            </p>
        </div>
    </div>
    )
}

export default CompensationReview