import { CameraIcon } from '@/assets/icons';
import Jerome from '@/assets/icons/jerome.jpg';
import { colors } from '@/assets/theme';
import { ProfileAvatarProps } from '@/models/component/developer';
import { getGMTOffset } from '@/utils/helpers';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
const SImg = styled.img`
	border-radius: 50%;
`;
const AvatarContainer = styled.div<any>`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid ${colors.PURPLE_3};
	width: ${(props) => props.size}px;
	height: ${(props) => props.size}px;
	&:hover ${SImg} {
		background-color: ${colors.BLACK_7};
	}
`;
const SContainer = styled.div`
	position: relative;
	width: fit-content;
`;
const ImgSpan = styled.span`
	position: absolute;
	top: 65%;
	left: 75%;
	display: flex;
	align-items: center;
	justify-content: center;
	width: fit-content;
	padding: 5px;
	background-color: ${colors.BLACK_13};
	border-radius: 50%;
	cursor: pointer;
	transition-duration: 100ms;
	&:hover {
		background-color: ${colors.BLACK_12};
	}
`;
const SSapn = styled.span`
	color: ${colors.BLACK_8};
`;
const SH2 = styled.h2`
	font-size: 18px;
	margin: 5px 0;
	color: ${colors.BLACK_3};
`;
const ProfileAvatar = ({ firstname, lastname, location, size, role, experience }: ProfileAvatarProps) => {
	return (
		<FlexBox gap={20} justify="start">
			<SContainer>
				<AvatarContainer size={size! + 10}>
					<SImg src={Jerome} width={size} height={size} />
				</AvatarContainer>
				<ImgSpan>
					<CameraIcon width="20px" height="20px" />
				</ImgSpan>
			</SContainer>
			<div>
				<SH2>
					{firstname} {lastname}
				</SH2>
				<FlexBox justify="start" gap={5}>
					{location?.country && location.country.name !== '' && (
						<FlexBox gap={10}>
							<SSapn>
								{location?.country.name}, {location?.city}
							</SSapn>
							<SSapn>{getGMTOffset()}</SSapn>
						</FlexBox>
					)}
				</FlexBox>
				{role !== '' && (
					<>
						<SSapn>{role}. </SSapn>
						{experience !== '' && <SSapn>{experience} of experience</SSapn>}
					</>
				)}
			</div>
		</FlexBox>
	);
};

ProfileAvatar.defaultProps = {
	size: 80,
	role: '',
	location: {
		country: '',
		city: '',
	},
};
export default ProfileAvatar;
