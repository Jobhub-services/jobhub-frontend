import { FlexBox } from 'staak-ui';
import styled from 'styled-components';
import { colors } from '@/assets/theme';
import { AvatarProps } from '@/models/component/companies/applications/applications.interface';

const SSpan = styled.span<any>`
	font-size: 13px;
	font-weight: 500;
	color: ${colors.BLACK_7};
	opacity: ${(props) => props.opacity};
	/*transform: rotate(20deg);*/
`;
const Container = styled(FlexBox)`
	gap: 10px;
	justify-content: flex-start !important;
	align-items: flex-start !important;
`;
const SImg = styled.img`
	border-radius: 50%;
`;
const Avatar = ({ title, width, height, subTitle, img }: AvatarProps) => {
	return (
		<Container>
			<SImg src={img} alt="avatar" width={width} height={height} />
			<div>
				<h2 style={{ margin: '0' }}>{title}</h2>
				<SSpan>{subTitle}</SSpan>
				<span style={{ display: 'block', fontSize: '13px', color: `${colors.PURPLE_BASE}`, cursor: 'pointer' }}>View Profile</span>
			</div>
		</Container>
	);
};

export default Avatar;
