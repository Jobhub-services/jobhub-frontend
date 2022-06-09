import { colors } from '@/assets/theme';
import { useAppSelector } from '@/utils/appHooks';
import { FlexBox, Tag } from 'staak-ui';
import styled from 'styled-components';
import { SpanTitle } from '@/components/developers/profile/common';
const SSpan = styled.span`
	display: inline-block;
	color: ${colors.BLACK_9};
`;
const TagWrapper = styled(FlexBox)`
	gap: 15px !important;
	flex-wrap: wrap;
	justify-content: flex-start !important;
`;

const Skills = () => {
	const { skills } = useAppSelector((state) => state.developerProfile.profile);
	return (
		<div>
			<FlexBox justify="space-between">
				<SpanTitle>Skills</SpanTitle>
			</FlexBox>
			<TagWrapper className="mt-10">
				{skills?.length === 0 ? (
					<SSpan>Add skills to help startups focus on your strengths</SSpan>
				) : (
					skills?.map((elem, idx) => {
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

export default Skills;
