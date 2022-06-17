import { SpanTitle } from '@/components/companies/profile/common/common.style';
import GeneralInfoElem from '@/components/companies/profile/common/GeneralInfoElem';
import { useAppSelector } from '@/utils/appHooks';
import { FlexBox } from 'staak-ui';

const GeneralInfo = () => {
	const { generalinfo } = useAppSelector((state) => state.companyProfile.profile);
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>General info</SpanTitle>
			</FlexBox>
			<GeneralInfoElem generalinfo={generalinfo} />
		</div>
	);
};

export default GeneralInfo;
