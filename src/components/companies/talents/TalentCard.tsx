import { FlexBox, Tag, HrDivider, Button } from 'staak-ui';
import { LocationIcon, ProfileIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { talentsActions } from '@/modules/actions/company/talents.actions';
import StatusElem from '@/components/companies/_common/StatusElem';
import { TitleStatus } from '@/constants/company/talent.contants';
import { CardProps } from '@/models/component/companies/talents/talents.interface';
import { Avatar } from '@/components/companies/_common';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';

const SCard = styled.div`
	background: white;
	box-shadow: 0px 0px 20px -15px ${colors.BLACK_7};
	border-radius: 8px;
	padding: 10px 15px;
`;
const SButton = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const SubTitle = styled.span`
	display: block;
	color: ${colors.BLACK_8};
	font-size: 13px;
`;
const Sp = styled.p`
	font-size: 13px;
	margin: 5px 0;
	height: 40px;
	color: ${colors.BLACK_7};
	overflow: hidden;
`;

const TalentCard = (props: CardProps) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { talentId } = useAppSelector((state) => state.talent.talentDetails);
	function viewProfile() {
		searchParams.set('detail', props.talentId);
		setSearchParams(searchParams);
		if (props.talentId === talentId) talentsActions.getTalentDetails(props.talentId);
	}
	return (
		<SCard>
			<Avatar status={props.status} img={props.img} name={props.name} role={props.main_role} />
			<FlexBox justify="space-between" className="mt-10">
				<FlexBox gap={5}>
					<LocationIcon width="18px" height="18px" color={colors.BLACK_8} />
					<SubTitle>{props.address?.country ?? 'N/A'}</SubTitle>
				</FlexBox>
				<StatusElem title={TitleStatus[props.status!]} status={props.status} />
			</FlexBox>
			<div>
				<div className="mt-10">
					<div>Description</div>
					<Sp>{props.professional_summary}</Sp>
				</div>
				<div className="mt-10">
					<div>Skills</div>
					<FlexBox justify="start" className="mt-5" gap={10}>
						{props.skills?.map((elem: string, idx: number) => (
							<Tag key={idx}>{elem}</Tag>
						))}
					</FlexBox>
				</div>
			</div>
			<HrDivider top={15} side={0} />
			<SButton width="100%" size="md" startIcon={<ProfileIcon />} variant="light" onClick={viewProfile}>
				View Profile
			</SButton>
		</SCard>
	);
};
export default TalentCard;
