import { colors } from '@/assets/theme';
import { SContainer } from '@/components/developers/_common/common.style';
import { PCompanyCard } from '@/models/component/developer/company.interface';
import CompanyAvatar from '@/components/developers/companies/CompanyAvatar';
import { ArrowDownIcon, FlexBox } from 'staak-ui';
import styled from 'styled-components';
import { CalendarFillIcon, LocationFillIcon } from '@/assets/icons';
import { dateWithMonthName } from '@/utils/helpers';
import { createSearchParams, useNavigate } from 'react-router-dom';
const SPre = styled.pre<any>`
	display: -webkit-box;
	color: ${colors.BLACK_2};
	margin: 10px 0;
	font-family: inherit;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const SSpan = styled.span`
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	color: ${colors.BLACK_8};
	font-weight: 500;
`;
const SJob = styled.span`
	font-weight: 500;
	color: ${colors.PURPLE_BASE};
	cursor: pointer;
`;
const SBody = styled.div`
	//padding: 15px 15px;
`;
const SFooter = styled(FlexBox)`
	padding: 10px 15px !important;
	border-top: 1px solid ${colors.PURPLE_1};
	height: 42px;
`;
const CompanyCard = (props: PCompanyCard) => {
	const navigate = useNavigate();
	const handleDetail = () => {
		navigate(
			{
				pathname: `detail/${props._id}`,
				search: createSearchParams({
					pane: 'jobs',
				}).toString(),
			},
			{ replace: true }
		);
	};
	const { street, city, country } = props.headquarter ?? {};
	const founded = dateWithMonthName(props?.generalinfo?.founded!);
	return (
		<SContainer>
			<SBody>
				<CompanyAvatar _id={props._id} avatar={props.avatar} name={props.companyName} industry={props?.generalinfo?.industry} />
				<div style={{ padding: '0 15px' }}>
					<FlexBox justify="start" className="mt-5" gap={5}>
						<LocationFillIcon color={colors.BLACK_10} width="18px" height="18px" />
						<SSpan>
							{street ? `${street},` : ''} {city ? `${city},` : ''} {country ? `${country}.` : ''}
						</SSpan>
					</FlexBox>
					<SPre>{props.description}</SPre>
				</div>
			</SBody>
			<SFooter justify="space-between">
				<FlexBox gap={5}>
					{founded && (
						<>
							<CalendarFillIcon color={colors.BLACK_10} width="20px" height="20px" />
							<SSpan>{dateWithMonthName(props?.generalinfo?.founded!)}</SSpan>
						</>
					)}
				</FlexBox>
				<SJob onClick={handleDetail}>
					{props.number_job} open jobs <ArrowDownIcon color={colors.PURPLE_BASE} style={{ transform: 'rotate(-90deg)', fontWeight: 'bold' }} />
				</SJob>
			</SFooter>
		</SContainer>
	);
};

export default CompanyCard;
