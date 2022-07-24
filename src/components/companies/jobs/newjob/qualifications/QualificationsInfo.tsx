import { FlexBox, Button } from 'staak-ui';
import { TextAreaField, TagPickerField, TagInputField } from '@/components/common';
import { useAppSelector } from '@/utils/appHooks';
import Questions from './Questions';
import { JobArrayStringIndex, JobStringIndex } from '@/types/company/jobs.type';
import { jobActions } from '@/modules/actions/company/job.actions';
import { useEffect, useState } from 'react';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { HeaderContainer, StyledHeadline, StepContent } from '@/components/companies/jobs/newjob/newjob.styles';

const QualificationsInfo = (props: any) => {
	const { createJob } = useAppSelector((state) => state.job);
	const { skills_list } = useAppSelector((state) => state.metadata);
	const [localSkills, setLocalSkills] = useState<{ _id?: string | undefined; name?: string | undefined }[]>([]);
	const data = createJob;

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
			<HeaderContainer justify="space-between">
				<StyledHeadline variant="h2" size="md">
					Qualifications
				</StyledHeadline>
				<FlexBox gap={10} align="flex-start" justify="flex-start">
					<Button variant="outlined" onClick={handlePrevious}>
						Back
					</Button>
					<Button onClick={handleNext}>Save & Continue</Button>
				</FlexBox>
			</HeaderContainer>
			<StepContent className="staak_scrollbar">
				<FlexBox flexDirection="column" align="flex-start">
					<div style={{ width: '95%' }}>
						<h3>Experience details</h3>
						<FlexBox gap={15} className="mt-10" justify="flex-start" align="flex-start">
							<TagInputField
								name="education"
								placeholder="Write required education and press enter"
								title="Education"
								values={data.education}
								onChange={handleInputTag}
							/>
							<TagInputField
								name="certification"
								title="Certification"
								placeholder="Write required and press enter "
								values={data.certification}
								onChange={handleInputTag}
							/>
						</FlexBox>
						<FlexBox gap={15} className="mt-10" align="flex-start" justify="flex-start">
							<TagPickerField
								name="skills"
								title="Skills"
								placeholder="Select required skills"
								values={data.skills}
								onChange={handleTagPicker}
								onDataChange={handleChangeData}
							>
								{localSkills?.map((elem, idx) => {
									return (
										<TagPickerField.Option key={idx} value={elem._id!}>
											{elem.name}
										</TagPickerField.Option>
									);
								})}
							</TagPickerField>
						</FlexBox>
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
			</StepContent>
		</>
	);
};

export default QualificationsInfo;
