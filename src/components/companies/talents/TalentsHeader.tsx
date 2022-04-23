import { Button, FlexBox } from 'staak-ui';
import { useAppSelector } from '@/utils/appHooks';
import { talentsActions } from '@/modules/actions/company/talents.actions';
import { FilterIcon } from '@/assets/icons';

const TalentsHeader = () => {
	const { filterClosed } = useAppSelector((state) => state.talent);
	return (
		<FlexBox justify="end" style={{ padding: '10px 40px' }}>
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
