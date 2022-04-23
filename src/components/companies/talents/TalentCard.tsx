import { FlexBox, Tag, HrDivider, Button } from 'staak-ui';
import { LocationIcon, ProfileIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { talentsActions } from '@/modules/actions/company/talents.actions';
import { useAppSelector } from '@/utils/appHooks';
import styled from 'styled-components';
import TalentAvatar from './TalentAvatar';
import TalentStatus from './profile/TalentStatus';
import { TitleStatus } from '@/constants/company/talent.contants';
import { CardProps } from '@/models/component/companies/talents/talents.interface';

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
	const { showDetails } = useAppSelector((state) => state.talent);
	return (
		<SCard>
			<TalentAvatar status={props.status} img={props.img} name={props.name} role={props.role} />
			<FlexBox justify="space-between" className="mt-10">
				<FlexBox gap={5}>
					<LocationIcon width="18px" height="18px" color={colors.BLACK_8} />
					<SubTitle>{props.location}</SubTitle>
				</FlexBox>
				<TalentStatus title={TitleStatus[props.status!]} status={props.status} />
			</FlexBox>
			<div>
				<div className="mt-10">
					<div>Description</div>
					<Sp>{props.description}</Sp>
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
			<SButton
				width="100%"
				size="md"
				startIcon={<ProfileIcon />}
				variant="light"
				onClick={() => {
					talentsActions.showTalentDetails(!showDetails);
				}}
			>
				View Profile
			</SButton>
		</SCard>
	);
};
export default TalentCard;
