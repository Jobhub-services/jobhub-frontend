import { colors } from '@/assets/theme';
import { useAppSelector } from '@/utils/appHooks';
import { SpanTitle } from '@/components/developers/profile/common';
import { useState } from 'react';
import styled from 'styled-components';
import { FlexBox } from 'staak-ui';

const SSummary = styled.pre<any>`
	display: -webkit-box;
	margin: 5px 0;
	font-family: inherit;
	-webkit-line-clamp: ${(props) => (props.allText ? 'none' : 6)};
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;

const Small = styled.span`
	font-weight: 600;
	color: ${colors.PURPLE_BASE};
	cursor: pointer;
`;
const SSpan = styled.span`
	display: inline-block;
	color: ${colors.BLACK_9};
`;

const Summary = () => {
	const { summary } = useAppSelector((state) => state.developerProfile.profile);
	const [allText, setAllText] = useState(false);
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Summary</SpanTitle>
			</FlexBox>
			{summary && summary !== '' ? (
				<>
					<SSummary allText={allText}>{summary}</SSummary>
					<Small
						onClick={() => {
							setAllText(!allText);
						}}
					>
						{allText ? 'Less' : 'More'}
					</Small>
				</>
			) : (
				<SSpan className="mt-10">Tell us about yourself so startups know who you are</SSpan>
			)}
		</div>
	);
};

export default Summary;
