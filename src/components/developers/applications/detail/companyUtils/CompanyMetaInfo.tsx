import { colors } from '@/assets/theme';
import { TCompanyDetail } from '@/types/developer/comanies.type';
import { dateWithMonthName } from '@/utils/helpers';
import { STitle, SSubTitle, SSpan } from '@/components/developers/applications/detail/common.style';
import SocialProfile from '@/components/developers/applications/detail/companyUtils/SocialProfile';
import { Keywords } from '@/components/developers/companies/detail';
import styled from 'styled-components';

const LeftContainer = styled.div`
	width: 30%;
	border: 1px solid ${colors.BLACK_12};
	border-radius: 8px;
	padding: 10px 15px;
	height: 100%;
	overflow: auto;
`;

const CompanyMetaInfo = ({ headquarter, social_profile, generalinfo, keywords }: TCompanyDetail) => {
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
				{!headquarter?.street && !headquarter?.city && !headquarter?.country && 'N/A'}
			</div>
			{generalinfo?.founded && (
				<div className="mt-10">
					<SSubTitle>Founded</SSubTitle>
					<SSpan>{dateWithMonthName(generalinfo?.founded!)}</SSpan>
				</div>
			)}
			{generalinfo?.company_size && (
				<div className="mt-10">
					<SSubTitle>Company size</SSubTitle>
					<SSpan>{generalinfo?.company_size}</SSpan>
				</div>
			)}
			{generalinfo?.industry && (
				<div className="mt-10">
					<SSubTitle>Industry</SSubTitle>
					<SSpan>{generalinfo?.industry}</SSpan>
				</div>
			)}
			{keywords?.length! > 0 && <Keywords _id="" keywords={keywords} />}
		</LeftContainer>
	);
};

export default CompanyMetaInfo;
