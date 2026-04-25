import { SSpan } from '@/components/companies/profile/common/common.style';
import { FlexBox, Tag } from 'staak-ui';
import { TProfileInfo } from '@/types/company/profile.type';
import styled from 'styled-components';

const TagWrapper = styled(FlexBox)`
	gap: 15px !important;
	flex-wrap: wrap-reverse;
	justify-content: flex-start !important;
`;
const KeywordsElem = (props: TProfileInfo) => {
	const { keywords } = props;
	return (
		<TagWrapper className="mt-15">
			{keywords?.length! > 0 ? (
				keywords?.map((elem, idx) => {
					return (
						<Tag key={idx} value={elem}>
							{elem}
						</Tag>
					);
				})
			) : (
				<SSpan>Add keywords to help job seekers easily find your startups</SSpan>
			)}
		</TagWrapper>
	);
};

export default KeywordsElem;
