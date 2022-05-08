import { colors } from '@/assets/theme';
import { useAppSelector } from '@/utils/appHooks';
import React, { useState } from 'react';
import { Button, FlexBox, PlusIcon, TextArea } from 'staak-ui';
import { SpanTitle, SButton } from './shared.style';
import styled from 'styled-components';
import { profileAction } from '@/modules/actions/developer/profile.actions';

const SSummary = styled.pre<any>`
	display: -webkit-box;
	margin: 5px 0;
	font-family: inherit;
	-webkit-line-clamp: ${(props) => (props.allText ? 'none' : 6)};
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	overflow: hidden;
`;
const SSpan = styled.span`
	display: inline-block;
	color: ${colors.BLACK_9};
`;

const Small = styled.span`
	font-weight: 600;
	color: ${colors.PURPLE_BASE};
	cursor: pointer;
`;
const Summary = () => {
	const { profile } = useAppSelector((state) => state.developerProfile);
	const [show, setShow] = useState(false);
	const [text, setText] = useState('');
	const [allText, setAllText] = useState(false);
	function handleText(event: React.ChangeEvent<HTMLTextAreaElement>) {
		const value = event.target.value;
		setText(value);
	}
	function onSave() {
		profileAction.setAttribute(text, 'summary');
		setShow(false);
	}
	function addSummary() {
		setShow(true);
		setText(profile.summary!);
	}
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Summary</SpanTitle>
				<SButton padding={0} onClick={addSummary}>
					<PlusIcon color={colors.PURPLE_BASE} width="23px" height="23px" />
				</SButton>
			</FlexBox>
			<div className="mt-10">
				{profile.summary !== '' ? (
					<>
						<SSummary allText={allText}>{profile.summary}</SSummary>
						<Small
							onClick={() => {
								setAllText(!allText);
							}}
						>
							{allText ? 'Less' : 'More'}
						</Small>
					</>
				) : (
					<SSpan>Tell us about yourself so startups know who you are</SSpan>
				)}
			</div>
			{show && (
				<div className="mt-15">
					<TextArea placeholder="Professional summary" value={text} onChange={handleText} height="150px" />
					<FlexBox className="mt-15" justify="end" gap={10}>
						<Button
							size="md"
							variant="text"
							onClick={() => {
								setShow(false);
							}}
						>
							Cancel
						</Button>
						<Button size="md" onClick={onSave}>
							Save
						</Button>
					</FlexBox>
				</div>
			)}
		</div>
	);
};

export default Summary;
