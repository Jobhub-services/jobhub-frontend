import { FlexBox } from 'staak-ui';
import CompanyMetaInfo from '@/components/developers/applications/detail/companyUtils/CompanyMetaInfo';
import { useAppSelector } from '@/utils/appHooks';
import About from '@/components/developers/companies/detail/About';
import styled from 'styled-components';

const RightCont = styled.div`
	padding: 0 10px;
`;
const CompanyInfo = () => {
	const { company } = useAppSelector((state) => state.talentApplications.applicationDetails!);
	return (
		<FlexBox align="start">
			<RightCont>
				<About _id="" description={company.description} />
			</RightCont>
			<CompanyMetaInfo
				social_profile={company.social_profile}
				headquarter={company?.headquarter}
				_id={company?._id!}
				generalinfo={company?.generalinfo}
				keywords={company.keywords}
			/>
		</FlexBox>
	);
};

export default CompanyInfo;
