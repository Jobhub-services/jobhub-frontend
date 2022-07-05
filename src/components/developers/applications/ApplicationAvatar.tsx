import { colors } from '@/assets/theme';
import { PApplicationAvatar } from '@/models/component/developer/application.interface';
import { FlexBox } from 'staak-ui';
import { ClockIcon, DetailIcon } from '@/assets/icons';
import styled from 'styled-components';

const SContainer = styled(FlexBox)`
	cursor: pointer;
`;
const SImg = styled.img`
	width: 35px;
	height: 35px;
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
`;

const ApplicationAvatar = (props: PApplicationAvatar) => {
	const handleClick = () => {
		console.log('hello i have clicked man');
	};
	return (
		<SContainer gap={10} justify="start" align="flex-start" width="100%">
			<SImg src={props.img} alt="google" />
			<div style={{ width: '100%' }}>
				<SH3>{props.title}</SH3>
				<FlexBox justify="space-between" gap={20} className="mt-5">
					<SSpan>{props.subtitle}</SSpan>
					<FlexBox gap={5} onClick={handleClick}>
						<Span>More details</Span>
						<DetailIcon color={colors.PURPLE_BASE} />
					</FlexBox>
				</FlexBox>
			</div>
		</SContainer>
	);
};
export default ApplicationAvatar;
