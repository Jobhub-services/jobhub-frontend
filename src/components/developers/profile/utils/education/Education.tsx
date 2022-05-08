import { EditIcon } from '@/assets/icons';
import { colors } from '@/assets/theme';
import { InputDateRangeField, InputField } from '@/components/common';
import { profileAction } from '@/modules/actions/developer/profile.actions';
import { EducationType } from '@/types/developer/profile.type';
import { useAppSelector } from '@/utils/appHooks';
import React, { useState } from 'react';
import { Button, FlexBox, HrDivider, PlusIcon, TrashIcon } from 'staak-ui';
import styled from 'styled-components';
import { SButton, SpanTitle } from '../shared.style';
import EducationCard from './EducationCard';
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
const Education = () => {
	const { educations } = useAppSelector((state) => state.developerProfile.profile);
	const [educ, setEduc] = useState<EducationType>({});
	const [show, setShow] = useState(false);
	function addEducation() {
		setShow(true);
	}
	function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		let tmp = { ...educ };
		tmp[name as 'title' | 'school'] = value;
		setEduc(tmp);
	}
	function handleDate(date: [Date | null, Date | null]) {
		let tmp = { ...educ };
		tmp.startDate = date[0];
		tmp.endDate = date[1];
		setEduc(tmp);
	}
	function onSave() {
		const tmp = [...educations!, educ];
		profileAction.setAttribute(tmp, 'educations');
		setEduc({});
		setShow(false);
	}
	return (
		<div>
			<FlexBox justify="space-between" gap={20}>
				<SpanTitle>Educations</SpanTitle>
				<SButton padding={0} onClick={addEducation}>
					<PlusIcon color={colors.PURPLE_BASE} width="23px" height="23px" />
				</SButton>
			</FlexBox>
			<div>
				{educations?.map((elem, idx) => {
					return (
						<>
							<WElem justify="space-between" key={idx} gap={20}>
								<EducationCard {...elem} />;
								<FlexBox gap={20} className="btns">
									<SButton>
										<EditIcon width="17px" height="17px" color={colors.PURPLE_BASE} />
									</SButton>
									<SButton>
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
					<InputField name="title" placeholder="Title" onChange={handleInput}>
						Title
					</InputField>
					<FlexBox className="mt-10" gap={10}>
						<InputField name="school" placeholder="School" onChange={handleInput}>
							School
						</InputField>
						<InputDateRangeField name="period" title="Period" onChange={handleDate} startDate={educ.startDate} endDate={educ.endDate} />
					</FlexBox>
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

export default Education;
