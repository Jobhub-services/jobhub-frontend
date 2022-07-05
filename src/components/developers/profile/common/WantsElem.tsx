import { colors } from '@/assets/theme';
import { SpanTitle, SSpan } from '@/components/developers/profile/common';
import { useAppSelector } from '@/utils/appHooks';
import { useState } from 'react';
import styled from 'styled-components';

const SSummary = styled.pre<any>`
	display: -webkit-box;
	margin: 5px 0;
	font-family: inherit;
	-webkit-line-clamp: ${(props) => (props.allText ? 'none' : 10)};
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
const WantsElem = ({ width }: { width?: string }) => {
	const { wants } = useAppSelector((state) => state.developerProfile.profile);
	const [allText, setAllText] = useState(false);
	return (
		<div style={{ width: width }}>
			<SpanTitle>Wants</SpanTitle>
			<div className="mt-10">
				{wants && wants !== '' ? (
					<>
						<SSummary allText={allText}>{wants}</SSummary>
						<Small onClick={() => setAllText(!allText)}>{allText ? 'Less' : 'More'}</Small>
					</>
				) : (
					<SSpan>Describe what you are looking for in your next job.</SSpan>
				)}
			</div>
		</div>
	);
};

export default WantsElem;
