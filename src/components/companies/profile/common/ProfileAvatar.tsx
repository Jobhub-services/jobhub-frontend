import styled from 'styled-components';
import Google from '@/assets/icons/google.jpg';
import { colors } from '@/assets/theme';
import { CameraIcon } from '@/assets/icons';
import { FlexBox } from 'staak-ui';
import { PProfileAvatar } from '@/models/component/companies/profile.interface';
import { SSpan, SData } from '@/components/companies/profile/common/common.style';
import { useAppSelector } from '@/utils/appHooks';

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
const SH2 = styled.h2`
	font-size: 18px;
	margin: 5px 0;
	color: ${colors.BLACK_3};
`;
const ProfileAvatar = ({ overview }: PProfileAvatar) => {
	const { headquarter, generalinfo } = useAppSelector((state) => state.companyProfile.profile);
	const { email } = useAppSelector((state) => state.user.userInfo);
	const cmp_name = email?.split('@')[1].split('.')[0];

	const handleAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {};
	return (
		<FlexBox gap={20} justify="start">
			<SContainer>
				<AvatarContainer size={80 + 10}>
					<SImg src={Google} alt="avatar" width={80} height={80} />
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
				<SH2>{generalinfo?.company_name ? generalinfo?.company_name : cmp_name?.toUpperCase()}</SH2>
				{overview ? (
					<FlexBox flexDirection="column" gap={5} align="start">
						{headquarter?.street !== '' && <SData>{headquarter?.street}</SData>}
						<SData>
							{headquarter?.city ? `${headquarter?.city},` : ''} {headquarter?.country ? `${headquarter?.country.name}.` : ''}
						</SData>
					</FlexBox>
				) : (
					<SSpan style={{ width: '75%' }}>Click on the camera icon to upload your company logo</SSpan>
				)}
			</div>
		</FlexBox>
	);
};
ProfileAvatar.defaultProps = {
	oveview: false,
};

export default ProfileAvatar;
