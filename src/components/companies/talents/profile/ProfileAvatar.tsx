import { colors } from '@/assets/theme';
import { AvatarProps } from '@/models/component/companies/common.interface';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const ImgCover = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	height: 100px;
	border-radius: 40%;
	border: 2px solid ${colors.PURPLE_4};
`;
const STitle = styled.h2`
	margin: 0;
	font-size: 18px;
	color: ${colors.BLUE_DARK_4};
`;
const SImg = styled.img`
	border-radius: 40%;
`;
const SText = styled.div``;

const SSpan = styled.span`
	display: block;
	color: ${colors.BLACK_7};
	margin-top: 5px;
`;
const ProfileAvatar = ({ img, name, role }: AvatarProps) => {
	return (
		<FlexBox justify="start" gap={15}>
			<ImgCover>
				<SImg src={img} alt={img} width={90} height={90} />
			</ImgCover>
			<SText className="mt-5">
				<STitle>{name}</STitle>
				<SSpan>{role}</SSpan>
				<SSpan>4 Years of experience</SSpan>
			</SText>
		</FlexBox>
	);
};

export default ProfileAvatar;
