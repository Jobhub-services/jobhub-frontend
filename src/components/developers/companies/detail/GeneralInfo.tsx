import { CalendarFillIcon, EmpolyeesIcon, LocationFillIcon, TwitterLogo, WorldColorIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { STitle, SSubTitle, SSpan, SLink } from '@/components/developers/companies/detail/common.style';
import { TCompanyDetail } from '@/types/developer/comanies.type';
import { dateWithMonthName } from '@/utils/helpers';
import { FaceBookLogo, FlexBox, HrDivider, LinkedinLogo } from 'staak-ui';

const GeneralInfo = ({ headquarter, social_profile, generalinfo }: TCompanyDetail) => {
	const getLink = (link: string): string => {
		if (!link) return '';
		const l = link.split('//');
		if (l.length === 0) return '';
		return l[1];
	};
	const { founded, company_size } = generalinfo ?? {};
	return (
		<div>
			<STitle>General Info</STitle>
			{(headquarter?.street || headquarter?.city || headquarter?.country) && (
				<div className="mt-10">
					<FlexBox justify="start" gap={5}>
						<LocationFillIcon color={colors.BLACK_9} />
						<SSubTitle>Headquarter</SSubTitle>
					</FlexBox>
					<SSpan className="mt-5">
						{headquarter?.street ? `${headquarter?.street}, ` : ''}
						{headquarter?.city ? `${headquarter?.city}, ` : ''}
						{headquarter?.country ? `${headquarter?.country}.` : ''}
					</SSpan>
				</div>
			)}
			{founded && (
				<div className="mt-15">
					<FlexBox justify="start" gap={5}>
						<CalendarFillIcon color={colors.BLACK_9} />
						<SSubTitle>Founded</SSubTitle>
					</FlexBox>
					<SSpan className="mt-5">{dateWithMonthName(founded!)}</SSpan>
				</div>
			)}
			{company_size && (
				<div className="mt-15">
					<FlexBox justify="start" gap={5}>
						<EmpolyeesIcon color={colors.BLACK_9} />
						<SSubTitle>Company size</SSubTitle>
					</FlexBox>
					<SSpan className="mt-5 ">{company_size}</SSpan>
				</div>
			)}
			<HrDivider top={15} side={15} />
			{social_profile?.website && (
				<>
					<div>
						<FlexBox justify="start" gap={5}>
							<WorldColorIcon width="20px" height="20px" />
							<SSubTitle>Website</SSubTitle>
						</FlexBox>
						<SLink className="mt-15" target="_blank" href={social_profile?.website}>
							{getLink(social_profile?.website!)}
						</SLink>
					</div>
					<HrDivider top={10} side={15} />
				</>
			)}
			{social_profile?.linkedin && (
				<>
					<div>
						<FlexBox justify="start" gap={5}>
							<LinkedinLogo width="20px" height="20px" />
							<SSubTitle>Linkedin</SSubTitle>
						</FlexBox>
						<SLink className="mt-10" target="_blank" href={social_profile?.linkedin}>
							{getLink(social_profile?.linkedin!)}
						</SLink>
					</div>
					<HrDivider top={10} side={15} />
				</>
			)}
			{social_profile?.twitter && (
				<>
					<div>
						<FlexBox justify="start" gap={5}>
							<TwitterLogo width="20px" height="20px" />
							<SSubTitle>Twitter</SSubTitle>
						</FlexBox>
						<SLink className="mt-10" target="_blank" href={social_profile?.twitter}>
							{getLink(social_profile?.twitter!)}
						</SLink>
					</div>
					<HrDivider top={10} side={15} />
				</>
			)}
			{social_profile?.facebook && (
				<>
					<div>
						<FlexBox justify="start" gap={5}>
							<FaceBookLogo width="20px" height="20px" />
							<SSubTitle>Facebook</SSubTitle>
						</FlexBox>
						<SLink className="mt-10" target="_blank" href={social_profile?.facebook}>
							{getLink(social_profile?.facebook!)}
						</SLink>
					</div>
					<HrDivider top={10} side={15} />
				</>
			)}
		</div>
	);
};

export default GeneralInfo;
