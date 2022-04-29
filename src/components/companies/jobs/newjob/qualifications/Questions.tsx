import React, { useState } from 'react';
import { TextAreaField } from '@/components/common';
import { SButton, SIcon } from '@/components/companies/jobs/newjob/newjob.styles';
import { useAppSelector } from '@/utils/appHooks';
import { PlusIcon, TrashIcon } from 'staak-ui';
import { TextArea, FlexBox } from 'staak-ui';
import { jobActions } from '@/modules/actions/company/job.actions';

const Questions = (props: any) => {
	const { createJob } = useAppSelector((state) => state.job);
	const data = createJob;

	function addQuestion(event: React.SyntheticEvent) {
		const tmp = { ...data };
		tmp.questions = [...tmp.questions!, ''];
		jobActions.saveJobData(tmp);
	}
	function removeQuestion(event: React.SyntheticEvent, index: number) {
		const tmp = { ...data };
		tmp.questions = tmp.questions?.filter((elem, idx) => idx !== index);
		jobActions.saveJobData(tmp);
	}
	function handleTxt(event: React.ChangeEvent<HTMLTextAreaElement>, index: number) {
		const value = event.target.value;
		const tmp = { ...data };
		let arrayTmp = [...tmp.questions!];
		arrayTmp![index] = value;
		tmp.questions = arrayTmp;
		jobActions.saveJobData(tmp);
	}
	return (
		<div style={{ width: '95%' }}>
			<h3>Pre-qualifications</h3>
			<div>
				<div>
					{data.questions?.map((elem, key) => {
						return (
							<div key={key} className="mt-10">
								<FlexBox justify="space-between">
									<label>Question</label>
									<SIcon onClick={(event: React.SyntheticEvent) => removeQuestion(event, key)} width="25px" height="25px">
										<TrashIcon color="inherit" />
									</SIcon>
								</FlexBox>
								<TextArea
									className="mt-5 mb-10"
									placeholder="Question"
									name="questions"
									height="60px"
									value={elem}
									onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => handleTxt(event, key)}
								/>
							</div>
						);
					})}
					<SButton onClick={addQuestion} variant="text" startIcon={<PlusIcon />}>
						Add question
					</SButton>
				</div>
			</div>
		</div>
	);
};

export default Questions;
