import { FlexBox } from 'staak-ui';
import { SpanTitle, SData } from '@/components/companies/profile/common/common.style';
import { useAppSelector } from '@/utils/appHooks';

const TimeZone = () => {
	const { timezone } = useAppSelector((state) => state.companyProfile.profile);
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Time zone</SpanTitle>
			</FlexBox>
			<SData className="mt-10">{timezone?.name}</SData>
		</div>
	);
};

export default TimeZone;
