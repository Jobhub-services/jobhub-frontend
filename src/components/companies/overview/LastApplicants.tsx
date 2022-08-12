import LeftArrowIcon from '@/assets/icons/LeftArrowIcon';
import { colors } from '@/assets/theme';
import ApplicationCard from '@/components/companies/applicants/ApplicationCard';
import { useAppSelector } from '@/utils/appHooks';
import { Link } from 'react-router-dom';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
import { useEffect } from 'react';
import { applicationsActions } from '@/modules/actions/company/applications.actions';
import emptyData from '@/assets/icons/emptyData.png';

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

const LastApplicants = () => {
	const { showApplicants } = useAppSelector((state) => state.applications);
	useEffect(() => {
		if (!showApplicants?.content || showApplicants?.content?.length === 0) applicationsActions.getShowApplicants('NEW', false, {});
	}, []);
	return (
		<SContainer className="mt-20">
			<SH4>Recent applications</SH4>
			{showApplicants?.content?.length! > 0 ? (
				<>
					{showApplicants?.content?.slice(0, 3).map((elem, idx) => {
						return (
							<ApplicationCard
								className="mt-15"
								key={idx}
								_id={elem._id}
								avatar={elem.avatar}
								firstName={elem.firstName}
								lastName={elem.lastName}
								role={elem.role}
								motivation={elem.motivation}
								skills={elem.skills}
								createdAt={elem.createdAt}
								linkedIn={elem.linkedIn}
								git={elem.git}
								cv={elem.cv}
								status={elem.status}
								job={elem.job}
								userStatus={elem.userStatus}
							/>
						);
					})}

					{showApplicants?.content?.length! > 3 && (
						<div className="mt-20">
							<Link to="/applicants/NEW">
								<FlexBox gap={10} style={{ cursor: 'pointer' }}>
									<SSpan>See all applications</SSpan>
									<SIcon>
										<LeftArrowIcon color={colors.PURPLE_BASE} />
									</SIcon>
								</FlexBox>
							</Link>
						</div>
					)}
				</>
			) : (
				<FlexBox flexDirection="column">
					<img src={emptyData} alt="Empty" width={250} height={250} />
					<SH4>New applications will appear here.</SH4>
				</FlexBox>
			)}
		</SContainer>
	);
};

export default LastApplicants;
