import { jobActions } from '@/modules/actions/company/job.actions';
import { useAppSelector } from '@/utils/appHooks';
import { SButton, SIcon } from '@/components/companies/jobs/newjob/newjob.styles';
import { FlexBox, CheckBox, InputPicker, Input, TrashIcon, PlusIcon } from 'staak-ui';
import React from 'react';

const WorkLocation = () => {
	const { createJob } = useAppSelector((state) => state.job);
	const { countries } = useAppSelector((state) => state.metadata);
	const data = createJob;
	function addWorkLocation(event: React.SyntheticEvent) {
		const tmp = { ...data };
		tmp.work_location = [...data.work_location!, { country: { id: '', name: '' }, city: '' }];
		jobActions.saveJobData(tmp);
	}
	function removeWorkLocation(event: React.SyntheticEvent, index: number) {
		const tmp = { ...data };
		tmp.work_location = tmp.work_location?.filter((elem, idx) => idx !== index);
		jobActions.saveJobData(tmp);
	}
	function handleInput(event: any, value: string, name: string, index: number) {
		let tmp = { ...data };
		let tmpArray = [...tmp.work_location!];
		tmpArray[index] = { country: tmpArray[index]!.country, city: value };
		tmp.work_location = tmpArray;
		jobActions.saveJobData(tmp);
	}
	function handleCheckBox(event: React.ChangeEvent<HTMLInputElement>) {
		const value = event.target.value;
		let tmp = { ...data };
		tmp.work_remotly = value === 'false';
		jobActions.saveJobData(tmp);
	}
	function handleInputPicker(event: React.MouseEvent<HTMLDivElement>, value: string, label: string, name: string, index: number) {
		let tmp = { ...data };
		let tmpArray = [...tmp.work_location!];
		tmpArray[index] = { country: { id: value, name: label }, city: tmpArray[index].city };
		tmp.work_location = tmpArray;
		jobActions.saveJobData(tmp);
	}
	return (
		<div>
			<div>Work location</div>
			<div style={{ marginTop: '12px' }}>
				<CheckBox name="work_remotly" value={data.work_remotly} checked={data.work_remotly} onChange={handleCheckBox}>
					Allow Remote Workers
				</CheckBox>
				{data.work_location?.map((elem, idx) => {
					return (
						<FlexBox className="mt-10" gap={15} key={idx} justify="flex-start">
							<InputPicker
								type="text"
								width="45%"
								name="work_location"
								placeholder="Country"
								title="Country"
								value={elem.country?.name}
								onChange={(evet: React.MouseEvent<HTMLDivElement>, value: string, label: string, name: string) =>
									handleInputPicker(evet, value, label, name, idx)
								}
							>
								{countries?.content?.map((elem, idx) => {
									const str = elem.name + ' (' + elem.code?.toUpperCase() + ')';
									return (
										<InputPicker.Option key={idx} value={elem._id!}>
											{str}
										</InputPicker.Option>
									);
								})}
							</InputPicker>
							<Input
								width="45%"
								name="work_location"
								placeholder="Region, City or Zip Code"
								value={elem.city}
								onDataChange={(event: any, value: string, name: string) => handleInput(event, value, name, idx)}
							/>
							<SIcon onClick={(event: React.SyntheticEvent) => removeWorkLocation(event, idx)} width="25px" height="25px">
								<TrashIcon color="inherit" />
							</SIcon>
						</FlexBox>
					);
				})}
			</div>
			<SButton onClick={addWorkLocation} variant="text" startIcon={<PlusIcon />}>
				Add location
			</SButton>
		</div>
	);
};

export default WorkLocation;
