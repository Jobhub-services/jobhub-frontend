import { colors } from '@/assets/theme';
import React from 'react';
import { FlexBox, UserIcon } from 'staak-ui';
import styled from 'styled-components';

const SFlexBox = styled(FlexBox)`
	cursor: pointer;
`;
const SToolTip = styled.span`
	visibility: hidden;
	background-color: ${colors.BLACK_3};
	color: #fff;
	text-align: center;
	padding: 5px 10px;
	border-radius: 6px;
	transition-property: visibility;
	transition-duration: 0.4s;
	font-size: 12px;
	top: 100%;
	right: 0;
	/* Position the tooltip text - see examples below! */
	width: max-content;
	position: absolute;
	z-index: 1;
`;
const SAvatar = styled.span<any>`
	position: relative;
	margin-left: -20px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	border-radius: 50%;
	background: white;
	&:first-child {
		margin-left: 0;
	}
	/* Show the tooltip text when you mouse over the tooltip container */
	transition-duration: 0.2s;
	&:hover ${SToolTip} {
		visibility: visible;
	}
`;

const SImg = styled.img`
	border-radius: 50%;
	object-fit: cover;
`;

const ContainerIcon = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	border-radius: 50%;
`;
const STotal = styled.span<any>`
	cursor: pointer;
	font-size: 12px;
	display: flex;
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	font-weight: 500;
	color: ${colors.BLACK_5};
	background-color: ${colors.BLACK_12};
	border-radius: 50%;
	align-items: center;
	justify-content: center;
`;
const AvatarList = ({ img, totalAvatar, size, onClick }: any) => {
	function handleClick(event: React.SyntheticEvent) {
		if (onClick) onClick();
	}
	return (
		<SFlexBox justify="start">
			{img?.map((elem: string, index: number) => {
				return (
					<SAvatar size={size + 7} key={index}>
						{elem ? (
							<SImg src={elem} alt={'.'} width={size} height={size} />
						) : (
							<ContainerIcon>
								<UserIcon width="30px" height="30px" />
							</ContainerIcon>
						)}
					</SAvatar>
				);
			})}
			{totalAvatar > 4 && (
				<SAvatar>
					<STotal size={size}>+{totalAvatar}</STotal>
					<SToolTip onClick={handleClick}>Total number of apllicants is {totalAvatar}</SToolTip>
				</SAvatar>
			)}
		</SFlexBox>
	);
};
AvatarList.defaultProps = {
	size: 40,
};
export default AvatarList;
