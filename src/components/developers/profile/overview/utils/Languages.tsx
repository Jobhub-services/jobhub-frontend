import { colors } from '@/assets/theme';
import { useAppSelector } from '@/utils/appHooks';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
import { SpanTitle, LanguageElem } from '@/components/developers/profile/common';

const SSpan = styled.span`
	display: inline-block;
	margin-top: 15px;
	color: ${colors.BLACK_9};
`;

const Languages = () => {
	const { languages } = useAppSelector((state) => state.developerProfile.profile);
	return (
		<div>
			<FlexBox justify="space-between">
				<SpanTitle>Languages</SpanTitle>
			</FlexBox>
			<div>
				{languages?.length === 0 ? (
					<SSpan>Add languages you know</SSpan>
				) : (
					languages?.map((elem, idx) => {
						return (
							<FlexBox className="mt-15" justify="space-between" key={idx}>
								<LanguageElem level={elem.level} language={elem.language} />
							</FlexBox>
						);
					})
				)}
			</div>
		</div>
	);
};

export default Languages;
