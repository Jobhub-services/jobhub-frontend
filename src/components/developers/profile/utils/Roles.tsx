import { TagPickerField } from '@/components/common';
import { useAppSelector } from '@/utils/appHooks';
import React, { useState } from 'react';
import { colors } from '@/assets/theme';
import { InputPickerField } from '@/components/common';
import { Button, FlexBox, Tag } from 'staak-ui';
import { SButton, SpanTitle } from './shared.style';
import styled from 'styled-components';
import { profileAction } from '@/modules/actions/developer/profile.actions';
import { PlusIcon } from '@/assets/icons';

const SubTitle = styled.span`
	font-weight: 500;
	color: ${colors.BLACK_4};
	font-size: 15px;
`;
const SSpan = styled.span`
	font-weight: 600;
	color: ${colors.BLACK_9};
`;
const Roles = () => {
	const { role } = useAppSelector((state) => state.developerProfile.profile);
	const [otherRoles, setOtherRoles] = useState<{ value?: string; label?: string }[]>([]);
	const [inputData, setInputData] = useState<any>({});
	const [show, setShow] = useState(false);
	function handleTag(event: any, value: { value?: string; label?: string }[], name?: string) {
		setOtherRoles(value);
	}
	function handleInput(event: any, value?: string, label?: string, name?: string) {
		let tmp = { ...inputData };
		tmp[name!] = { id: value, label: label };
		setInputData(tmp);
	}
	function addRole() {
		let tmp = { ...inputData };
		tmp['primary_role'] = role?.primary_role;
		tmp['experience'] = role?.experience;
		setInputData(tmp);
		setOtherRoles(
			role?.other_roles?.map((elem) => {
				return { value: elem.id!, label: elem.label! };
			})!
		);
		setShow(true);
	}
	function onSave() {
		let tmp = { ...role };
		tmp.primary_role = inputData['primary_role'];
		tmp.experience = inputData['experience'];
		tmp.other_roles = otherRoles.map((elem) => {
			return { id: elem.value!, label: elem.label! };
		});
		setShow(false);
		profileAction.setAttribute(tmp, 'role');
	}

	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Roles</SpanTitle>
				<SButton padding={0} onClick={addRole}>
					<PlusIcon color={colors.PURPLE_BASE} width="23px" height="23px" />
				</SButton>
			</FlexBox>
			<div className="mt-15">
				{role?.primary_role?.label !== '' && (
					<div>
						<SubTitle>Primary role</SubTitle>
						<FlexBox justify="start" gap={15} className="mt-10">
							<SSpan>{role?.primary_role?.label}</SSpan>
							<SSpan>
								{role?.experience?.label} {role?.experience?.label !== '' && 'of experience'}
							</SSpan>
						</FlexBox>
					</div>
				)}
				{role?.other_roles?.length! > 0 && (
					<div className="mt-15">
						<SubTitle>Open to the following roles</SubTitle>
						<FlexBox justify="start" gap={10} className="mt-10">
							{role?.other_roles?.map((elem, idx) => {
								return <Tag key={idx}>{elem.label}</Tag>;
							})}
						</FlexBox>
					</div>
				)}
			</div>
			{show && (
				<div className="mt-10">
					<FlexBox justify="start" gap={20}>
						<InputPickerField name="primary_role" title="Primary Role" onChange={handleInput} value={inputData?.primary_role?.label}>
							<InputPickerField.Option value="full_stack">Full-stack</InputPickerField.Option>
						</InputPickerField>
						<InputPickerField name="experience" title="Experience" onChange={handleInput} value={inputData?.experience?.label}>
							<InputPickerField.Option value="4_years">4 years</InputPickerField.Option>
						</InputPickerField>
					</FlexBox>
					<TagPickerField className="mt-15" name="other_roles" title="Open to the following roles" onChange={handleTag} values={otherRoles}>
						<TagPickerField.Option value="role_1">Role 1</TagPickerField.Option>
						<TagPickerField.Option value="role_2">Role 2</TagPickerField.Option>
						<TagPickerField.Option value="role_3">Role 3</TagPickerField.Option>
						<TagPickerField.Option value="role_4">Role 4</TagPickerField.Option>
					</TagPickerField>
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

export default Roles;
