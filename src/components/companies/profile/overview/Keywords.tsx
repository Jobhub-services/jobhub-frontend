import { SpanTitle } from '@/components/companies/profile/common/common.style';
import KeywordsElem from '@/components/companies/profile/common/KeywordsElem';
import { useAppSelector } from '@/utils/appHooks';
import { FlexBox } from 'staak-ui';

const Keywords = () => {
	const { keywords } = useAppSelector((state) => state.companyProfile.profile);
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Keywords</SpanTitle>
			</FlexBox>
			<KeywordsElem keywords={keywords} />
		</div>
	);
};

export default Keywords;
