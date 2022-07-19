import { SpanTitle, SSpan } from '@/components/developers/profile/common';
import { useAppSelector } from '@/utils/appHooks';
import { FlexBox, Tag } from 'staak-ui';
import styled from 'styled-components';

const TagWrapper = styled(FlexBox)`
	gap: 15px !important;
	flex-wrap: wrap;
	justify-content: flex-start !important;
`;
const DesiredLocation = () => {
	const { desired_location } = useAppSelector((state) => state.developerProfile.profile);
	return (
		<div>
			<FlexBox justify="space-between">
				<SpanTitle>Desired location</SpanTitle>
			</FlexBox>
			<TagWrapper className="mt-10">
				{desired_location?.length === 0 ? (
					<SSpan>Add locations where you are interesting to work</SSpan>
				) : (
					desired_location?.map((elem, idx) => {
						return (
							<Tag key={idx} value={elem._id}>
								{elem.name}
							</Tag>
						);
					})
				)}
			</TagWrapper>
		</div>
	);
};

export default DesiredLocation;
