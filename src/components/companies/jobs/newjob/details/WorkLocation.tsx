import { jobDispatcher } from '@/modules/actions/company/job.actions';
import { useAppSelector } from '@/utils/appHooks';
import { SButton, SIcon } from '@/components/companies/jobs/newjob/newjob.styles';
import { FlexBox, CheckBox, InputPicker, Input, TrashIcon, PlusIcon } from 'staak-ui';
import React from 'react';

const WorkLocation = ({
	errors,
}: {
	errors: {
		country: boolean;
		city: boolean;
	};
}) => {
	const { createJob } = useAppSelector((state) => state.job);
	const { countries } = useAppSelector((state) => state.metadata);
	const data = createJob;

	const addWorkLocation = (event: React.SyntheticEvent) => {
		const tmp = { ...data };
		tmp.work_location = [...data.work_location!, { country: { id: '', name: '' }, city: '' }];
		jobDispatcher.saveJobData(tmp);
	};
	const removeWorkLocation = (event: React.SyntheticEvent, index: number) => {
		const tmp = { ...data };
		tmp.work_location = tmp.work_location?.filter((elem, idx) => idx !== index);
		jobDispatcher.saveJobData(tmp);
	};
	const handleInput = (event: any, value: string, name: string, index: number) => {
		let tmp = { ...data };
		let tmpArray = [...tmp.work_location!];
		tmpArray[index] = { country: tmpArray[index]!.country, city: value };
		tmp.work_location = tmpArray;
		jobDispatcher.saveJobData(tmp);
	};
	const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { checked, name } = event.target;
		let tmp = { ...data };
		tmp[name as 'visa_sponsorship' | 'work_remotly'] = checked;
		jobDispatcher.saveJobData(tmp);
	};
	const handleInputPicker = (event: React.MouseEvent<HTMLDivElement>, value: string, label: string, name: string, index: number) => {
		let tmp = { ...data };
		let tmpArray = [...tmp.work_location!];
		tmpArray[index] = { country: { id: value, name: label }, city: tmpArray[index].city };
		tmp.work_location = tmpArray;
		jobDispatcher.saveJobData(tmp);
	};
	return (
		<div>
			<div>Work location</div>
			<div style={{ marginTop: '12px' }}>
				<CheckBox name="visa_sponsorship" value={data.visa_sponsorship} checked={data.visa_sponsorship} onChange={handleCheckBox}>
					Visa Sponsorship
				</CheckBox>
				<CheckBox className="mt-15" name="work_remotly" value={data.work_remotly} checked={data.work_remotly} onChange={handleCheckBox}>
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
								error={elem.country?.name === '' && errors.country}
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
								error={elem.city === '' && errors.city}
							/>
							{/*<SIcon onClick={(event: React.SyntheticEvent) => removeWorkLocation(event, idx)} width="25px" height="25px">
								<TrashIcon color="inherit" />
							</SIcon>*/}
						</FlexBox>
					);
				})}
			</div>
			{/*<SButton onClick={addWorkLocation} variant="text" startIcon={<PlusIcon />}>
				Add location
			</SButton>*/}
		</div>
	);
};

export default WorkLocation;
