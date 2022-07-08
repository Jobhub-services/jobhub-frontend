import { colors } from '@/assets/theme';
import { PApplicationAvatar } from '@/models/component/developer/application.interface';
import { FlexBox } from 'staak-ui';
import { ClockIcon, DetailIcon } from '@/assets/icons';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { applicationActions } from '@/modules/actions/developer/application.actions';
import moment from 'moment';

const SContainer = styled(FlexBox)`
	cursor: pointer;
`;
const SImg = styled.img`
	width: 45px;
	height: 45px;
	border-radius: 7px;
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
	color: ${colors.BLACK_7};
	font-weight: 500;
`;
const Span = styled.span<any>`
	color: ${colors.PURPLE_BASE};
	font-weight: 600;
`;

const Avatar = (props: PApplicationAvatar) => {
	const posted_at = moment(new Date(props.createdAt!)).fromNow();
	return (
		<div>
			<SContainer gap={10} justify="start" width="100%">
				<SImg src={props.img} alt="google" />
				<div>
					<SH3>{props.title}</SH3>
					<FlexBox justify="start" gap={20} className="mt-5">
						<SSpan>Applied {posted_at} </SSpan>
						<Span>at {props.subtitle}</Span>
					</FlexBox>
				</div>
			</SContainer>
		</div>
	);
};
export default Avatar;
