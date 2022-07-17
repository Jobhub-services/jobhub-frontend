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
const JobRecommendation = () => {
	return (
		<SContainer className="mt-20">
			<div>
				<SH4>Recommended Jobs</SH4>
				<SSpan>Jobs where you're a top applicant based on your profile job search</SSpan>
			</div>
			<FlexBox flexDirection="column">
				<img src={emptyData} alt="Empty" width={400} height={400} />
				<SH4>We have no job recommendations yet.</SH4>
				<Link to="jobs">
					<Button className="mt-20">Browse jobs</Button>
				</Link>
			</FlexBox>
		</SContainer>
	);
};

export default JobRecommendation;
