import { ThreeDotIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { PCompanyContact } from '@/models/component/developer/messages.interface';
import Avatar from '@/components/common/Avatar';
import moment from 'moment';
import { DropDown, FlexBox } from 'staak-ui';
import styled, { css } from 'styled-components';

const IMG_SIZE = 55;

const SOptions = styled.div`
	z-index: 3;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px;
	top: 20px;
	right: 20px;
	border: 1px solid ${colors.BLACK_11};
	background-color: white;
	visibility: hidden;
	border-radius: 50%;
	transition: all 0.15s ease-in-out;
	box-shadow: 0 0 15px -7px ${colors.PURPLE_2};
`;
const MainContainer = styled.div`
	position: relative;
	&:hover ${SOptions} {
		visibility: visible;
	}
`;
const SubContainer = styled(FlexBox)`
	cursor: pointer;
	${(props) =>
		props.active &&
		css`
			background-color: ${colors.PURPLE_1};
		`}
	padding: 10px 10px;
	border-radius: 8px;
	transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	&:hover {
		${(props) =>
			!props.active &&
			css`
				background-color: ${colors.BLACK_13};
			`}
	}
`;
const SInfo = styled.div`
	width: calc(100% - ${IMG_SIZE}px);
`;

const SH2 = styled.h2`
	font-size: 16px;
	margin: 3px 0;
	color: ${colors.BLACK_4};
	font-weight: 500;
	display: -webkit-box;
	font-family: inherit;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
`;

const SP = styled.p`
	margin: 0;
	color: ${colors.BLACK_5};
	font-size: 13px;
	display: -webkit-box;
	font-family: inherit;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
`;
const SSpan = styled.span`
	font-size: 12px;
	white-space: nowrap;
	color: ${colors.BLACK_5};
`;
const CompanyContact = (props: PCompanyContact) => {
	const posted_at = moment(new Date(props.lastDate ?? '')).fromNow();
	const handleClick = () => {
		if (props.onClick) props.onClick(props._id);
	};
	const handleSelect = () => {};
	return (
		<MainContainer>
			<SubContainer align="start" justify="space-between" gap={10} active={props.active} width="100%" onClick={handleClick}>
				<FlexBox justify="start" gap={10}>
					<Avatar img={props.img} size={IMG_SIZE} />
					<SInfo>
						<SH2>{props.companyName}</SH2>
						<SP>
							{props.sender ? 'You:' : ''} {props.message}
						</SP>
					</SInfo>
				</FlexBox>
				<SSpan>{posted_at}</SSpan>
			</SubContainer>
			<SOptions>
				<DropDown trigger="click" listPosition="right" onSelet={handleSelect}>
					<DropDown.Title>
						<ThreeDotIcon width="18px" height="18px" color={colors.BLACK_5} />
					</DropDown.Title>
					<DropDown.Item value="profile">
						<FlexBox justify="start" style={{ padding: '0px' }} gap={15}>
							Go To Profile
						</FlexBox>
					</DropDown.Item>
					<DropDown.Item value="settings">
						<FlexBox justify="start" style={{ padding: '0px' }} gap={15}>
							Delete Discussion
						</FlexBox>
					</DropDown.Item>
				</DropDown>
			</SOptions>
		</MainContainer>
	);
};

export default CompanyContact;
