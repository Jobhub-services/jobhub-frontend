import LeftArrowIcon from '@/assets/icons/LeftArrowIcon';
import { colors } from '@/assets/theme';
import ApplicationCard from '@/components/developers/applications/ApplicationCard';
import Google from '@/assets/icons/google.jpg';
import { useAppSelector } from '@/utils/appHooks';
import { Link } from 'react-router-dom';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
import { useEffect } from 'react';
import { applicationActions } from '@/modules/actions/developer/application.actions';

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
	color: ${colors.PURPLE_BASE};
`;
const SIcon = styled.span`
	display: flex;
	transform: rotate(180deg);
`;
const ApplicationList = () => {
	const { applicationInfo } = useAppSelector((state) => state.talentApplications);
	useEffect(() => {
		if (!applicationInfo?.content || applicationInfo?.content?.length === 0) applicationActions.getApplications(false);
	}, []);
	return (
		<SContainer className="mt-20">
			<SH4>Recent applications</SH4>
			{applicationInfo?.content?.slice(0, 3).map((elem, idx) => {
				return (
					<>
						<ApplicationCard
							style={{ boxShadow: 'none', border: `1px solid ${colors.BLACK_12}`, marginTop: '20px' }}
							key={idx}
							_id={elem._id}
							avatar={Google}
							jobId={elem.jobId}
							createdAt={elem.createdAt}
							company={elem.company}
							status={elem.status}
							motivation={elem.motivation}
						/>
					</>
				);
			})}

			{applicationInfo?.content?.length! > 3 && (
				<div className="mt-20">
					<Link to="applications">
						<FlexBox gap={10} style={{ cursor: 'pointer' }}>
							<SSpan>See all applications</SSpan>
							<SIcon>
								<LeftArrowIcon color={colors.PURPLE_BASE} />
							</SIcon>
						</FlexBox>
					</Link>
				</div>
			)}
		</SContainer>
	);
};

export default ApplicationList;
