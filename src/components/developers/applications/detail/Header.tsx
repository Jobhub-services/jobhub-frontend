import { colors } from '@/assets/theme';
import { useAppSelector } from '@/utils/appHooks';
import { useNavigate } from 'react-router-dom';
import { CloseIcon, FlexBox, IconButton } from 'staak-ui';
import styled from 'styled-components';
import Google from '@/assets/icons/google.jpg';
import Avatar from '@/components/developers/applications/detail/Avatar';

const SContainer = styled(FlexBox)`
	padding: 15px 20px 25px 20px;
`;
const Header = () => {
	const { applicationDetails } = useAppSelector((state) => state.talentApplications);
	const navigate = useNavigate();
	const onClose = () => {
		navigate(-1);
	};
	return (
		<SContainer gap={10} justify="space-between">
			<Avatar
				img={applicationDetails?.company?.avatar}
				title={applicationDetails?.job?.title}
				subtitle={applicationDetails?.company?.companyName}
				applicationId={applicationDetails?._id!}
				createdAt={applicationDetails?.createdAt}
			/>
			<IconButton width="30px" height="30px" circle onClick={onClose}>
				<CloseIcon color={colors.BLACK_8} />
			</IconButton>
		</SContainer>
	);
};

export default Header;
