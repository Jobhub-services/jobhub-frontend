import styled, { css } from 'styled-components';
import { DropDown, FlexBox } from 'staak-ui';
import { colors } from '@/assets/theme';
import moment from 'moment';
import { PTalentContact } from '@/models/component/companies/messages/messages.interface';
import Avatar from '@/components/common/Avatar';
import { ThreeDotIcon } from '@/assets/icons';
import { Link } from 'react-router-dom';

const IMG_SIZE = 60;
const SOptions = styled.div`
	z-index: 3;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px;
	top: 23px;
	right: 20px;
	border: 1px solid ${colors.BLACK_11};
	background-color: white;
	visibility: hidden;
	border-radius: 50%;
	transition: all 0.15s ease-in-out;
	box-shadow: 0 0 15px -7px ${colors.PURPLE_2};
`;
const MainContainer = styled.div<any>`
	position: relative;
	width: 100%;
	border-radius: 8px;
	&:hover ${SOptions} {
		visibility: visible;
	}
	&:hover {
		${(props) =>
			!props.active &&
			css`
				background-color: ${colors.BLACK_13};
			`}
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
	border-radius: inherit;
	transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
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
const SLink = styled(Link)`
	width: 100%;
	border-radius: inherit;
`;
const TalentContact = (props: PTalentContact) => {
	const posted_at = moment(new Date(props.lastDate ?? '')).fromNow();
	const handleSelect = (e: any, value: string) => {
		if (props.onClick) props.onClick(value, props.userId ?? '');
	};
	return (
		<MainContainer>
			<SLink to={`/messages/${props._id}`}>
				<SubContainer align="start" justify="space-between" gap={10} active={props.active} width="100%">
					<FlexBox justify="start" gap={10}>
						<Avatar img={props.img} size={IMG_SIZE} />
						<SInfo>
							<SH2>
								{props.firstname} {props.lastname}
							</SH2>
							<SP>{!props.message || props.message === '' ? 'Empty conversation' : `${props.sender ? 'You:' : ''} ${props.message}`}</SP>
						</SInfo>
					</FlexBox>
					{props.lastDate && <SSpan>{posted_at}</SSpan>}
				</SubContainer>
			</SLink>
			<SOptions>
				<DropDown trigger="click" listPosition="right" onSelect={handleSelect}>
					<DropDown.Title>
						<ThreeDotIcon width="18px" height="18px" color={colors.BLACK_5} />
					</DropDown.Title>
					<DropDown.Item value="view">
						<FlexBox justify="start" style={{ padding: '0px' }} gap={15}>
							Go To Profile
						</FlexBox>
					</DropDown.Item>
					<DropDown.Item value="delete">
						<FlexBox justify="start" style={{ padding: '0px' }} gap={15}>
							Delete Discussion
						</FlexBox>
					</DropDown.Item>
				</DropDown>
			</SOptions>
		</MainContainer>
	);
};

export default TalentContact;
