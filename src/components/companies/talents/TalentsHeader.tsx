import { Button, FlexBox } from 'staak-ui';
import { useAppSelector } from '@/utils/appHooks';
import { talentsActions } from '@/modules/actions/company/talents.actions';
import { FilterIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import styled from 'styled-components';
const SH1 = styled.h1`
	color: ${colors.PURPLE_BASE};
	margin: 5px 0;
	font-size: 24px;
`;
const TalentsHeader = () => {
	const { filterClosed, showTalents } = useAppSelector((state) => state.talent);
	return (
		<FlexBox justify="space-between" style={{ padding: '10px 40px' }}>
			<SH1>{showTalents?.count ?? 0} Talents</SH1>
			<Button
				startIcon={<FilterIcon />}
				onClick={() => {
					talentsActions.setClosedFilter(!filterClosed);
				}}
			>
				Filter
			</Button>
		</FlexBox>
	);
};

export default TalentsHeader;
