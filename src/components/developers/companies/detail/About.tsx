import { colors } from '@/assets/theme';
import { useState } from 'react';
import { FlexBox } from 'staak-ui';
import { PCompanyCard } from '@/models/component/developer/company.interface';
import { STitle } from '@/components/developers/companies/detail/common.style';
import styled from 'styled-components';

const SAboutUs = styled.pre<any>`
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
const About = ({ about }: PCompanyCard) => {
	const [allText, setAllText] = useState(false);
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<STitle>About</STitle>
			</FlexBox>
			<SAboutUs allText={allText}>{about}</SAboutUs>
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

export default About;
