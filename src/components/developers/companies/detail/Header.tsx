import { colors } from '@/assets/theme';
import { CloseIcon, FlexBox, IconButton } from 'staak-ui';
import { PCompanyCard } from '@/models/component/developer/company.interface';
import Avatar from '@/components/developers/companies/detail/Avatar';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SContainer = styled(FlexBox)`
	padding: 15px 20px 25px 20px;
	border-bottom: 1px solid ${colors.BLACK_11};
`;

const Header = ({ avatar, companyName, _id, generalinfo }: PCompanyCard) => {
	const navigate = useNavigate();

	const onClose = () => {
		navigate(-1);
	};

	return (
		<SContainer gap={10} justify="space-between">
			<Avatar _id={_id} avatar={avatar} companyName={companyName} generalinfo={generalinfo} />
			<IconButton width="30px" height="30px" circle onClick={onClose}>
				<CloseIcon color={colors.BLACK_8} />
			</IconButton>
		</SContainer>
	);
};

export const COMPANY_HEADER_HEIGHT = 130;
export default Header;
