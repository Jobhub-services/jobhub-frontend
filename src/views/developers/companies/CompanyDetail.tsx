import { EXPANDED_ASIDE_WIDTH, HEADER_HIEGHT } from '@/constants/app.constants';
import styled, { keyframes } from 'styled-components';
import { Header, About, GeneralInfo, Keywords, JobsList, COMPANY_HEADER_HEIGHT } from '@/components/developers/companies/detail';
import { FlexBox, HrDivider, TabPane } from 'staak-ui';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useRef } from 'react';
import { useAppSelector } from '@/utils/appHooks';
import { colors } from '@/assets/theme';
import Amazon from '@/assets/icons/cmp.jpg';

const width = keyframes`
    from{
        width:0;
    }
    to{
        width:80%;
    }
`;
const MainContainer = styled.div<any>`
	cursor: pointer;
	position: fixed;
	right: 0;
	top: ${HEADER_HIEGHT}px;
	width: calc(${(props) => (props.showed ? `100% - ${EXPANDED_ASIDE_WIDTH}px` : '0')});
	height: calc(${(props) => (props.showed ? `100% - ${HEADER_HIEGHT}px` : '0')});
	background-color: #2c2c2c3b;
`;
const DetailContainer = styled.div<any>`
	cursor: default;
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: 80%;
	animation: ${width} 0.15s ease-out;
	//width: ${(props) => (props.showed ? '80%' : '0')};
	background: white;
	//transition: width 0.2s;
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
	//border: 1px solid ${colors.BLACK_12};
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
	//gap: 15px !important;
	height: calc(100% - 62px);
`;

const CompanyDetail = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const handleChange = (name: string) => {
		searchParams.set('pane', name);
		setSearchParams(searchParams);
	};
	const { overview, jobs } = useAppSelector((state) => state.companies.companyDetail);
	const parentRef = useRef(null);
	const navigate = useNavigate();
	const onClose = (e: any) => {
		if (e.target === parentRef.current) navigate('/companies');
	};
	return (
		<MainContainer ref={parentRef} showed={true} onClick={onClose}>
			<DetailContainer showed={true}>
				<SubContainer>
					<Header avatar={Amazon} _id={overview._id} />
					<MainBody>
						<TabPane onChange={handleChange} activeItem={searchParams.get('pane') ?? 'overview'} paneWidth="30%" paneJustify="center">
							<TabPane.Pane style={{ padding: '0' }} name="overview" title="Overview">
								<SBody>
									<LeftContainer>
										<GeneralInfo
											_id={overview._id}
											social_profile={overview.social_profile}
											headquarter={overview.headquarter}
											generalinfo={overview.generalinfo}
										/>
									</LeftContainer>
									<RightContainer>
										<About _id="1" description={overview?.description} />
										<HrDivider top={10} side={0} />
										<Keywords _id={overview._id} keywords={overview.keywords} />
									</RightContainer>
								</SBody>
							</TabPane.Pane>
							<TabPane.Pane style={{ background: '#f5f8fa' }} name="jobs" title="Jobs">
								<JobsList size={jobs.size!} jobs={jobs.content!} />
							</TabPane.Pane>
						</TabPane>
					</MainBody>
				</SubContainer>
			</DetailContainer>
		</MainContainer>
	);
};

export default CompanyDetail;
