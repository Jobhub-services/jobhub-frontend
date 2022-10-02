import { SpanTitle } from '@/components/companies/profile/common/common.style';
import DivisionElem from '@/components/companies/profile/common/DivisionElem';
import { FlexBox } from 'staak-ui';

const Division = () => {
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Company Divisions</SpanTitle>
			</FlexBox>
			<DivisionElem />
		</div>
	);
};

export default Division;
