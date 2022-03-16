import { SectionProps } from '@/models/component/public.interface'
import styled from 'styled-components'
const StyledDiv = styled.div<SectionProps>`
    width:100%;
    max-width:${props=>props.width};
    margin:auto;
`
const StyledSection = styled.section`
    padding: 60px 0px;
`
const Section  = (props:SectionProps)=>{
    return (
        <StyledSection {...props}>
            <StyledDiv width={props.width}>
                {props.children}
            </StyledDiv>
        </StyledSection>
    )
}
Section.defaultProps = {
    width:'1400px'
}
export default Section