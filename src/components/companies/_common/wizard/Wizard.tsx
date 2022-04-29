import { WizardProps } from '@/models/component';
import { FlexBox } from 'staak-ui';
import styled, { css } from 'styled-components';
import Colors from 'staak-ui/lib/esm/styles/colors.module.scss';

const StyledUl = styled.ul<WizardProps>`
	${(props) =>
		props.direction === 'horizontal' &&
		css`
			display: flex;
			align-items: center;
		`}
	list-style-type: none;
	padding-inline-start: 0px;
`;
const StyledSpan = styled.span<WizardProps>`
	display: inline-block;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: white;
	${(props) =>
		props.valid &&
		!props.active &&
		css`
			display: inline-block;
			position: absolute;
			left: 9px;
			top: 5px;
			width: 7px;
			height: 12px;
			border: solid white;
			border-width: 0 3px 3px 0;
			-webkit-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			transform: rotate(45deg);
			border-radius: unset;
			background-color: transparent; ;
		`}
`;
const StyledContainer = styled.div`
	position: relative;
`;
const LineDiv = styled.li<WizardProps>`
	cursor: pointer;
	margin-top: ${(props) => (props.direction === 'vertical' ? '150px' : '0')};
	margin-left: ${(props) => (props.direction === 'horizontal' ? '80px' : '0')};
	&:first-child {
		margin-top: 0px;
		margin-left: 0px;
	}
	${(props) =>
		props.direction === 'vertical' &&
		css<WizardProps>`
			&:after {
				content: '';
				position: absolute;
				box-shadow: 0px 0px 0px 0px black;
				border-left: ${(props) => (props.valid ? '2px' : '1px')} solid ${(props) => (props.valid ? Colors.PURPLE_2 : Colors.BLACK_11)};
				height: 145px;
				margin-top: 3px;
				left: 13px;
			}
			&:last-child:after {
				content: none;
			}
		`}
`;
const StyledContent = styled.span`
	padding-left: 5px;
`;
const StyledDiv = styled.div<WizardProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 25px;
	height: 25px;
	background: ${Colors.PURPLE_2};
	border-radius: 50%;
	position: relative;
	transition-duration: 0.3s;
	${(props) =>
		!props.active &&
		!props.valid &&
		css`
			background: ${Colors.BLACK_9};
		`}
	${LineDiv}:hover & {
		box-shadow: 0px 0px 5px 5px ${Colors.PURPLE_3};
	}
	${(props) =>
		props.direction === 'horizontal' &&
		css<WizardProps>`
			&:after {
				content: '';
				position: absolute;
				box-shadow: 0px 0px 0px 0px black;
				border-top: ${(props) => (props.valid ? '2px' : '1px')} solid ${(props) => (props.valid ? Colors.PURPLE_2 : Colors.BLACK_11)};
				width: 115px;
				left: 33px;
				top: 14px;
			}
			${LineDiv}:last-child &:after {
				content: none;
			}
		`};
`;
const StepProgress = (props: WizardProps) => {
	function selectStep(event: React.SyntheticEvent, step: number) {
		if (props.onSelectStep) props.onSelectStep(event, step);
	}
	return (
		<StyledContainer style={props.style}>
			<StyledUl direction={props.direction}>
				{props.items?.map((elem, index) => {
					return (
						<LineDiv key={index} valid={elem.valid} direction={props.direction} onClick={(event) => selectStep(event, index)}>
							<FlexBox flexDirection={props.direction === 'horizontal' ? 'column' : 'row'} justify="flex-start">
								<StyledDiv direction={props.direction} active={elem.active} valid={elem.valid}>
									<StyledSpan valid={elem.valid} active={elem.active} />
								</StyledDiv>
								<StyledContent>{elem.name}</StyledContent>
							</FlexBox>
						</LineDiv>
					);
				})}
			</StyledUl>
		</StyledContainer>
	);
};
StepProgress.defaultProps = {
	direction: 'vertical',
};
export default StepProgress;
