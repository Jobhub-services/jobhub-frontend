import { AvatarDropDown } from '@/components/common/dropdown';
import { FlexBox, Button, PlusIcon } from 'staak-ui';
import { Link, useNavigate } from 'react-router-dom';
import StaakLogo from '@/assets/theme/StaakLogo';
import { useAppSelector } from '@/utils/appHooks';
import { VariantType } from '@/models/theme/staakLogo.interface';
import styled from 'styled-components';
import { colors } from '@/assets/theme';

const SLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const CompanyHeader = () => {
	const { username, avatar } = useAppSelector(({ user }) => user.userInfo);
	const navigate = useNavigate();
	const handleItem = (event?: React.SyntheticEvent, value?: string) => {
		if (value === 'profile') navigate(`company/profile/${username}`);
		if (value === 'settings') navigate('/settings/account');
	};
	return (
		<>
			<FlexBox justify="start" gap={50}>
				<SLink to="/">
					<StaakLogo
						variant={VariantType.LIGHT}
						style={
							{
								/*paddingLeft: '15px' ,margin: '20px 0 15px 0' */
							}
						}
						size={150}
					/>
				</SLink>
				{/*<SearchInput placeholder="Search Talents" width="350px" />*/}
			</FlexBox>
			<FlexBox justify="space-between" gap={35}>
				<Button
					style={{}}
					color="white"
					iconColor={colors.PURPLE_BASE}
					startIcon={<PlusIcon />}
					onClick={(event: React.SyntheticEvent) => {
						navigate('jobs/new', { replace: true });
					}}
				>
					Create New Job
				</Button>
				<FlexBox justify="space-between" gap={20}>
					{/*<IconDropDown />*/}
					<AvatarDropDown onClick={handleItem} avatar={avatar} />
				</FlexBox>
			</FlexBox>
		</>
	);
};

export default CompanyHeader;
