import { colors } from '@/assets/theme';
import { UserIcon } from 'staak-ui';
import styled from 'styled-components';

const SDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background-color: ${colors.GRAY_BASE};
	object-fit: cover;
	width: 100%;
	height: 100%;
`;
const ImgContainer = styled.div<any>`
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	border-radius: 50%;
`;
const SImg = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
	border-radius: 50%;
`;

const Avatar = ({ img, size }: { img?: string; size: number }) => {
	return (
		<ImgContainer size={size}>
			{img ? (
				<SImg src={img} />
			) : (
				<SDiv>
					<UserIcon color={colors.GRAY_2} width="35px" height="35px" />
				</SDiv>
			)}
		</ImgContainer>
	);
};
Avatar.defaultProps = {
	size: 60,
};
export default Avatar;
