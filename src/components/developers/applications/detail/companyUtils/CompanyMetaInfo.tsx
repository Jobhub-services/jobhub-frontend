import { colors } from '@/assets/theme';
import { TCompanyDetail } from '@/types/developer/comanies.type';
import { dateWithMonthName } from '@/utils/helpers';
import { STitle, SSubTitle, SSpan } from '@/components/developers/applications/detail/common.style';
import SocialProfile from '@/components/developers/applications/detail/companyUtils/SocialProfile';
import { Keywords } from '@/components/developers/companies/detail';
import styled from 'styled-components';

const LeftContainer = styled.div`
	width: 35%;
	border: 1px solid ${colors.BLACK_12};
	border-radius: 8px;
	padding: 10px 15px;
	height: 100%;
	overflow: auto;
`;

const CompanyMetaInfo = ({ headquarter, social_profile, generalinfo, keywords }: TCompanyDetail) => {
	const { founded, company_size, industry } = generalinfo!;
	return (
		<LeftContainer>
			<SocialProfile _id="" social_profile={social_profile} />
			<STitle>General Info</STitle>
			<div className="mt-10">
				<SSubTitle>Headquarter</SSubTitle>
				<SSpan>
					{headquarter?.street ? `${headquarter?.street}, ` : ''}
					{headquarter?.city ? `${headquarter?.city}, ` : ''}
					{headquarter?.country ? `${headquarter?.country}.` : ''}
				</SSpan>
			</div>
			{founded && (
				<div className="mt-10">
					<SSubTitle>Founded</SSubTitle>
					<SSpan>{dateWithMonthName(founded!)}</SSpan>
				</div>
			)}
			{company_size && (
				<div className="mt-10">
					<SSubTitle>Company size</SSubTitle>
					<SSpan>{company_size}</SSpan>
				</div>
			)}
			{industry && (
				<div className="mt-10">
					<SSubTitle>Industry</SSubTitle>
					<SSpan>{industry}</SSpan>
				</div>
			)}
			{keywords?.length! > 0 && <Keywords _id="" keywords={keywords} />}
		</LeftContainer>
	);
};

export default CompanyMetaInfo;
