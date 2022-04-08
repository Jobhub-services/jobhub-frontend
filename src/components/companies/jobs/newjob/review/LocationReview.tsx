import { JobReviewProps } from "@/models/component"
import { FlexBox, Headline, } from "staak-ui"
import styled from "styled-components"
import { Sh4 } from "./jobReview.styles"
//import HireLocation from '@/__icons__/HireLocation.svg'
import IconTitle from "./IconTitle"

const SWrapper = styled(FlexBox)`
    justify-content:flex-start !important;
    flex-wrap:wrap;
    gap:10px;
`
const SDot = styled.span`
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: black;
`
const LocationReview = (props:JobReviewProps)=>{
    return (
        <div>
            <Headline variant='h2' size="sm">Location</Headline>
            <div>
                <Sh4>Work location</Sh4>
                <SWrapper>
                    <div>Remote</div>
                    <FlexBox style={{gap:'5px'}}>
                        <span>Allemagne</span><SDot />
                        <span>Berlin</span>
                    </FlexBox>
                    <div>France</div>
                    <div>Itali</div>
                </SWrapper>
            </div>
            <div>
                <IconTitle title='Hiring location'  />
                <SWrapper>
                    <div>Remote</div>
                    <FlexBox style={{gap:'5px'}}>
                        <span>Allemagne</span>
                        <SDot />
                        <span>Berlin</span>
                    </FlexBox>
                    <div>France</div>
                    <div>Itali</div>
                </SWrapper>
            </div>
            <div>
                <Sh4>Visa sponsorship</Sh4>
                <span>available</span>
            </div>
        </div>
)
}

export default LocationReview