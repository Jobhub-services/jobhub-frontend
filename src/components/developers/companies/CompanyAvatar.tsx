import { colors } from '@/assets/theme';
import { PCompanyAvatar } from '@/models/component/developer/company.interface';
import { useNavigate } from 'react-router-dom';
import { ArrowDownIcon, FlexBox } from 'staak-ui';
import styled from 'styled-components';
const IMG_SIZE = 35;

const SContainer = styled(FlexBox)`
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	padding: 15px 15px 10px 15px;
	cursor: pointer;
	transition: all 0.2s;
	&:hover {
		background-color: ${colors.PURPLE_1};
	}
`;

const SImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	object-fit: cover;
`;

const ImgContainer = styled.div`
	border-radius: 50%;
	width: ${IMG_SIZE}px;
	height: ${IMG_SIZE}px;
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

const CompanyAvatar = (props: PCompanyAvatar) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`detail/${props._id}`, { state: { activeTab: 'overview' } });
	};
	return (
		<SContainer justify="space-between" width="100%" onClick={handleClick}>
			<FlexBox gap={10} justify="start">
				<ImgContainer>
					<SImg src={props.avatar} alt="img" />
				</ImgContainer>
				<div style={{ width: `calc(100% - ${IMG_SIZE}px)` }}>
					<SH3>{props.companyName}</SH3>
					<SSpan>{props.industry ?? 'N/A'}.</SSpan>
				</div>
			</FlexBox>
			<ArrowDownIcon color={colors.PURPLE_BASE} style={{ width: '15px', height: '15px', transform: 'rotate(-90deg)', fontWeight: 'bold' }} />
		</SContainer>
	);
};
export default CompanyAvatar;
