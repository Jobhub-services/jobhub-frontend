import { useState } from 'react';
import { Button, FlexBox, IconButton, SimpleLink, Tag, DropDown, Radio } from 'staak-ui';
import styled from 'styled-components';
import Clock from '@/__icons__/Clock.svg';
import Location from '@/__icons__/Location.svg';
import { colors } from '@/assets/theme';
import IconUsers from '@/__icons__/IconUsers';
import IconDot from '@/__icons__/IconDot';
import Money from '@/__icons__/Money.svg';
import { StatusColors, StatusValue } from '@/constants/company/job.contants';
import { JobCardProps } from '@/models/component';
import TextAvatar from './TextAvatar';

const SWrapper = styled(FlexBox)`
	flex-wrap: wrap;
`;
const SContainer = styled.div`
	background: white;
	box-shadow: 0 0 20px 0 rgb(76 87 125 / 2%);
	border-radius: 8px;
	border: 1px solid ${colors.BLACK_12};
`;
const SBody = styled.div`
	padding: 15px 10px;
`;

const SFooter = styled(FlexBox)`
	/*background: ${colors.PURPLE_1};*/
	padding: 10px 10px !important;
	border-top: 1px solid ${colors.PURPLE_1};
`;
const SSpan = styled.span`
	font-size: 12px;
`;
const SPar = styled.p`
	height: 65px;
	overflow: hidden;
`;
const SGap = styled(FlexBox)`
	gap: ${(props) => props.gap}px;
`;

const SDot = styled.span`
	display: inline-block;
	width: 4px;
	height: 4px;
	border-radius: 50%;
	background: black;
`;

const JobCard = (props: JobCardProps) => {
	//const [status, setStatus] = useState<StatusType>('active');
	return (
		<SWrapper>
			<SContainer>
				<SBody>
					<FlexBox justify="space-between" align="flex-start">
						<TextAvatar title="Junior frontend developer" subtitle="Humain resources administration" />
						<DropDown listPosition="left">
							<DropDown.Title>
								<IconButton width="40px" height="25px">
									<IconDot />
								</IconButton>
							</DropDown.Title>
							<DropDown.Item>Show</DropDown.Item>
							<DropDown.Item>Edit</DropDown.Item>
							<DropDown.Item>Delete</DropDown.Item>
						</DropDown>
					</FlexBox>
					<SPar>
						Our Experience team is looking for a passionate Frontend Engineer to join us in creating amazing experiences for our users join us in
						creating amazing experiences for our users join us in creating amazing experiences for our users
					</SPar>
					<FlexBox justify="space-between">
						<SGap gap={10} justify="flex-start">
							<Tag color={colors.PURPLE_1}>Full-time</Tag>
							<Tag color={colors.PURPLE_3}>Permanent</Tag>
						</SGap>
						<Tag color={StatusColors[props.status!]}>{StatusValue[props.status!]}</Tag>
					</FlexBox>
					<FlexBox justify="space-between" className="mt-10">
						<div>
							<SGap gap={5} justify="flex-start">
								<img src={Money} alt="clock" width={18} height={18} />
								<SSpan>3500-4500 EUR</SSpan>
							</SGap>
							<SGap gap={5} align="flex-start" className="mt-5">
								<img src={Location} alt="clock" width={18} height={18} />
								<SGap gap={10} justify="flex-start">
									<SSpan>Remote</SSpan>
									<SGap gap={2}>
										<SSpan>Allemagne</SSpan>
										<SDot />
										<SSpan>Berlin</SSpan>
									</SGap>
									<SGap gap={2}>
										<SSpan>Italy</SSpan>
										<SDot />
										<SSpan>Rome</SSpan>
									</SGap>
								</SGap>
							</SGap>
						</div>
						<SGap gap={5}>
							<img src={Clock} alt="clock" width={18} height={18} />
							<SSpan>7 Juin 2022</SSpan>
						</SGap>
					</FlexBox>
				</SBody>
				<SFooter justify="space-between">
					<div>
						<Button variant="outlined">Details</Button>
					</div>
					<SGap gap={10} justify="flex-start">
						<IconUsers />
						<div>
							<SSpan>
								<strong>23</strong> Applicants
							</SSpan>
							<SimpleLink size="xs">View applicants</SimpleLink>
						</div>
					</SGap>
				</SFooter>
			</SContainer>
		</SWrapper>
	);
};

JobCard.defaultProps = {
	status: 'closed',
};
export default JobCard;
