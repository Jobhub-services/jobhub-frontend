import { Button, FlexBox,IconButton } from "staak-ui"
import styled from "styled-components"
import Clock from '@/__icons__/Clock.svg'
import Location from '@/__icons__/Location.svg'
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss';
import IconUsers from "@/__icons__/IconUsers";
import IconDot from "@/__icons__/IconDot";

const SWrapper = styled(FlexBox)`
    flex-wrap:wrap;
`
const SContainer = styled.div`
    background: white;
    box-shadow: 0 0 20px 0 rgb(76 87 125 / 2%);
    border-radius: 8px;
    border: 1px solid ${Colors.BLACK_12};
`
const St = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:50px;
    height: 50px;
    background: ${Colors.RED_CLEAR_4};
    border-radius: 50%;
`

const STag = styled.span`
    display:inline-block;
    padding:5px 10px;
    font-size:12px;
    border-radius:7px;
    background-color: ${Colors.PURPLE_1};
`
const SDot = styled.span`
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: black;
`

const ShowJobs = (props:any)=>{
    return (
        <SWrapper>
            <SContainer style={{}}>
                <div style={{padding: '15px 10px'}}>
                    <FlexBox justify='space-between' align='flex-start'>
                        <FlexBox align='flex-start' style={{marginLeft:'5px',gap:'10px'}}>
                            <St style={{}}>
                                JF
                            </St>
                            <div>
                                <div><strong>Junior Frontend developer</strong></div>
                                <span style={{fontSize:'12px'}}>Humain resources administration</span>
                            </div>
                        </FlexBox>
                        <FlexBox align='flex-start'>
                            <IconButton width='40px' height='25px'><IconDot/></IconButton>
                        </FlexBox>
                    </FlexBox>
                    <p style={{width:'450px',fontSize:'14px',height:'65px',overflow:'hidden'}}>
                    Our Experience team is looking for a passionate Frontend Engineer to join us in creating amazing experiences for our users  join us in creating amazing experiences for our users  join us in creating amazing experiences for our users
                    </p>
                    <FlexBox justify='space-between'>
                        <FlexBox justify='flex-start' style={{gap:'10px'}}>
                            <STag>Full-time</STag>
                            <STag>Permanent</STag>
                            <STag>Remote</STag>
                        </FlexBox>
                        <STag>Active</STag>
                    </FlexBox>
                    <FlexBox justify='space-between' style={{marginTop:'10px'}}>
                        <FlexBox>
                            <img src={Location} alt='clock' width={20} height={20} />
                            <FlexBox style={{gap:'10px'}}>
                            <span>Remote</span>
                            <FlexBox style={{gap:'2px'}}>
                                <span>Allemagne</span><SDot />
                                <span>Berlin</span>
                            </FlexBox>
                            </FlexBox>
                        </FlexBox>
                        
                        
                        <FlexBox style={{gap:'5px'}}>
                            <img src={Clock} alt='clock' width={20} height={20} />
                            <span>7 Juin</span>
                        </FlexBox>
                    </FlexBox>
                </div>
                <FlexBox justify='space-between' style={{background:`${Colors.PURPLE_1}`,padding: '10px 10px'}}>
                    <FlexBox>
                        <Button variant='outlined'>Details</Button>
                    </FlexBox>
                    <FlexBox>
                        <IconUsers />
                        <span>23</span>
                    </FlexBox>
                </FlexBox>
            </SContainer>
        </SWrapper>
    )
}

export default ShowJobs