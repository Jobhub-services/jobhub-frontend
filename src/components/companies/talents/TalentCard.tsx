import { FlexBox, Tag, HrDivider, Button } from 'staak-ui';
import { LocationIcon, ProfileIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { talentsActions } from '@/modules/actions/company/talents.actions';
import StatusElem from '@/components/companies/_common/StatusElem';
import { TitleStatus } from '@/constants/company/talent.contants';
import { CardProps } from '@/models/component/companies/talents/talents.interface';
import { Avatar } from '@/components/companies/_common';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';

const SWarrap = styled(FlexBox)`
	flex-wrap: wrap;
	height: 35px;
	overflow: hidden;
`;
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
	color: ${colors.BLACK_8};
	display: -webkit-box;
	font-size: 13px;
	font-family: inherit;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const Sp = styled.p`
	font-size: 13px;
	margin: 5px 0;
	display: -webkit-box;
	color: ${colors.BLACK_7};
	font-family: inherit;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const TalentCard = (props: CardProps) => {
	const navigate = useNavigate();
	const { _id } = useAppSelector((state) => state.talent.talentDetails);
	const viewProfile = () => {
		navigate(`detail/${props._id}`);
		if (props._id !== _id) talentsActions.getTalentDetails(props._id);
	};
	return (
		<SCard>
			<Avatar status={props.status} img={props.avatar} name={`${props?.firstName} ${props?.lastName}`} role={props.role?.primary_role} />
			<FlexBox justify="space-between" className="mt-10" gap={10}>
				<FlexBox justify="start" gap={5} width="50%">
					<LocationIcon width="18px" height="18px" color={colors.BLACK_8} />
					<SubTitle>
						{props.address?.country ?? 'N/A'}
						{props.address?.city ? `, ${props.address?.city}` : ''}
					</SubTitle>
				</FlexBox>
				<StatusElem title={TitleStatus[props.status!]} status={props.status} />
			</FlexBox>
			<div>
				<div className="mt-10">
					<div>Summary</div>
					<Sp>{props.summary}</Sp>
				</div>
				<div className="mt-10">
					<div>Skills</div>
					<SWarrap justify="start" className="mt-5" gap={10}>
						{props.skills?.slice(0, 3).map((elem: string, idx: number) => (
							<Tag key={idx}>{elem}</Tag>
						))}
						{props.skills?.length === 0 && <Sp>He hasn't added skills yet</Sp>}
					</SWarrap>
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
