import styled from 'styled-components'
import { Button, FlexBox, Headline,LinkTag } from 'staak-ui'
import {FaceBookIcon,TwitterIcon,InstagramIcon,LinkedinIcon} from 'staak-ui'
import { Logo } from '@/components/common'
import { StandardProps } from '@/models'


const StyledDiv = styled(FlexBox)`
    background-color: #292929;
`
const StyledLogo = styled(Logo)`
    padding: 20px 1px;
`
const StyledIcon = styled.span`
    cursor:pointer;
`
const StyledDivider = styled.div`
    border-bottom: 1px solid white;
    padding: 20px 10px;
    width:100%;
    opacity:.5;
`
const StyledFlexBox = styled(FlexBox)`
    padding: 20px 10px !important;
`


const Footer = (props:StandardProps)=>{
    return ( 
        <StyledDiv>
            <FlexBox flexDirection='column' width='70%'>
                <FlexBox justify='space-between' align='flex-start' width='100%' >
                    <FlexBox flexDirection='column' align='flex-start' height='350px' justify='space-between'>
                        <StyledLogo/>
                        <FlexBox width='180px' justify='space-between'>
                            <Button noBg={true} color='white' variant='text'>Log In</Button>
                            <Button noBg={true} color='white' variant='outlined'>Sign Up</Button>
                        </FlexBox>
                    </FlexBox>
                    <FlexBox flexDirection='column' align='flex-start'>
                        <Headline variant='h2' color='white' size='md'>FOR COMPANIES</Headline>
                        <FlexBox flexDirection='column' align='flex-start'>
                            <LinkTag>Source & Attract</LinkTag>
                            <LinkTag>Language options</LinkTag>
                            <LinkTag>Careers pages</LinkTag>
                            <LinkTag>Source & Attract</LinkTag>
                            <LinkTag>Source & Attract</LinkTag>
                            <LinkTag>Source & Attract</LinkTag>
                        </FlexBox>
                    </FlexBox>
                    <FlexBox flexDirection='column' align='flex-start'>
                        <Headline variant='h2' color='white' size='md'>FOR DEVELOPERS</Headline>
                        <FlexBox flexDirection='column' align='flex-start'>
                            <LinkTag>Video Interviews</LinkTag>
                            <LinkTag>Source & Attract</LinkTag>
                            <LinkTag>Source & Attract</LinkTag>
                            <LinkTag>Source & Attract</LinkTag>
                            <LinkTag>Source & Attract</LinkTag>
                        </FlexBox>
                    </FlexBox>
                    <FlexBox flexDirection='column' align='flex-start'>
                        <Headline variant='h2' color='white' size='md'>RESOURCES</Headline>
                        <FlexBox flexDirection='column' align='flex-start'>
                            <LinkTag>Help & Support</LinkTag>
                            <LinkTag>Applicant Tracking</LinkTag>
                            <LinkTag>Hiring Tutoriels</LinkTag>
                            <LinkTag>Job Description</LinkTag>
                            <LinkTag>Blog</LinkTag>
                            <LinkTag>Community</LinkTag>
                            <LinkTag>Affiliate Program</LinkTag>
                            <LinkTag>Source & Attract</LinkTag>
                        </FlexBox>
                    </FlexBox>
                    <FlexBox flexDirection='column' align='flex-start'>
                        <Headline variant='h2' color='white' size='md'>COMPANY</Headline>
                        <FlexBox flexDirection='column' align='flex-start'>
                            <LinkTag>Contact</LinkTag>
                            <LinkTag>BackStage</LinkTag>
                            <LinkTag>Careers</LinkTag>
                            <LinkTag>Press</LinkTag>
                            <LinkTag>About</LinkTag>
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
                <StyledDivider/>
                <FlexBox width='100%' justify='flex-start'>
                    <StyledFlexBox justify='space-between' width='60%'>
                        <div>
                            <Headline color='white' variant='h2' size='xs'>Bahrain: +1 857 990 9675</Headline>
                            <Headline color='white' variant='h2' size='xs'>Europe & Rest of World: +44 203 826 8149</Headline>
                        </div>
                        <FlexBox width='220px' justify='space-between'>
                            <StyledIcon><FaceBookIcon color='white' width='36px' height='36px' /></StyledIcon>
                            <StyledIcon><InstagramIcon color='white' width='36px' height='36px' /></StyledIcon>
                            <StyledIcon><LinkedinIcon color='white' width='36px' height='36px' /></StyledIcon>
                            <StyledIcon><TwitterIcon color='white' width='36px' height='36px' /></StyledIcon>
                        </FlexBox>
                    </StyledFlexBox>
                </FlexBox>
            </FlexBox>
        </StyledDiv>
    )
}
export default Footer