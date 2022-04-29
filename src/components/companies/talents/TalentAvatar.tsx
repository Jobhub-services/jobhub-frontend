import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { StatusColors } from '@/constants/company/common.constants';
import { AvatarProps } from '@/models/component/companies/talents/talents.interface';

const SAvatar = styled.div<AvatarProps>`
	border: 2px solid ${(props) => StatusColors[props.status!]};
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 40%;
	width: 70px;
	height: 70px;
`;
const SubTitle = styled.span`
	display: block;
	color: ${colors.BLACK_8};
	margin-top: 2px;
	font-size: 13px;
`;
const SH3 = styled.h3`
	margin: 0;
`;
const SImg = styled.img`
	border-radius: 40%;
`;
const SSpan = styled.span`
	display: block;
	color: ${colors.BLACK_7};
	margin-top: 2px;
	font-size: 13px;
`;
const TalentAvatar = ({ img, name, role, status }: AvatarProps) => {
	return (
		<FlexBox justify="start" gap={10}>
			<SAvatar status={status}>
				<SImg src={img} alt="women" width={60} height={60} />
			</SAvatar>
			<div>
				<SH3>{name}</SH3>
				<SubTitle>{role}</SubTitle>
				<SSpan>4 Years of experience</SSpan>
			</div>
		</FlexBox>
	);
};
TalentAvatar.defaultProps = {
	status: 'ready',
};
export default TalentAvatar;
