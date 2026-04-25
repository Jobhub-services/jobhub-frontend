import { FlexBox, Button } from 'staak-ui';
import { TagPickerField, TagInputField } from '@/components/common';
import { useAppSelector } from '@/utils/appHooks';
import Questions from './Questions';
import { JobArrayStringIndex } from '@/types/company/jobs.type';
import { jobDispatcher } from '@/modules/actions/company/job.actions';
import { useEffect, useState } from 'react';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { HeaderContainer, StyledHeadline, StepContent } from '@/components/companies/jobs/newjob/newjob.styles';
import InputEditor from '@/components/common/input/InputEditor';

const QualificationsInfo = (props: any) => {
	const { createJob } = useAppSelector((state) => state.job);
	const { skills_list } = useAppSelector((state) => state.metadata);
	const [localSkills, setLocalSkills] = useState<{ _id?: string | undefined; name?: string | undefined }[]>([]);
	const [requirement, setRequirement] = useState('');
	const data = createJob;

	useEffect(() => {
		if (skills_list?.size === 0) metadataActions.getSkills();
		setRequirement(data.requirements ?? '');
	}, []);

	const handleEditor = (v: string, n: string) => {
		setRequirement(v);
	};

	const handleChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		if (value === '') setLocalSkills([]);
		else {
			const tmp = skills_list?.content?.filter((elem) => elem.name?.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()));
			setLocalSkills(tmp!);
		}
	};
	const handleNext = (event: React.SyntheticEvent) => {
		const tmp = { ...data, requirements: requirement };
		jobDispatcher.saveJobData(tmp);
		if (props.onNext) props.onNext(event);
	};

	const handlePrevious = (event: React.SyntheticEvent) => {
		if (props.onPreviouse) props.onPreviouse(event);
	};
	const handleInputTag = (event: any, value: string[], name?: string) => {
		const idx = name as JobArrayStringIndex;
		let tmp = { ...data };
		tmp[idx] = value;
		jobDispatcher.saveJobData(tmp);
	};
	const handleTagPicker = (event: any, value: { value: string; label: string }[], name?: string) => {
		let tmp = { ...data };
		tmp.skills = value;
		jobDispatcher.saveJobData(tmp);
	};
	return (
		<>
			<HeaderContainer justify="space-between">
				<StyledHeadline variant="h2" size="sm">
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
						<InputEditor
							className="mt-10"
							title="Job Requirements"
							name="requirements"
							initialValue={data.requirements}
							initOptions={{
								height: 300,
							}}
							onEditorChange={handleEditor}
						/>
					</div>
					<Questions />
				</FlexBox>
			</StepContent>
		</>
	);
};

export default QualificationsInfo;
