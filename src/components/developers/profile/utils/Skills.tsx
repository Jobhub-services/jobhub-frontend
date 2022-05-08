import { Button, FlexBox, PlusIcon, Tag, TagPicker } from 'staak-ui';
import { colors } from '@/assets/theme';
import { SpanTitle, SButton } from './shared.style';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';
import { useState } from 'react';
import { profileAction } from '@/modules/actions/developer/profile.actions';

const SSpan = styled.span`
	display: inline-block;
	color: ${colors.BLACK_9};
`;

const Skills = () => {
	const { skills } = useAppSelector((state) => state.developerProfile.profile);
	const [tmpArray, setTmpArray] = useState<{ value: string; label: string }[]>([]);
	const [show, setShow] = useState(false);

	function pickerChange(event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent, value: { value: string; label: string }[], name?: string) {
		setTmpArray(value);
	}

	function onSave() {
		let tmpSkills = [...skills!];
		tmpArray.forEach((elem, idx) => {
			const val = { id: elem.value, label: elem.label };
			const bool = tmpSkills.some((elem) => elem.id === val.id);
			if (!bool) tmpSkills.push(val);
		});
		profileAction.setAttribute(tmpSkills, 'skills');
		setTmpArray([]);
		setShow(false);
	}

	function addSkill() {
		setShow(true);
	}
	return (
		<div style={{ padding: '0 10px' }}>
			<FlexBox justify="space-between">
				<SpanTitle>Skills</SpanTitle>
				<SButton padding={0} onClick={addSkill}>
					<PlusIcon color={colors.PURPLE_BASE} width="23px" height="23px" />
				</SButton>
			</FlexBox>

			<FlexBox justify="start" className="mt-15" gap={10}>
				{skills?.length === 0 ? (
					<SSpan>Add skills to help startups focus on your strengths</SSpan>
				) : (
					skills?.map((elem, idx) => {
						return (
							<Tag key={idx} closable value={elem.id}>
								{elem.label}
							</Tag>
						);
					})
				)}
			</FlexBox>
			{show && (
				<div>
					<TagPicker className="mt-10" name="skills" onChange={pickerChange} values={tmpArray}>
						<TagPicker.Option value="reactjs">React js</TagPicker.Option>
						<TagPicker.Option value="php">PHP</TagPicker.Option>
					</TagPicker>
					<FlexBox className="mt-15" justify="end" gap={10}>
						<Button
							onClick={() => {
								setShow(false);
							}}
							size="md"
							variant="text"
						>
							Cancel
						</Button>
						<Button onClick={onSave} size="md">
							Save
						</Button>
					</FlexBox>
				</div>
			)}
		</div>
	);
};

export default Skills;
