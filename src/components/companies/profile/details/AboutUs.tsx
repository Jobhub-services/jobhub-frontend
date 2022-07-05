import { Button, FlexBox, PlusIcon, TextArea } from 'staak-ui';
import { SpanTitle, SButton } from '@/components/companies/profile/common/common.style';
import styled from 'styled-components';
import { EditIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { useAppSelector } from '@/utils/appHooks';
import { useState } from 'react';
import { profileAction } from '@/modules/actions/company/profile.actions';

const SAboutUs = styled.pre<any>`
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

const SSpan = styled.span`
	display: inline-block;
	color: ${colors.BLACK_9};
`;

const AboutUs = () => {
	const { profile } = useAppSelector((state) => state.companyProfile);
	const [show, setShow] = useState(false);
	const [text, setText] = useState('');
	const [allText, setAllText] = useState(false);
	const addSummary = () => {
		setText(profile.description!);
		setShow(true);
	};
	const onSave = () => {
		profileAction.setAttribute(text, 'description');
		setShow(false);
	};
	const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const value = event.target.value;
		setText(value!);
	};
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>About Us</SpanTitle>
				<SButton padding={text !== '' ? 5 : 0} onClick={addSummary}>
					{text !== '' ? (
						<EditIcon width="15px" height="15px" color={colors.PURPLE_BASE} />
					) : (
						<PlusIcon color={colors.PURPLE_BASE} width="23px" height="23px" />
					)}
				</SButton>
			</FlexBox>
			<div className="mt-10">
				{profile.description && profile.description !== '' ? (
					<>
						<SAboutUs allText={allText}>{profile.description}</SAboutUs>
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
					<TextArea placeholder="Company description" value={text} onChange={handleText} height="150px" />
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

export default AboutUs;
