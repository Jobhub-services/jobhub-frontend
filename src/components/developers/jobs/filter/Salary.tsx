import { TagPickerField } from '@/components/common';
import { STitle } from '@/components/developers/jobs/filter/common.style';
import { PFJobSalary } from '@/models/component/developer/jobs.interface';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { TJobSalary } from '@/types/developer/job.type';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useState } from 'react';
import { CheckBox, FlexBox, Input } from 'staak-ui';
import styled from 'styled-components';

const CheckBoxContainer = styled.div`
	width: 15%;
`;
const Salary = ({ onChange, jobSalary, clear }: PFJobSalary) => {
	const { currencies } = useAppSelector((state) => state.metadata);
	const [localSalary, setLocalSalary] = useState<TJobSalary>({});
	useEffect(() => {
		if (currencies?.count === 0) metadataActions.getCurrency();
		setLocalSalary(jobSalary ?? {});
	}, [clear]);
	const handleInput = (event: any, value?: string, name?: string, type?: string) => {
		let tmp = { ...localSalary };
		const index = type as 'hourly' | 'monthly' | 'annually';
		let v = {};
		if (name === 'from') v = { checked: tmp[index]?.checked, from: value, to: tmp[index]?.to };
		else v = { checked: tmp[index]?.checked, from: tmp[index]?.from, to: value };
		tmp[index] = v;
		setLocalSalary(tmp);
		if (onChange) onChange(tmp, 'job_salary');
	};
	const handlePicker = (event: any, value: { value: string; label: string }[], name?: string) => {
		let tmp = { ...localSalary };
		tmp.currencies = value;
		setLocalSalary(tmp!);
		if (onChange) onChange(tmp, 'job_salary');
	};
	const handleBox = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		const tmp = { ...localSalary };
		const index = name as 'hourly' | 'monthly' | 'annually';
		const v = { checked: value === name, from: tmp[index]?.from, to: tmp[index]?.to };
		tmp[index] = v;
		setLocalSalary(tmp);
		if (onChange) onChange(tmp, 'job_salary');
	};
	return (
		<div>
			<STitle>Job Salary</STitle>
			<div>
				<FlexBox justify="start" gap={20}>
					<CheckBoxContainer>
						<CheckBox className="mb-10" value="hourly" name="hourly" checked={localSalary?.hourly?.checked} onChange={handleBox}>
							Hourly
						</CheckBox>
					</CheckBoxContainer>
					<FlexBox gap={20} width="100%">
						<Input
							placeholder="From"
							size="sm"
							name="from"
							value={localSalary.hourly?.from ?? ''}
							onDataChange={(e: any, v: any, n: any) => handleInput(e, v, n, 'hourly')}
						/>
						<Input
							placeholder="To"
							size="sm"
							name="to"
							value={localSalary.hourly?.to ?? ''}
							onDataChange={(e: any, v: any, n: any) => handleInput(e, v, n, 'hourly')}
						/>
					</FlexBox>
				</FlexBox>
				<FlexBox justify="start" gap={20} className="mt-15">
					<CheckBoxContainer>
						<CheckBox className="mb-10" value="monthly" name="monthly" checked={localSalary?.monthly?.checked} onChange={handleBox}>
							Monthly
						</CheckBox>
					</CheckBoxContainer>
					<FlexBox gap={20} width="100%">
						<Input
							placeholder="From"
							size="sm"
							name="from"
							value={localSalary.monthly?.from ?? ''}
							onDataChange={(e: any, v: any, n: any) => handleInput(e, v, n, 'monthly')}
						/>
						<Input
							placeholder="To"
							size="sm"
							name="to"
							value={localSalary.monthly?.to ?? ''}
							onDataChange={(e: any, v: any, n: any) => handleInput(e, v, n, 'monthly')}
						/>
					</FlexBox>
				</FlexBox>
				<FlexBox justify="start" gap={20} className="mt-15">
					<CheckBoxContainer>
						<CheckBox className="mb-10" value="annually" name="annually" checked={localSalary?.annually?.checked} onChange={handleBox}>
							Annually
						</CheckBox>
					</CheckBoxContainer>
					<FlexBox gap={20} width="100%">
						<Input
							placeholder="From"
							size="sm"
							name="from"
							value={localSalary.annually?.from ?? ''}
							onDataChange={(e: any, v: any, n: any) => handleInput(e, v, n, 'annually')}
						/>
						<Input
							placeholder="To"
							size="sm"
							name="to"
							value={localSalary.annually?.to ?? ''}
							onDataChange={(e: any, v: any, n: any) => handleInput(e, v, n, 'annually')}
						/>
					</FlexBox>
				</FlexBox>
				<TagPickerField
					name="currencies"
					title="Currencies"
					placeholder="Choose your currencies"
					onChange={handlePicker}
					values={localSalary?.currencies ?? []}
				>
					{currencies?.content?.map((elem, idx) => {
						const str = elem.name + '(' + elem.code + ')';
						return (
							<TagPickerField.Option key={idx} value={elem._id!}>
								{str}
							</TagPickerField.Option>
						);
					})}
				</TagPickerField>
			</div>
		</div>
	);
};

export default Salary;
