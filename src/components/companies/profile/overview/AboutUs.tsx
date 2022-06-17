import { colors } from '@/assets/theme';
import { SpanTitle } from '@/components/companies/profile/common/common.style';
import { useAppSelector } from '@/utils/appHooks';
import { useState } from 'react';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const SAboutUs = styled.pre<any>`
	display: -webkit-box;
	margin: 5px 0;
	font-family: inherit;
	-webkit-line-clamp: ${(props) => (props.allText ? 'none' : 8)};
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
const AboutUs = () => {
	const { description } = useAppSelector((state) => state.companyProfile.profile);
	const [allText, setAllText] = useState(false);
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>About Us</SpanTitle>
			</FlexBox>
			<SAboutUs allText={allText}>{description}</SAboutUs>
			<Small
				onClick={() => {
					setAllText(!allText);
				}}
			>
				{allText ? 'Less' : 'More'}
			</Small>
		</div>
	);
};

export default AboutUs;
