import { PopModel, TagPickerField } from '@/components/common';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useState } from 'react';
import { colors } from '@/assets/theme';
import { InputPickerField } from '@/components/common';
import { Button, FlexBox, Tag } from 'staak-ui';
import { SButton, SpanTitle, SSpan } from '@/components/developers/profile/common/shared.style';
import styled from 'styled-components';
import { profileAction } from '@/modules/actions/developer/profile.actions';
import { PlusIcon } from '@/assets/icons';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { CExperience } from '@/constants/developer/profile.constants';

const SubTitle = styled.span`
	font-weight: 500;
	color: ${colors.BLACK_4};
	font-size: 15px;
`;
const SSpanRole = styled.span`
	font-weight: 600;
	color: ${colors.BLACK_9};
`;
const SWarraper = styled(FlexBox)`
	flex-wrap: wrap;
	justify-content: start !important;
	gap: 15px;
	margin-top: 10px;
`;
const Roles = () => {
	const { roles } = useAppSelector((state) => state.metadata);
	const { role } = useAppSelector((state) => state.developerProfile.profile);
	const [otherRoles, setOtherRoles] = useState<{ value?: string; label?: string }[]>([]);
	const [inputData, setInputData] = useState<any>({});
	const [show, setShow] = useState(false);
	const dataEmpty = (!role?.other_roles || role?.other_roles?.length! === 0) && (!role?.primary_role || role?.primary_role?.name === '');
	useEffect(() => {
		if (roles?.size === 0) {
			metadataActions.getRoles();
		}
	}, []);
	function handleTag(event: any, value: { value?: string; label?: string }[], name?: string) {
		setOtherRoles(value);
	}
	function handleInput(event: any, value?: string, label?: string, name?: string) {
		let tmp = { ...inputData };
		if (name === 'experience') tmp['experience'] = value;
		else tmp['primary_role'] = { _id: value, name: label };
		setInputData(tmp);
	}
	function addRole() {
		const tmp = { primary_role: role?.primary_role, experience: role?.experience };
		setInputData(tmp);
		setOtherRoles(
			role?.other_roles?.map((elem) => {
				return { value: elem._id!, label: elem.name! };
			}) ?? []
		);
		setShow(true);
	}
	function onSave() {
		let tmp = {
			primary_role: inputData['primary_role']._id,
			experience: inputData['experience'],
			other_roles: otherRoles.map((elem) => elem.value!),
		};
		profileAction.setAttribute(tmp, 'role');
		setShow(false);
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
				{role?.primary_role && role?.primary_role?.name !== '' && (
					<div>
						<SubTitle>Primary role</SubTitle>
						<FlexBox justify="start" gap={15} className="mt-10">
							<SSpanRole>{role?.primary_role?.name}</SSpanRole>
							{role?.experience !== '' && <SSpanRole>{role?.experience} of experience</SSpanRole>}
						</FlexBox>
					</div>
				)}
				{role?.other_roles?.length! > 0 && (
					<div className="mt-15">
						<SubTitle>Open to the following roles</SubTitle>
						<SWarraper>
							{role?.other_roles?.map((elem, idx) => {
								return <Tag key={idx}>{elem.name}</Tag>;
							})}
						</SWarraper>
					</div>
				)}
				{dataEmpty && <SSpan>Select your primary role and the roles you are open to work on</SSpan>}
			</div>
			{show && (
				<PopModel closed={!show} onClose={() => setShow(false)}>
					<PopModel.Header>
						<SpanTitle>Add roles</SpanTitle>
					</PopModel.Header>
					<PopModel.Body>
						<FlexBox justify="start" gap={20}>
							<InputPickerField name="primary_role" title="Primary Role" onChange={handleInput} value={inputData?.primary_role?.name}>
								{roles?.content?.map((elem, idx) => {
									return <InputPickerField.Option value={elem._id!}>{elem.name}</InputPickerField.Option>;
								})}
							</InputPickerField>
							<InputPickerField name="experience" title="Experience" onChange={handleInput} value={inputData?.experience}>
								{CExperience.map((elem, idx) => {
									return (
										<InputPickerField.Option key={idx} value={elem}>
											{elem}
										</InputPickerField.Option>
									);
								})}
							</InputPickerField>
						</FlexBox>
						<TagPickerField
							className="mt-15 mb-15"
							name="other_roles"
							title="Open to the following roles"
							placeholder="Select other roles"
							onChange={handleTag}
							values={otherRoles}
						>
							{roles?.content?.map((elem, idx) => {
								return <TagPickerField.Option value={elem._id!}>{elem.name}</TagPickerField.Option>;
							})}
						</TagPickerField>
					</PopModel.Body>
					<PopModel.Footer>
						<FlexBox className="mt-15" justify="end" gap={10} width="100%">
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
					</PopModel.Footer>
				</PopModel>
			)}
		</div>
	);
};

export default Roles;
