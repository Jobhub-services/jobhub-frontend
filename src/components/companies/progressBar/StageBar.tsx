import { colors } from '@/assets/theme';
import { StageBarProps } from '@/models/component';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const SBar = styled.div<any>`
	height: 7px;
	width: calc(100% / ${(props) => props.length});
	background-color: ${(props) => (props.passed ? colors.PURPLE_BASE : colors.BLACK_12)};
	margin: 0 2px;
`;
const Dot = styled.span`
	display: inline-block;
	width: 7px;
	height: 7px;
	border-radius: 50%;
	background-color: ${colors.PURPLE_BASE};
`;
const StageBar = (props: StageBarProps) => {
	return (
		<div>
			<FlexBox justify="space-between">
				<span>Stage</span>
				<FlexBox gap={5}>
					<Dot></Dot>
					<span style={{ color: `${colors.PURPLE_BASE}` }}>{props.current}</span>
				</FlexBox>
			</FlexBox>
			<FlexBox>
				{props.data.map((elem, index) => {
					return <SBar length={props.data.length} key={index} passed={elem.passed}></SBar>;
				})}
			</FlexBox>
		</div>
	);
};

const BarItem = ({ children }: StageBarProps) => <>{children}</>;

BarItem.displayName = 'Item';
StageBar.Item = BarItem;

export default StageBar;
