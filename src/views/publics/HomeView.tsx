import React, { Component } from "react";
import { HomeProps, HomeState } from "@/models/component/auth.interface";
import { Header, Section, InfoCard, Footer, AvatarCard, CarouselAvatar, CarouselCard } from "@/components";
import { FlexBox, Button, Headline, HireIcon, BusinessGroupIcon, TestCheatingIcon, WorkerIcon } from "staak-ui"
import { AppColors } from "@/constants";
import styled from "styled-components";
import { JobOpportunitieIcon,JoinCompanyIcon,CodingIcon ,Icon} from "staak-ui";

const SectionWithBg = styled(Section)`
    background-image:url('assets/bg1.png') !important;
    background-size: 100% 125%;
    background-repeat:no-repeat;
`
class HomeView extends Component<HomeProps, HomeState>{
    constructor(props: HomeProps) {
        super(props)
        this.state = {}
    }
    onSignUp(){

    }
    render(): React.ReactNode {
        return (
            <>
                <Header />
                <Section>
                    <FlexBox align='flex-start' justify='space-between' >
                        <FlexBox width='48%' style={{ flexDirection: 'column' }} align='flex-start' >
                            <InfoCard titleSize='lg' contentSize='md'>
                                <InfoCard.Header>Best talent for best companies</InfoCard.Header>
                                <InfoCard.Body>A specialized one stop entity providing a recruitment linkage to developers and businesses</InfoCard.Body>
                            </InfoCard>
                            <FlexBox justify='space-between'>
                                <InfoCard width="47%" titleColor='black'>
                                    <InfoCard.Header>For Companies</InfoCard.Header>
                                    <InfoCard.Body>You're an employer in need of top-notch talent, we have vetted candidates who are ready to hit the ground running on day one. </InfoCard.Body>
                                    <InfoCard.Footer><Button>Start Hiring</Button></InfoCard.Footer>
                                </InfoCard>
                                <InfoCard width="47%" titleColor='black'>
                                    <InfoCard.Header>For Developers</InfoCard.Header>
                                    <InfoCard.Body>You're a developer looking for work, we can match you with the perfect position that meets your skil-lset and interests while providing competitive rates of pay.</InfoCard.Body>
                                    <InfoCard.Footer><Button variant='outlined' >Sin Up & Code</Button></InfoCard.Footer>
                                </InfoCard>
                            </FlexBox>
                        </FlexBox>
                        <FlexBox width='45%' >
                            <img src='assets/img/slogon1.png' alt='' width={800} style={{ borderRadius: '50%', padding: '60px 0px' }} />
                        </FlexBox>
                    </FlexBox>
                </Section>
                <Section style={{ background: '#5B4FE3' }} >
                    <FlexBox flexDirection='column'>
                        <Headline color='white' textAlign='center'>Hire the talents that meet the company's needs with the
                            world's leading recruiting platform.</Headline>
                        <FlexBox justify='space-between' align='flex-start' width='95%'>
                            <InfoCard src="assets/img/img10.jpg" width="30%" titleColor="white" contentColor="white" titleAlign="center">
                                <InfoCard.Header>Post a job and hire a professional</InfoCard.Header>
                                <InfoCard.Body>Create a job post in minutes to tap into a network of over 770 million professionals. Share that you're hiring, with your network and beyond.</InfoCard.Body>
                            </InfoCard>
                            <InfoCard src="assets/img/img14.JPG" width="30%" titleColor="white" contentColor="white" titleAlign="center">
                                <InfoCard.Header>Browse talents and find the right candidates</InfoCard.Header>
                                <InfoCard.Body>Create a job post in minutes to tap into a network of over 770 million professionals. Share that you're hiring, with your network and beyond.</InfoCard.Body>
                            </InfoCard>
                            <InfoCard src="assets/img/img16.JPG" width="30%" titleColor="white" contentColor="white" titleAlign="center">
                                <InfoCard.Header>Hire the best candidate in half the time</InfoCard.Header>
                                <InfoCard.Body>Create a job post in minutes to tap into a network of over 770 million professionals. Share that you're hiring, with your network and beyond.</InfoCard.Body>
                            </InfoCard>
                        </FlexBox>
                        <FlexBox style={{paddingTop:'50px'}}>
                            <Button variant='outlined' >Sign Up & Get Started</Button>
                        </FlexBox>
                    </FlexBox>
                </Section>
                <Section>
                    <FlexBox flexDirection='column'>
                        <Headline>Take your career or business to new heights.</Headline>
                        <FlexBox align='flex-start' justify='space-between'>
                            <InfoCard icon={<JobOpportunitieIcon color={AppColors['purple'].secondry} width='64px' height='64px' />} width="25%" titleSize="md" titleAlign="center" titleVariant='h2' titleColor="black" contentSize="md" contentAlign="center">
                                <InfoCard.Header>Find opportunities for every stage of your freelance career</InfoCard.Header>
                                <InfoCard.Body>Create a job post in minutes to tap into a network of over 770 million professionals. Share that you're hiring, with your network and beyond</InfoCard.Body>
                            </InfoCard>
                            <InfoCard icon={<CodingIcon color={AppColors['purple'].secondry} width='64px' height='64px' />} width="25%" titleSize="md" titleAlign="center" titleVariant='h2' titleColor="black" contentSize="md" contentAlign="center">
                                <InfoCard.Header>Take tests, improve your skills and increase your chances to get the best job</InfoCard.Header>
                                <InfoCard.Body>Create a job post in minutes to tap into a network of over 770 million professionals. Share that you're hiring, with your network and beyond.</InfoCard.Body>
                            </InfoCard>
                            <InfoCard icon={<JoinCompanyIcon color={AppColors['purple'].secondry} width='64px' height='64px' />} width="25%" titleSize="md" titleAlign="center" titleVariant='h2' titleColor="black" contentSize="md" contentAlign="center">
                                <InfoCard.Header>Join the best companies in the world</InfoCard.Header>
                                <InfoCard.Body>Create a job post in minutes to tap into a network of over 770 million professionals. Share that you're hiring, with your network and beyond.</InfoCard.Body>
                            </InfoCard>
                        </FlexBox>
                        <FlexBox style={{paddingTop:'50px'}}>
                            <Button>Join US & Start Coding</Button>
                        </FlexBox>
                    </FlexBox>
                </Section>
                
                <SectionWithBg>
                    <FlexBox style={{marginTop:'50px'}} flexDirection='column'>
                        <FlexBox  width='100%'>
                            <CarouselCard width='100%'>
                                <CarouselCard.Item>
                                    <CarouselCard.Item.Title>Navarro reduces time to hire by 50%</CarouselCard.Item.Title>
                                    <CarouselCard.Item.Description>We’ve been filling positions a lot faster because our managers are now involved in the hiring process. So far we’ve made 150 hires in 6 months and we’ve reduced our time to hire from 50 days to 26.</CarouselCard.Item.Description>
                                    <CarouselCard.Item.Avatar>
                                        <AvatarCard src='assets/avatar1.JPG' imgSize={80} >
                                            <AvatarCard.Title  >Lisa Lisbon+</AvatarCard.Title>
                                            <AvatarCard.Content>Product manager & humain ressouces requricter</AvatarCard.Content>
                                        </AvatarCard>
                                    </CarouselCard.Item.Avatar>
                                </CarouselCard.Item>
                                <CarouselCard.Item>
                                    <CarouselCard.Item.Title>JOEY Restaurants cuts agency spend by 75%</CarouselCard.Item.Title>
                                    <CarouselCard.Item.Description>With the insights we can gather using Workable, we’re able to reduce our dependence on external recruitment agencies to just one or two specialty roles a year.</CarouselCard.Item.Description>
                                    <CarouselCard.Item.Avatar>
                                        <AvatarCard src='assets/avatar2.JPG' imgSize={80} >
                                            <AvatarCard.Title  >Kelsey Bleakney</AvatarCard.Title>
                                            <AvatarCard.Content>Product manager & humain ressouces requricter</AvatarCard.Content>
                                        </AvatarCard>
                                    </CarouselCard.Item.Avatar>
                                </CarouselCard.Item>
                            </CarouselCard>
                            <FlexBox style={{marginLeft:'30px'}} width='65%'  flexDirection='column' align='flex-start'>
                                <Headline color='white' size='sm'>Platform Where greate companies hire best talents</Headline>
                                <p style={{fontSize:'18px',margin:'0px',color:'white'}}>Since 2012, the world’s best companies have depended on Workable to find and hire the people they depend on.</p>
                                <FlexBox align='flex-start' flexDirection="column">
                                    <AvatarCard icon={<BusinessGroupIcon color={AppColors['purple'].third} />} >
                                        <AvatarCard.Title size='lg' color='white'>200K+</AvatarCard.Title>
                                        <AvatarCard.Content size='lg' color='white' marginTop='0px'><strong>Companies</strong></AvatarCard.Content>
                                    </AvatarCard>
                                    <AvatarCard icon={<WorkerIcon color={AppColors['purple'].third} />}>
                                        <AvatarCard.Title size='lg' color='white'>80M+</AvatarCard.Title>
                                        <AvatarCard.Content size='lg' color='white' marginTop='0px'><strong>Candidates</strong></AvatarCard.Content>
                                    </AvatarCard>
                                    <AvatarCard icon={<HireIcon color={AppColors['purple'].third}/>}>
                                        <AvatarCard.Title size='lg' color='white'>20M+</AvatarCard.Title>
                                        <AvatarCard.Content size='lg' color='white'marginTop='0px'><strong>Hires</strong></AvatarCard.Content>
                                    </AvatarCard>
                                    <AvatarCard icon={<TestCheatingIcon color={AppColors['purple'].third}/>}>
                                        <AvatarCard.Title size='lg' color='white'>150M+</AvatarCard.Title>
                                        <AvatarCard.Content size='lg' color='white' marginTop='0px'><strong>Assesments</strong></AvatarCard.Content>
                                    </AvatarCard>
                                </FlexBox>
                            </FlexBox> 
                        </FlexBox>
                        
                    </FlexBox>
                </SectionWithBg>
                <Section>
                    <FlexBox style={{background:'white'}}   flexDirection='column'>
                            <Headline size='xs'> Trusted by Leading Companies</Headline>
                            <FlexBox width='100%' justify='space-between'>
                                <Icon src='assets/comp/clevertech.jpg' width='100px' />
                                <Icon src='assets/comp/compliancemate.jpg' width='100px'/>
                                <Icon src='assets/comp/deon.jpg' width='100px'/>
                                <Icon src='assets/comp/jls-trading-co.jpg' width='100px'/>
                                <Icon src='assets/comp/machinio.jpg' width='100px'/>
                                <Icon src='assets/comp/vendo.jpg' width='100px'/>
                            </FlexBox>
                    </FlexBox>
                </Section>
                <Section>
                    <Headline textAlign='center'>What people say about us</Headline>
                    <CarouselAvatar>
                        <CarouselAvatar.Item titleSize='lg' contentSize='md' index={0} order={0} src='assets/dev1.jpg' >
                            <CarouselAvatar.Item.Title>Asma KHEDRI</CarouselAvatar.Item.Title>
                            <CarouselAvatar.Item.Content>We’ve been filling positions a lot faster because our managers are now involved in the hiring process. So far we’ve made 150 hires in 6 months and we’ve reduced our time to hire from 50 days to 26.</CarouselAvatar.Item.Content>
                        </CarouselAvatar.Item>
                        <CarouselAvatar.Item titleSize='lg' contentSize='md' index={1} order={1} src='assets/dev2.jpg'>
                                <CarouselAvatar.Item.Title>Taki KHEDRI</CarouselAvatar.Item.Title>
                                <CarouselAvatar.Item.Content>Create a job post in minutes to tap into a network of over 770 million professionals. Share that you're hiring, with your network and beyond.</CarouselAvatar.Item.Content>
                        </CarouselAvatar.Item>
                        <CarouselAvatar.Item titleSize='lg' contentSize='md' index={2} order={2} src='assets/dev3.jpg'>
                                <CarouselAvatar.Item.Title>Zino KHEDRI</CarouselAvatar.Item.Title>
                                <CarouselAvatar.Item.Content>Create a job post in minutes to tap into a network of over 770 million professionals. Share that you're hiring, with your network and beyond.</CarouselAvatar.Item.Content>
                        </CarouselAvatar.Item>
                    </CarouselAvatar>
                </Section>
                <Footer />
            </>
        )
    }
}

export default HomeView