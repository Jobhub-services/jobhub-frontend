import { TagPickerField } from '@/components/common';
import { STitle } from '@/components/developers/jobs/filter/common.style';
import { CheckBox, FlexBox, Input } from 'staak-ui';

const Salary = () => {
	return (
		<div>
			<STitle>Job Salary</STitle>
			<div>
				<FlexBox justify="start" gap={20}>
					<CheckBox className="mb-10">Hourly</CheckBox>
					<FlexBox gap={10}>
						<Input placeholder="From" size="sm" />
						<Input placeholder="To" size="sm" />
					</FlexBox>
				</FlexBox>
				<FlexBox justify="start" gap={20}>
					<CheckBox className="mb-10">Monthly</CheckBox>
					<FlexBox gap={10}>
						<Input placeholder="From" />
						<Input placeholder="To" />
					</FlexBox>
				</FlexBox>
				<FlexBox justify="start" gap={20}>
					<CheckBox className="mb-10">Annually</CheckBox>
					<FlexBox gap={10}>
						<Input placeholder="From" />
						<Input placeholder="To" />
					</FlexBox>
				</FlexBox>
				<TagPickerField name="currencies" title="Currencies" />
			</div>
		</div>
	);
};

export default Salary;
