import { colors } from '@/assets/theme';
import { Button, FlexBox } from 'staak-ui';
import styled from 'styled-components';
import emptyData from '@/assets/icons/emptyData.png';
import { Link } from 'react-router-dom';

const SContainer = styled.div`
	background: white;
	box-shadow: 0px 0px 20px -15px ${colors.BLACK_7};
	border-radius: 8px;
	width: 60%;
	padding: 15px 20px;
`;

const SH4 = styled.h4`
	margin: 0;
`;
const SSpan = styled.span`
	color: ${colors.BLACK_8};
`;
const SDiv = styled.div`
	margin: 20px 0 5px 0;
`;
const TalentRecommendation = () => {
	return (
		<SContainer className="mt-20">
			<div>
				<SH4>Recommended Talents</SH4>
				<SSpan>Recommended talents based on your search history</SSpan>
			</div>
			<FlexBox flexDirection="column">
				<SDiv>
					<img src={emptyData} alt="Empty" width={250} height={250} />
					<SH4>Talent recommendation will appear here.</SH4>
				</SDiv>
				<Link to="talents">
					<Button className="mt-20">Browse talent</Button>
				</Link>
			</FlexBox>
		</SContainer>
	);
};

export default TalentRecommendation;
