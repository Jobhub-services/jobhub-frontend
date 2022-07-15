import { FlexBox, UserIcon } from 'staak-ui';
import styled from 'styled-components';
import { StatusColors } from '@/constants/company/common.constants';
import { AvatarProps } from '@/models/component/companies/common.interface';
import { colors } from '@/assets/theme';

const SAvatar = styled.div<AvatarProps>`
	border: 2px solid ${(props) => (props.color ? props.color : StatusColors[props.status!])};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 40%;
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
`;
const SubTitle = styled.span`
	display: block;
	color: ${colors.BLACK_8};
	margin-top: 2px;
	font-size: 13px;
`;
const SH3 = styled.h3`
	margin: 0;
	display: -webkit-box;
	font-family: inherit;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const SImg = styled.img`
	border-radius: 40%;
	object-fit: cover;
`;
const SSpan = styled.span`
	display: block;
	color: ${colors.BLACK_7};
	margin-top: 2px;
	font-size: 13px;
`;
const Avatar = ({ img, name, role, status, experience, size, color }: AvatarProps) => {
	return (
		<FlexBox justify="start" gap={10}>
			<SAvatar size={size! + 10} status={status} color={color}>
				{img ? <SImg src={img} alt="women" width={size} height={size} /> : <UserIcon color={colors.BLACK_10} />}
			</SAvatar>
			<div>
				<SH3>{name}</SH3>
				<SubTitle>{role}</SubTitle>
				<SSpan>{experience}</SSpan>
			</div>
		</FlexBox>
	);
};
Avatar.defaultProps = {
	size: 60,
};
export default Avatar;
