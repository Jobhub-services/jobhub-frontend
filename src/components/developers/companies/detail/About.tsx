import { colors } from '@/assets/theme';
import { useState } from 'react';
import { FlexBox } from 'staak-ui';
import { PCompanyCard } from '@/models/component/developer/company.interface';
import { STitle, SSpan } from '@/components/developers/companies/detail/common.style';
import styled from 'styled-components';

const SAboutUs = styled.pre<any>`
	display: -webkit-box;
	margin: 0 0;
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
const About = ({ description }: PCompanyCard) => {
	const [allText, setAllText] = useState(false);
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<STitle>About</STitle>
			</FlexBox>
			{description && (
				<>
					<SAboutUs allText={allText}>{description}</SAboutUs>
					<Small
						onClick={() => {
							setAllText(!allText);
						}}
					>
						{allText ? 'Less' : 'More'}
					</Small>
				</>
			)}
			{!description && <SSpan>There is no description yet</SSpan>}
		</div>
	);
};

export default About;
