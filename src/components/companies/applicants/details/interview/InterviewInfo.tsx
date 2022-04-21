import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { Button, FlexBox, Tag } from 'staak-ui';
import { ArrowDownIcon } from 'staak-ui';
import InterviewForm from './InterviewForm';
import { useState } from 'react';
import { InterviewInfoProps } from '@/models/component/companies/applications/applications.interface';
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
const Container = styled.div<any>`
	height: ${(props) => (props.expand ? '515px' : '0')};
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
const InterviewInfo = (props: InterviewInfoProps) => {
	const [expand, setExpand] = useState(false);
	return (
		<>
			<tr>
				<STd>{props.title}</STd>
				<STd>{props.date}</STd>
				<STd>{props.location}</STd>
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
						<InterviewForm />
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
