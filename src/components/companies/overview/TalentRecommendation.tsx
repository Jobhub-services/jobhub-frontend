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

const TalentRecommendation = () => {
	return (
		<SContainer className="mt-20">
			<div>
				<SH4>Recommended Talents</SH4>
				<SSpan>Recommended talents based on your historic search</SSpan>
			</div>
			<FlexBox flexDirection="column">
				<img src={emptyData} alt="Empty" width={400} height={400} />
				<SH4>We have no talent recommendations yet.</SH4>
				<Link to="talents">
					<Button className="mt-20">Browse talent</Button>
				</Link>
			</FlexBox>
		</SContainer>
	);
};

export default TalentRecommendation;
