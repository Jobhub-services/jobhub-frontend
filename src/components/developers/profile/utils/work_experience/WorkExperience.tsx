import { EditIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { InputDateRangeField, InputField, InputPickerField, TextAreaField } from '@/components/common';
import { profileAction } from '@/modules/actions/developer/profile.actions';
import { WorkExperienceType } from '@/types/developer/profile.type';
import { useAppSelector } from '@/utils/appHooks';
import React, { useState } from 'react';
import { FlexBox, PlusIcon, Button, Radio, HrDivider, TrashIcon } from 'staak-ui';
import styled from 'styled-components';
import { SpanTitle, SButton } from '../shared.style';
import WorkElem from './WorkElem';

const WElem = styled(FlexBox)`
	margin-top: 10px;
	.btns {
		display: none;
	}
	&:first-child .btns,
	&:hover .btns {
		display: flex;
	}
`;

const WorkExperience = () => {
	const { work_experience } = useAppSelector((state) => state.developerProfile.profile);
	const [show, setShow] = useState(false);
	const [workExpe, setWorkExp] = useState<WorkExperienceType>({ location: {} });
	function addWork() {
		setShow(true);
	}
	function onSave() {
		const tmp = [...work_experience!, workExpe];
		profileAction.setAttribute(tmp, 'work_experience');
		setShow(false);
		setWorkExp({ location: {} });
	}
	function handleInput(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const { value, name } = event.target;
		let tmp = { ...workExpe };
		if (name === 'job_type') tmp.job_type = value as 'Full-time' | 'Part-time';
		else tmp[name as 'title' | 'company_name' | 'description'] = value;
		setWorkExp(tmp);
	}
	function handlePicker(event: any, value: string, label: string, name: string) {
		let tmp = { ...workExpe };
		tmp[name as 'location']!.id = value;
		tmp[name as 'location']!.label = label;
		setWorkExp(tmp);
	}
	function handleDate(date: [Date | null, Date | null]) {
		let tmp = { ...workExpe };
		tmp.startDate = date[0];
		tmp.endDate = date[1];
		setWorkExp(tmp);
	}
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Work experience</SpanTitle>
				<SButton padding={0} onClick={addWork}>
					<PlusIcon color={colors.PURPLE_BASE} width="23px" height="23px" />
				</SButton>
			</FlexBox>
			<div>
				{work_experience?.map((elem, idx) => {
					return (
						<>
							<WElem justify="space-between" key={idx} gap={30}>
								<WorkElem key={idx} {...elem} />
								<FlexBox gap={20} className="btns">
									<SButton>
										<EditIcon width="17px" height="17px" color={colors.PURPLE_BASE} />
									</SButton>
									<SButton color={colors.RED_CLEAR_4}>
										<TrashIcon width="17px" height="17px" color={colors.RED_CLEAR_1} />
									</SButton>
								</FlexBox>
							</WElem>
							<HrDivider top={15} side={15} />
						</>
					);
				})}
			</div>
			{show && (
				<div>
					<FlexBox gap={10}>
						<InputField name="title" placeholder="Title" onChange={handleInput}>
							Title
						</InputField>
						<InputField name="company_name" placeholder="Company" onChange={handleInput}>
							Company
						</InputField>
					</FlexBox>
					<FlexBox gap={10}>
						<InputDateRangeField
							name="period"
							title="Period"
							placeholder="From - To"
							onChange={handleDate}
							startDate={workExpe.startDate}
							endDate={workExpe.endDate}
						/>
						<InputPickerField name="location" title="Location" onChange={handlePicker}>
							<InputPickerField.Option value="russia">Russia</InputPickerField.Option>
						</InputPickerField>
					</FlexBox>
					<TextAreaField name="description" placeholder="Description" height="100px" onChange={handleInput}>
						Description
					</TextAreaField>
					<div className="mt-15">
						<span>Job type</span>
						<FlexBox gap={10} justify="start" className="mt-10">
							<Radio value="Full-time" name="job_type" checked={workExpe.job_type === 'Full-time'} onChange={handleInput}>
								Full-time
							</Radio>
							<Radio value="Part-time" name="job_type" checked={workExpe.job_type === 'Part-time'} onChange={handleInput}>
								Part-time
							</Radio>
						</FlexBox>
					</div>
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

export default WorkExperience;
