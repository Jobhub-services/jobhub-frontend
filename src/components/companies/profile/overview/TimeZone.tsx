import { FlexBox } from 'staak-ui';
import { SpanTitle, SData, SSpan } from '@/components/companies/profile/common/common.style';
import { useAppSelector } from '@/utils/appHooks';

const TimeZone = () => {
	const { timezone } = useAppSelector((state) => state.companyProfile.profile);
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Time Zone</SpanTitle>
			</FlexBox>
			{timezone?.name && timezone?.name !== '' ? (
				<SData className="mt-10">{timezone?.name}</SData>
			) : (
				<SSpan className="mt-10">Set your time zone to have talents call you at your work time</SSpan>
			)}
		</div>
	);
};

export default TimeZone;
