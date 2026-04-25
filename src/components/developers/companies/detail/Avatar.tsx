import { colors } from '@/assets/theme';
import { PCompanyCard } from '@/models/component/developer/company.interface';
import { FlexBox } from 'staak-ui';
import styled from 'styled-components';

const SImg = styled.img`
	border-radius: 40%;
	object-fit: cover;
`;

const ImgCont = styled(FlexBox)<any>`
	aspect-ratio: auto ${(props) => props.Size / props.Size};
	border-radius: 40%;
	border: 2px solid ${colors.PURPLE_3};
	width: ${(props) => props.Size}px;
	height: ${(props) => props.Size}px;
`;
const SH3 = styled.h3`
	display: -webkit-box;
	margin: 0;
	font-family: inherit;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const SSpan = styled.span`
	display: inline-block;
	color: ${colors.BLACK_8};
	font-weight: 500;
`;
const Avatar = ({ companyName, generalinfo, avatar }: PCompanyCard) => {
	return (
		<FlexBox gap={10} justify="start">
			<ImgCont Size={60 + 10}>
				<SImg src={avatar} alt="avatar" width={60} height={60} />
			</ImgCont>
			<div style={{ width: '100%' }}>
				<SH3>{companyName}</SH3>
				<SSpan>{generalinfo?.industry}</SSpan>
			</div>
		</FlexBox>
	);
};

export default Avatar;
