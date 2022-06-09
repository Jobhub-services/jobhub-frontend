import { Button, FlexBox, PlusIcon, Tag, TagPicker } from 'staak-ui';
import { colors } from '@/assets/theme';
import { EditIcon } from '@/assets/icons';
import { SpanTitle, SButton } from '@/components/developers/profile/common/shared.style';
import styled from 'styled-components';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useState } from 'react';
import { profileAction } from '@/modules/actions/developer/profile.actions';
import { metadataActions } from '@/modules/actions/metadata.actions';

const SSpan = styled.span`
	display: inline-block;
	color: ${colors.BLACK_9};
`;
const TagWrapper = styled(FlexBox)`
	gap: 10px !important;
	flex-wrap: wrap;
	justify-content: flex-start !important;
`;
const Skills = () => {
	const { skills } = useAppSelector((state) => state.developerProfile.profile);
	const { skills_list } = useAppSelector((state) => state.metadata);
	const [localSkills, setLocalSkills] = useState<{ _id?: string | undefined; name?: string | undefined }[]>([]);
	const [tmpArray, setTmpArray] = useState<{ value: string; label: string }[]>([]);
	const [show, setShow] = useState(false);
	useEffect(() => {
		metadataActions.getSkills();
	}, []);
	function handleChangeData(event: React.ChangeEvent<HTMLInputElement>) {
		const { value } = event.target;
		if (value === '') setLocalSkills([]);
		else {
			const tmp = skills_list?.content?.filter((elem) => elem.name?.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()));
			setLocalSkills(tmp!);
		}
	}
	function pickerChange(event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent, value: { value: string; label: string }[], name?: string) {
		setTmpArray(value);
	}
	function onSave() {
		//let tmpSkills = [...skills!];
		const tmp = tmpArray.map((elem) => {
			return elem.value;
		});
		/*tmpArray.forEach((elem, idx) => {
			const val = { id: elem.value, label: elem.label };
			const bool = tmpSkills.some((elem) => elem.id === val.id);
			if (!bool) tmpSkills.push(val);
		});*/
		profileAction.setAttribute(tmp, 'skills');
		setTmpArray([]);
		setShow(false);
	}

	function addSkill() {
		const tmp = skills?.map((elem) => {
			return {
				value: elem._id,
				label: elem.name,
			};
		});
		setTmpArray(tmp!);
		setShow(true);
	}
	return (
		<div style={{ padding: '0 0px 0 10px' }}>
			<FlexBox justify="space-between">
				<SpanTitle>Skills</SpanTitle>
				<SButton padding={skills?.length! > 0 ? 5 : 0} onClick={addSkill}>
					{skills?.length! > 0 ? (
						<EditIcon width="15px" height="15px" color={colors.PURPLE_BASE} />
					) : (
						<PlusIcon color={colors.PURPLE_BASE} width="23px" height="23px" />
					)}
				</SButton>
			</FlexBox>

			<TagWrapper className="mt-15">
				{skills?.length === 0 ? (
					<SSpan>Add skills to help startups focus on your strengths</SSpan>
				) : (
					skills?.map((elem, idx) => {
						return (
							<Tag key={idx} closable value={elem._id}>
								{elem.name}
							</Tag>
						);
					})
				)}
			</TagWrapper>
			{show && (
				<div>
					<TagPicker className="mt-10" name="skills" onChange={pickerChange} values={tmpArray} onDataChange={handleChangeData}>
						{localSkills?.map((elem, idx) => {
							return (
								<TagPicker.Option key={idx} value={elem._id!}>
									{elem.name}
								</TagPicker.Option>
							);
						})}
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
