import { CameraIcon } from '@/assets/icons';
import Jerome from '@/assets/icons/jerome.jpg';
import { colors } from '@/assets/theme';
import { CProfileStatus } from '@/constants/developer/profile.constants';
import { ProfileAvatarProps } from '@/models/component/developer';
import { profileAction } from '@/modules/actions/developer/profile.actions';
import { useAppSelector } from '@/utils/appHooks';
import { getGMTOffset } from '@/utils/helpers';
import { FlexBox, UserIcon } from 'staak-ui';
import styled from 'styled-components';
const SImg = styled.img`
	border-radius: 50%;
	object-fit: cover;
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
const ImgSpan = styled.label`
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
const FInput = styled.input`
	position: absolute;
	width: 0;
	height: 0;
`;
const SSapn = styled.span`
	color: ${colors.BLACK_8};
`;
const SH2 = styled.h2`
	font-size: 18px;
	margin: 5px 0;
	color: ${colors.BLACK_3};
`;
const ProfileAvatar = ({ firstname, lastname, location, size, role, experience, status, overview, avatar }: ProfileAvatarProps) => {
	const handleAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;
		let data = new FormData();
		data.append('avatar', files![0]!);
		profileAction.setAttribute(data, 'avatar');
	};
	return (
		<FlexBox gap={20} justify="start">
			<SContainer>
				<AvatarContainer size={size! + 10}>
					{avatar && avatar !== '' ? (
						<SImg src={avatar} width={size} height={size} />
					) : (
						<UserIcon width="60px" height="60px" color={colors.BLACK_10} />
					)}
				</AvatarContainer>
				{!overview && (
					<>
						<ImgSpan htmlFor="avatar">
							<CameraIcon width="20px" height="20px" />
						</ImgSpan>
						<FInput onChange={handleAvatar} type={'file'} name="resume" id="avatar" />
					</>
				)}
			</SContainer>
			<div>
				<FlexBox justify="start" gap={30}>
					<SH2>
						{firstname} {lastname}
					</SH2>
					{status && (
						<FlexBox justify="start" gap={10}>
							{CProfileStatus[status!].icon}
							<span>{CProfileStatus[status!].value}</span>
						</FlexBox>
					)}
				</FlexBox>

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
