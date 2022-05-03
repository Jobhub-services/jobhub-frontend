import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { Button, FlexBox, Tag } from 'staak-ui';
import { ArrowDownIcon } from 'staak-ui';
import InterviewForm from './InterviewForm';
import { useState } from 'react';
import { InterviewFormProps } from '@/models/component/companies/interview/interview.interface';
import { InterviewStatus } from '@/types/applications.type';

const StatusColor: { [key in InterviewStatus]: string } = {
	'On Progress': colors.YELLOW_CLEAR_4,
	Pending: colors.BLUE_CLEAR_4,
	Finished: colors.GREEN_CLEAR_4,
};
const STd = styled.td`
	border-bottom: 1px solid ${colors.BLACK_13};
	padding: 10px 10px;
`;
const SA = styled.a`
	color: ${colors.PURPLE_BASE};
	font-size: 13px;
	white-space: break-spaces;
	word-break: break-all;
	display: inline-block;
	overflow: hidden;
	height: 40px;
`;
const Container = styled.div<any>`
	padding: 5px 20px;
	height: ${(props) => (props.expand ? '550px' : '0')};
	transition-duration: 0.3s;
	overflow: hidden;
`;
const Arrow = styled.span<any>`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transform-origin: 50% 50%;
	transition-duration: 0.3s;
	transform: rotate(${(props) => (props.expand ? '180deg' : '0deg')});
`;
const InterviewInfo = (props: InterviewFormProps) => {
	const [expand, setExpand] = useState(false);
	return (
		<>
			<tr>
				<STd>{props.title}</STd>
				<STd>{`${props.startDate?.toString().split('GMT')[0]} -\n\r ${props.endDate?.toString().split('GMT')[0]}`}</STd>
				<STd>{props.location}</STd>
				<STd style={{ width: '30%' }}>
					<SA href={props.link} target="_blank" rel="noreferrer">
						{props.link}
					</SA>
				</STd>
				<STd>
					<FlexBox width="125px" gap={10} justify="space-between">
						<Tag color={StatusColor[props.status!]}>{props.status}</Tag>
						<Arrow
							expand={expand}
							onClick={() => {
								setExpand(!expand);
							}}
						>
							<ArrowDownIcon />
						</Arrow>
					</FlexBox>
				</STd>
			</tr>
			<tr>
				<td colSpan={4}>
					<Container expand={expand}>
						<InterviewForm {...props} />
						<FlexBox justify="start" gap={10} className="mt-15">
							<Button>Save</Button>
							<Button color="red">Remove</Button>
						</FlexBox>
					</Container>
				</td>
			</tr>
		</>
	);
};

export default InterviewInfo;
