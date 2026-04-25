import { EditIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { InputDateRangeField, InputField, InputPickerField, TextAreaField } from '@/components/common';
import { profileAction } from '@/modules/actions/developer/profile.actions';
import { WorkExperienceType } from '@/types/developer/profile.type';
import { useAppSelector } from '@/utils/appHooks';
import React, { Fragment, useState } from 'react';
import { FlexBox, PlusIcon, Button, Radio, HrDivider, TrashIcon } from 'staak-ui';
import styled from 'styled-components';
import { SpanTitle, SButton, WorkCard, SSpan } from '@/components/developers/profile/common';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { PopModel } from '@/components/common';

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
	const { countries } = useAppSelector((state) => state.metadata);
	const [show, setShow] = useState(false);
	const [workExpe, setWorkExp] = useState<WorkExperienceType>({});
	const getCountries = () => {
		if (countries?.size === 0 && countries.count === 0) {
			metadataActions.getCountries();
		}
	};
	const addWork = () => {
		setShow(true);
		getCountries();
	};
	const onSave = () => {
		let tmp = [...work_experience!];
		if (workExpe._id) {
			tmp = tmp.filter((elem) => elem._id !== workExpe._id);
		}

		tmp.push(workExpe);
		setShow(false);
		setWorkExp({});
		profileAction.setAttribute(tmp, 'work_experience');
	};
	const handleInput = (event: any, value?: string, name?: string) => {
		let tmp = { ...workExpe };
		tmp[name as 'title' | 'company_name' | 'description'] = value;
		setWorkExp(tmp);
	};
	const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
		let tmp = { ...workExpe };
		const { value } = event.target;
		tmp.job_type = value as 'Full time' | 'Part time';
		setWorkExp(tmp);
	};
	function handlePicker(event: any, value: string, label: string, name: string) {
		let tmp = { ...workExpe };
		tmp['location'] = { _id: value, name: label };
		setWorkExp(tmp);
	}
	function handleDate(date: [Date | null, Date | null]) {
		let tmp = { ...workExpe };
		tmp.startDate = date[0];
		tmp.endDate = date[1];
		setWorkExp(tmp);
	}
	const handleRemove = (_id: string) => {
		const tmp = work_experience?.filter((elem) => elem._id !== _id);
		profileAction.setAttribute(tmp, 'work_experience');
	};
	const handleEdit = (_id: string) => {
		getCountries();
		const tmp = work_experience?.find((elem) => elem._id === _id);
		if (tmp) {
			setWorkExp(tmp);
			setShow(true);
		}
	};
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
						<Fragment key={idx}>
							<WElem justify="space-between" gap={30}>
								<WorkCard key={idx} {...elem} width="85%" />
								<FlexBox gap={20} className="btns">
									<SButton onClick={() => handleEdit(elem._id!)}>
										<EditIcon width="17px" height="17px" color={colors.PURPLE_BASE} />
									</SButton>
									<SButton color={colors.RED_CLEAR_4} onClick={() => handleRemove(elem._id!)}>
										<TrashIcon width="17px" height="17px" color={colors.RED_CLEAR_1} />
									</SButton>
								</FlexBox>
							</WElem>
							<HrDivider top={15} side={15} />
						</Fragment>
					);
				})}
				{work_experience?.length === 0 && <SSpan className="mt-15">Tell companies about other positions you have held</SSpan>}
			</div>
			{show && (
				<PopModel closed={!show} onClose={() => setShow(false)}>
					<PopModel.Header>
						<SpanTitle>Add work experience</SpanTitle>
					</PopModel.Header>
					<PopModel.Body>
						<div>
							<FlexBox gap={15}>
								<InputField name="title" placeholder="Title" value={workExpe.title} onDataChange={handleInput}>
									Title
								</InputField>
								<InputField name="company_name" placeholder="Company" value={workExpe.company_name} onDataChange={handleInput}>
									Company
								</InputField>
							</FlexBox>
							<FlexBox className="mt-10" gap={15}>
								<InputDateRangeField
									name="period"
									title="Period"
									placeholder="From - To"
									onChange={handleDate}
									startDate={workExpe.startDate && new Date(workExpe.startDate!)}
									endDate={workExpe.endDate && new Date(workExpe.endDate!)}
								/>
								<InputPickerField name="location" title="Location" placeholder="Country" value={workExpe.location?.name} onChange={handlePicker}>
									{countries?.content?.map((elem, idx) => {
										const str = elem.name + ' (' + elem.code?.toUpperCase() + ')';
										return (
											<InputPickerField.Option key={idx} value={elem._id!}>
												{str}
											</InputPickerField.Option>
										);
									})}
								</InputPickerField>
							</FlexBox>
							<TextAreaField
								className="mt-10"
								name="description"
								placeholder="Description"
								height="150px"
								value={workExpe.description}
								onDataChange={handleInput}
							>
								Description
							</TextAreaField>
							<div className="mt-15">
								<span>Job type</span>
								<FlexBox gap={10} justify="start" className="mt-10">
									<Radio value="Full time" name="job_type" checked={workExpe.job_type === 'Full time'} onChange={handleRadio}>
										Full-time
									</Radio>
									<Radio value="Part time" name="job_type" checked={workExpe.job_type === 'Part time'} onChange={handleRadio}>
										Part-time
									</Radio>
								</FlexBox>
							</div>
						</div>
					</PopModel.Body>
					<PopModel.Footer>
						<FlexBox className="mt-15" justify="end" gap={10} width="100%">
							<Button
								size="md"
								variant="text"
								onClick={() => {
									setWorkExp({});
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

export default WorkExperience;
