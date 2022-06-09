import { TextAreaField } from '@/components/common';
import { FlexBox, Button } from 'staak-ui';
import { SSpan, SpanTitle } from '@/components/developers/profile/common';
import { useState } from 'react';
import { useAppSelector } from '@/utils/appHooks';
import { profileAction, profileDispatcher } from '@/modules/actions/developer/profile.actions';
import styled from 'styled-components';
import { colors } from '@/assets/theme';

const SSummary = styled.pre<any>`
	display: -webkit-box;
	margin: 5px 0;
	font-family: inherit;
	-webkit-line-clamp: ${(props) => (props.allText ? 'none' : 6)};
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: pre-line;
`;
const Small = styled.span`
	font-weight: 600;
	color: ${colors.PURPLE_BASE};
	cursor: pointer;
`;
const Wants = () => {
	const { wants } = useAppSelector((state) => state.developerProfile.profile);
	const [show, setShow] = useState(false);
	const [allText, setAllText] = useState(false);
	const onSave = () => {
		setShow(false);
		profileAction.setAttribute(wants, 'wants');
	};
	const handleInput = (e: any, val?: string, name?: string) => {
		profileDispatcher.setAttribute(val, 'wants');
	};
	return (
		<FlexBox justify="start" align="start" gap={20}>
			<div style={{ width: '45%' }}>
				<SpanTitle>Wants</SpanTitle>
				<div className="mt-10">
					{wants && wants !== '' ? (
						<>
							<SSummary allText={allText}>{wants}</SSummary>
							<Small onClick={() => setAllText(!allText)}>{allText ? 'Less' : 'More'}</Small>
						</>
					) : (
						<SSpan>Describe what you are looking for in your next job.</SSpan>
					)}
				</div>
			</div>
			<div style={{ width: '50%' }}>
				<TextAreaField
					value={wants}
					name="wants"
					height="200px"
					onChange={() => {
						if (!show) setShow(true);
					}}
					onDataChange={handleInput}
				>
					Wants
				</TextAreaField>
				{show && (
					<FlexBox className="mt-15" justify="end" gap={10}>
						<Button size="md" variant="text" onClick={() => setShow(false)}>
							Cancel
						</Button>
						<Button size="md" onClick={onSave}>
							Save
						</Button>
					</FlexBox>
				)}
			</div>
		</FlexBox>
	);
};

export default Wants;
