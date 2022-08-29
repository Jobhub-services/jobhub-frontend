import { IconDropDown, AvatarDropDown } from '@/components/common/dropdown';
import { useAppSelector } from '@/utils/appHooks';
import { Link, useNavigate } from 'react-router-dom';
import { FlexBox, SearchInput } from 'staak-ui';
import StaakLogo from '@/assets/theme/StaakLogo';
import { VariantType } from '@/models/theme/staakLogo.interface';
import styled from 'styled-components';

const SLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const DeveloperHeader = () => {
	const { username, avatar } = useAppSelector(({ user }) => user.userInfo);
	const navigate = useNavigate();
	const handleItem = (event?: React.SyntheticEvent, value?: string) => {
		if (value === 'profile') navigate(`profile/${username}`);
		if (value === 'settings') navigate(`/settings/account`);
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
				{/*<SearchInput placeholder="Search jobs" width="350px" />*/}
			</FlexBox>
			<FlexBox justify="space-between">
				<FlexBox justify="space-between" gap={20}>
					{/*<IconDropDown />*/}
					<AvatarDropDown onClick={handleItem} avatar={avatar} />
				</FlexBox>
			</FlexBox>
		</>
	);
};

export default DeveloperHeader;
