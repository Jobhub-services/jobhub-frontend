import { colors } from '@/assets/theme';
import { LanguagesType } from '@/types/developer/profile.type';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const Dash = styled.span`
	display: inline-block;
	width: 6px;
	height: 3px;
	background-color: ${colors.BLUE_DARK_4};
`;
const SSpan = styled.span`
	font-weight: 500;
	color: ${colors.BLACK_9};
`;
const SubTitle = styled.span`
	font-weight: 500;
	color: ${colors.BLACK_5};
`;

const LanguageElem = ({ language, level, width }: LanguagesType & { width: string }) => {
	return (
		<FlexBox justify="start" gap={5} width={width}>
			<SubTitle>
				{language?.name} ({language?.code}){' '}
			</SubTitle>
			<Dash></Dash>
			<SSpan>{level}</SSpan>
		</FlexBox>
	);
};
LanguageElem.defaultProps = {
	width: '100%',
};
export default LanguageElem;
