import styled from 'styled-components';
import Google from '@/assets/icons/google.jpg';
import { colors } from '@/assets/theme';
import { CameraIcon, CompanyIcon } from '@/assets/icons';
import { FlexBox } from 'staak-ui';
import { PProfileAvatar } from '@/models/component/companies/profile.interface';
import { SSpan, SData } from '@/components/companies/profile/common/common.style';
import { useAppSelector } from '@/utils/appHooks';
import { profileAction } from '@/modules/actions/company/profile.actions';

const SImg = styled.img`
	border-radius: 50%;
	object-fit: cover;
	width: 80px;
	height: 80px;
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
	const { headquarter, avatar } = useAppSelector((state) => state.companyProfile.profile);
	const { userInfo } = useAppSelector((state) => state.user);

	const handleAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target;
		let data = new FormData();
		data.append('avatar', files![0]!);
		profileAction.setAttribute(data, 'avatar');
	};
	return (
		<FlexBox gap={20} justify="start">
			<SContainer>
				<AvatarContainer size={80 + 10}>
					{avatar ? <SImg src={avatar} alt="company" /> : <CompanyIcon width="45px" height="45px" color={colors.BLACK_7} />}
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
				<SH2>{userInfo?.companyName?.toUpperCase()}</SH2>
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
