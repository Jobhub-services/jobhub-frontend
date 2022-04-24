import { FlexBox } from 'staak-ui';
import { colors } from '@/assets/theme';
import styled from 'styled-components';
import { ITitleIcon } from '@/models/component';

const SubTitle = styled.h2`
	margin: 5px 0;
	font-size: 16px;
	color: ${colors.BLACK_5};
`;
const TitleIcon = ({ title, icon, children }: ITitleIcon) => {
	const Icon = icon as React.FunctionComponent<any>;
	return (
		<FlexBox gap={10} justify="start">
			<Icon color={colors.BLACK_5} />
			<SubTitle>{title}</SubTitle>
		</FlexBox>
	);
};

export default TitleIcon;
