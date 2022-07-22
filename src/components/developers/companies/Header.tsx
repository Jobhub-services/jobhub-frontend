import { FilterIcon } from '@/assets/icons';
import { companiesActions } from '@/modules/actions/developer/companies.actions';
import { useAppSelector } from '@/utils/appHooks';
import { Headline, FlexBox, Button } from 'staak-ui';

const Header = () => {
	const { filterClosed, companies } = useAppSelector((state) => state.companies);
	return (
		<FlexBox justify="space-between">
			<Headline variant="h2" size="sm">
				{companies?.count ?? 0} Companies
			</Headline>
			<FlexBox gap={15}>
				<Button
					startIcon={<FilterIcon />}
					onClick={() => {
						companiesActions.setClosedFilter(!filterClosed);
					}}
				>
					Filter
				</Button>
			</FlexBox>
		</FlexBox>
	);
};

export default Header;
