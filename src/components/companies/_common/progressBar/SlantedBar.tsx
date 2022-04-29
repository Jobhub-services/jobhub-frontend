import React from 'react';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { SlantedBarProps, StandardProps } from '@/models/component';

const Slanted = styled.div<SlantedBarProps>`
	display: inline-block;
	position: relative;
	padding: 10px 20px;
	width: 20%;
	overflow: hidden;
	background-color: ${(props) => (props.active ? colors.PURPLE_BASE : colors.PURPLE_1)};
	color: ${(props) => (props.active ? 'white' : colors.PURPLE_BASE)};
	text-align: center;
	clip-path: polygon(10% 0%, 100% 0, 90% 100%, 0% 100%);
	&:first-child {
		clip-path: polygon(0% 0%, 100% 0, 90% 100%, 0% 100%);
	}
	&:last-child {
		clip-path: polygon(10% 0%, 100% 0, 90% 100%, 0% 100%);
	}
`;

const SlantedBar = (props: SlantedBarProps) => {
	const items = React.Children.map(props.children, (child) => (child?.type?.displayName === 'Item' ? child : null));
	return (
		<FlexBox justify="start">
			{items?.map((elem: any, index: number) => {
				return (
					<Slanted active={elem.props.value === props.activeItem} key={index}>
						{elem.props.children}
					</Slanted>
				);
			})}
		</FlexBox>
	);
};

const SlantedItem = (props: SlantedBarProps | StandardProps) => {
	return <>{props.children}</>;
};

SlantedItem.displayName = 'Item';
SlantedBar.Item = SlantedItem;
export default SlantedBar;
