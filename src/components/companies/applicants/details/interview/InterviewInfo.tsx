import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { Button, FlexBox, Tag } from 'staak-ui';
import { ArrowDownIcon } from 'staak-ui';
import InterviewForm from './InterviewForm';
import { useEffect, useState } from 'react';
import { InterviewFormProps } from '@/models/component/companies/interview/interview.interface';
import { InterviewStatus } from '@/types/company/interview.type';
import { interviewActions } from '@/modules/actions/company/interview.action';
import { useAppSelector } from '@/utils/appHooks';
import { LoadingScreen } from '@/components/common/LoadingScreen';

const StatusColor: { [key in InterviewStatus]: string } = {
	IN_PROGRESS: colors.YELLOW_CLEAR_4,
	PENDING: colors.BLUE_CLEAR_4,
	FINISHED: colors.GREEN_CLEAR_4,
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
	position: relative;
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
	const { applicantDetails } = useAppSelector((state) => state.applications);
	const { isLoading } = useAppSelector((state) => state.interview);
	const [localState, setLocalState] = useState<InterviewFormProps>();

	useEffect(() => {
		setLocalState(props);
	}, []);

	const handleInput = (name: string, value: string) => {
		let tmp: any = { ...localState };
		tmp[name] = value;
		setLocalState(tmp);
	};

	const handleDate = (name: string, date: Date | null) => {
		let tmp: any = { ...localState };
		tmp[name] = date;
		setLocalState(tmp);
	};

	const handlePicker = (name: string, label: string) => {
		let tmp: any = { ...localState };
		tmp[name] = label;
		setLocalState(tmp);
	};

	const [expand, setExpand] = useState(false);

	const removeInterview = () => {
		interviewActions.removeInterview(applicantDetails._id, props._id);
	};

	const onUpdate = () => {
		//const tmp: any = { ...localState };
		interviewActions.updateInterview(applicantDetails._id, props._id, localState);
	};
	return (
		<>
			<tr>
				<STd>{props?.title}</STd>
				<STd>{`${props?.startDate ? new Date(props?.startDate).toLocaleString() : 'N/A'} -\n\r ${
					props.endDate ? new Date(props.endDate).toLocaleString() : 'N/A'
				}`}</STd>
				<STd>{props?.location}</STd>
				<STd style={{ width: '30%' }}>
					<SA href={props?.link} target="_blank" rel="noreferrer">
						{props?.link}
					</SA>
				</STd>
				<STd>
					<FlexBox width="135px" gap={10} justify="space-between">
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
						{isLoading ? (
							<LoadingScreen />
						) : (
							<>
								<InterviewForm {...props} onInputChange={handleInput} onDateChange={handleDate} onPickerChange={handlePicker} />
								<FlexBox justify="start" gap={10} className="mt-15">
									<Button onClick={onUpdate}>Save</Button>
									<Button color="red" onClick={removeInterview}>
										Remove
									</Button>
								</FlexBox>
							</>
						)}
					</Container>
				</td>
			</tr>
		</>
	);
};

export default InterviewInfo;
