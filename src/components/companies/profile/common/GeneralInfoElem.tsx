import { SData, SSpan } from '@/components/companies/profile/common/common.style';
import { colors } from '@/assets/theme';
import { TProfileInfo } from '@/types/company/profile.type';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
const SValue = styled.span`
	font-weight: 600;
	color: ${colors.BLACK_5};
`;
const GeneralInfoElem = (props: TProfileInfo) => {
	const { generalinfo } = props;
	const empty =
		(!generalinfo?.company_size || generalinfo?.company_size === '') &&
		(!generalinfo?.founded || generalinfo.founded === '') &&
		(!generalinfo?.industry || generalinfo.industry === '');
	return (
		<div>
			{!empty ? (
				<>
					<>
						{generalinfo?.company_size && generalinfo?.company_size !== '' && (
							<FlexBox justify="start" className="mt-15" gap={10}>
								<SData>Company Size</SData>
								<SValue>{generalinfo?.company_size}</SValue>
							</FlexBox>
						)}
					</>
					<>
						{generalinfo?.founded && generalinfo?.founded !== '' && (
							<FlexBox justify="start" className="mt-15" gap={10}>
								<SData>Founded</SData>
								<SValue>{generalinfo?.founded}</SValue>
							</FlexBox>
						)}
					</>
					<>
						{generalinfo?.industry && generalinfo?.industry !== '' && (
							<FlexBox justify="start" className="mt-15" gap={10}>
								<SData>Industry</SData>
								<SValue>{generalinfo?.industry}</SValue>
							</FlexBox>
						)}
					</>
				</>
			) : (
				<SSpan className="mt-15">Add the foundation date, the size and the sector of activity of your company</SSpan>
			)}
		</div>
	);
};

export default GeneralInfoElem;
