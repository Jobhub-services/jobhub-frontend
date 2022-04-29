import { FlexBox, Button } from 'staak-ui';
import { TextAreaField, TagPickerField, TagInputField } from '@/components/common';
import { useAppSelector } from '@/utils/appHooks';
import { StyledGap } from '../newjob.styles';
import Questions from './Questions';
import { JobArrayIndex, JobArrayStringIndex, JobStringIndex } from '@/types/jobs';
import { jobActions } from '@/modules/actions/company/job.actions';
import { useEffect } from 'react';
import { metadataActions } from '@/modules/actions/metadata.actions';

const QualificationsInfo = (props: any) => {
	const { createJob } = useAppSelector((state) => state.job);
	const { skills_list } = useAppSelector((state) => state.metadata);
	const data = createJob;

	useEffect(() => {
		metadataActions.getSkills();
	}, []);
	function handleNext(event: React.SyntheticEvent) {
		if (props.onNext) props.onNext(event);
	}
	function handlePrevious(event: React.SyntheticEvent) {
		if (props.onPreviouse) props.onPreviouse(event);
	}
	function handleInputTag(event: any, value: string[], name?: string) {
		const idx = name as JobArrayStringIndex;
		let tmp = { ...data };
		tmp[idx] = value;
		jobActions.saveJobData(tmp);
	}
	function handleTagPicker(event: any, value: { value: string; label: string }[], name?: string) {
		let tmp = { ...data };
		tmp.skills = value;
		jobActions.saveJobData(tmp);
	}
	function handleTxt(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const value = event.target.value;
		const name: JobStringIndex = event.target.name as JobStringIndex;
		let tmp = { ...data };
		tmp[name] = value;
		jobActions.saveJobData(tmp);
	}
	return (
		<>
			<FlexBox flexDirection="column" align="flex-start">
				<div style={{ width: '95%' }}>
					<h3>Experience details</h3>
					<StyledGap justify="flex-start" align="flex-start">
						<TagInputField name="education" title="Education" values={data.education} onChange={handleInputTag} />
						<TagInputField name="certification" title="Certification" values={data.certification} onChange={handleInputTag} />
					</StyledGap>
					<StyledGap align="flex-start" justify="flex-start">
						<TagPickerField name="skills" title="Skills" values={data.skills} onChange={handleTagPicker}>
							{skills_list?.map((elem, idx) => {
								return (
									<TagPickerField.Option key={idx} value={elem.value!}>
										{elem.label}
									</TagPickerField.Option>
								);
							})}
						</TagPickerField>
					</StyledGap>
					<TextAreaField
						className="mt-10"
						placeholder="Requirements"
						name="requirements"
						height="120px"
						value={data.requirements}
						onChange={handleTxt}
					>
						Job Requirements
					</TextAreaField>
				</div>
				<Questions />
			</FlexBox>
			<StyledGap align="flex-start" justify="flex-start">
				<Button variant="outlined" onClick={handlePrevious}>
					Back
				</Button>
				<Button onClick={handleNext}>Save & Continue</Button>
			</StyledGap>
		</>
	);
};

export default QualificationsInfo;
