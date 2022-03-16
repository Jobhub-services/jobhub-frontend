import {FlexBox,Button} from 'staak-ui'
import {SearchInput} from 'staak-ui'
import { NavItems } from '@/components/publics/atom'
import { Logo } from '@/components/common'
import styled from 'styled-components'
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { StandardProps } from '@/models'

const StyledHeader = styled.div`
    position:sticky;
    top: 0;
    border-bottom: 1px solid ${Colors.GRAY_1};
    background-color:${Colors.WHITE};
    z-index:100;
`
const Header = (props:StandardProps)=>{
    const navigate = useNavigate()
    function onLogin(event:React.SyntheticEvent){
        navigate('login',{replace:true})
    }
    return (
        <>
        <StyledHeader style={{width:'100%'}}>
            <FlexBox className="hello world" style={{margin:'auto'}} justify='space-between' size='lg' width='1400px' >
                <FlexBox>
                    <Logo className='ml-20' />
                </FlexBox>
                <FlexBox justify='space-around' width='1150px' className='mr-20'>
                    <NavItems/>
                    <SearchInput options={['Search jobs','Search talent','Search companies']} sizeInput='lg' />
                    <FlexBox justify='space-between' width='190px'>
                        <Button variant="text" onClick={onLogin}>Log In</Button>
                        <Button>Sign Up</Button>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </StyledHeader>
        </>
    )
}

export default Header