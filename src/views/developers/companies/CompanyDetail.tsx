import { EXPANDED_ASIDE_WIDTH, HEADER_HIEGHT } from '@/constants/app.constants';
import styled, { keyframes } from 'styled-components';
import { Header, About, GeneralInfo, Keywords, JobsList, COMPANY_HEADER_HEIGHT } from '@/components/developers/companies/detail';
import { FlexBox, HrDivider, TabPane, JobIcon, HealthIcon } from 'staak-ui';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useAppSelector } from '@/utils/appHooks';
import { colors } from '@/assets/theme';
import { companiesActions } from '@/modules/actions/developer/companies.actions';
import { LoadingScreen } from '@/components/common/loadings/LoadingScreen';

const kwidth = keyframes`
	from {
		width: 0;
	} 
	to{
		width: 83%;
	}
`;
const kFullWidth = keyframes`
	from {
		width: 0;
	} 
	to{
		width: 100%;
	}
`;

const jobTitle = (
	<FlexBox gap={10}>
		<JobIcon width="17px" height="17px" color={colors.PURPLE_BASE} />
		<span>Jobs</span>
	</FlexBox>
);

const overviewTitle = (
	<FlexBox gap={10}>
		<HealthIcon width="17px" height="17px" color={colors.PURPLE_BASE} />
		<span>Overview</span>
	</FlexBox>
);

const MainContainer = styled.div<any>`
	cursor: pointer;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: #2c2c2c3b;
`;
const DetailContainer = styled.div<any>`
	cursor: default;
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: ${(props) => (props.onlyDetail ? '100%' : '83%')};
	animation: ${(props) => (props.onlyDetail ? kFullWidth : kwidth)} 0.2s ease-in-out;
	//width: ${(props) => (props.showed ? '80%' : '0')};
	background: white;
`;
const MainBody = styled.div`
	height: calc(100% - ${COMPANY_HEADER_HEIGHT}px);
`;
const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;
const LeftContainer = styled.div`
	width: 23%;
	border-radius: 8px;
	padding: 10px 15px;
	height: 100%;
	overflow: auto;
`;
const RightContainer = styled.div`
	padding: 10px 15px !important;
	width: 77%;
	border-left: 1px solid ${colors.BLACK_12};
	border-radius: 8px;
	height: 100%;
`;
const SBody = styled(FlexBox)`
	align-items: flex-start !important;
	justify-content: flex-start !important;
	height: calc(100% - 62px);
`;

const CompanyDetail = () => {
	const { id } = useParams();
	const loc = useLocation();
	const { state } = loc as { state: { activeTab: string; onlyDetail: boolean } };
	const { isDetailLoading, companyDetail, isLoading } = useAppSelector((state) => state.companies);
	const onlyDetail = (state as any)?.onlyDetail ?? false;

	useEffect(() => {
		if (companyDetail?._id !== id) companiesActions.getCompanyDetail(id!, !isLoading);
	}, []);
	const parentRef = useRef(null);
	const navigate = useNavigate();
	const onClose = (e: any) => {
		if (e.target === parentRef.current) navigate(-1);
	};

	return (
		<MainContainer ref={parentRef} onClick={onClose}>
			<DetailContainer onlyDetail={onlyDetail}>
				{isDetailLoading ? (
					<LoadingScreen />
				) : (
					<SubContainer>
						<Header
							avatar={companyDetail?.avatar}
							_id={companyDetail?._id}
							companyName={companyDetail.companyName}
							generalinfo={companyDetail.generalinfo}
						/>
						<MainBody>
							<TabPane activeItem={state?.activeTab ?? 'overview'} paneWidth="30%" paneJustify="center">
								<TabPane.Pane style={{ padding: '0' }} name="overview" title={overviewTitle}>
									<SBody>
										<LeftContainer>
											<GeneralInfo
												_id={companyDetail?._id}
												social_profile={companyDetail?.social_profile}
												headquarter={companyDetail?.headquarter}
												generalinfo={companyDetail?.generalinfo}
											/>
										</LeftContainer>
										<RightContainer>
											<About _id="1" description={companyDetail?.description} />
											<HrDivider top={10} side={0} />
											<Keywords _id={companyDetail?._id} keywords={companyDetail?.keywords} />
										</RightContainer>
									</SBody>
								</TabPane.Pane>
								<TabPane.Pane style={{ background: '#f5f8fa' }} name="jobs" title={jobTitle}>
									<JobsList
										size={companyDetail?.jobs?.length ?? 0}
										companyName={companyDetail?.companyName!}
										company_size={companyDetail?.generalinfo?.company_size!}
										avatar={companyDetail?.avatar!}
										jobs={companyDetail?.jobs ?? []}
									/>
								</TabPane.Pane>
							</TabPane>
						</MainBody>
					</SubContainer>
				)}
			</DetailContainer>
		</MainContainer>
	);
};

export default CompanyDetail;
