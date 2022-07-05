import { SpanTitle, SSpan } from '@/components/developers/profile/common';
import { useAppSelector } from '@/utils/appHooks';
import { FlexBox, Tag } from 'staak-ui';
import styled from 'styled-components';

const TagWrapper = styled(FlexBox)`
	gap: 15px !important;
	flex-wrap: wrap-reverse;
	justify-content: flex-start !important;
`;

const DesiredRoles = () => {
	const { role } = useAppSelector((state) => state.developerProfile.profile);
	return (
		<div>
			<FlexBox justify="space-between">
				<SpanTitle>Desired roles</SpanTitle>
			</FlexBox>
			<TagWrapper className="mt-10">
				{role?.other_roles?.length === 0 ? (
					<SSpan>Add skills to help startups focus on your strengths</SSpan>
				) : (
					role?.other_roles?.map((elem, idx) => {
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

export default DesiredRoles;
