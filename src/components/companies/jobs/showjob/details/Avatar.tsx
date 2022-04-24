import { colors } from '@/assets/theme';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
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
	/* Position the tooltip text - see examples below! */
	width: max-content;
	position: absolute;
	z-index: 1;
`;
const SAvatar = styled.span`
	position: relative;
	margin-left: -20px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 47px;
	height: 47px;
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
`;
const STotal = styled.span`
	display: flex;
	width: 40px;
	height: 40px;
	font-weight: 500;
	color: ${colors.BLACK_5};
	background-color: ${colors.BLACK_12};
	border-radius: 50%;
	align-items: center;
	justify-content: center;
`;
const Avatar = ({ img, totalAvatar }: any) => {
	return (
		<FlexBox justify="start">
			{img.map((elem: string, index: number) => {
				return (
					<SAvatar key={index}>
						<SImg src={elem} alt={elem} width={40} height={40} />
					</SAvatar>
				);
			})}
			{totalAvatar > 4 && (
				<SAvatar>
					<STotal>+{totalAvatar}</STotal>
					<SToolTip>Total number of apllicants is {totalAvatar}</SToolTip>
				</SAvatar>
			)}
		</FlexBox>
	);
};

export default Avatar;
