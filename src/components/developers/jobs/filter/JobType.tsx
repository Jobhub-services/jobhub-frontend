import { STitle } from '@/components/developers/jobs/filter/common.style';
import { PFJobType } from '@/models/component/common/common.interface';
import { useEffect, useState } from 'react';
import { CheckBox, FlexBox } from 'staak-ui';

const JobType = (props: PFJobType) => {
	const [jobType, setJobType] = useState<string[]>([]);

	useEffect(() => {
		setJobType(props?.jobType ?? []);
	}, [props.clear]);

	const handleBox = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = event.target;
		let tmp = [...jobType];
		if (checked) tmp.push(value);
		else tmp = tmp.filter((elem) => elem !== value);
		setJobType(tmp);
		if (props.onChange) props.onChange(tmp, 'job_type');
	};
	return (
		<div className="mt-15">
			<STitle>Job type</STitle>
			<FlexBox justify="start" gap={50}>
				<div>
					<CheckBox className="mb-10" value="Full time" name="full_time" checked={jobType.some((elem) => elem === 'Full time')} onChange={handleBox}>
						Full time
					</CheckBox>
					<CheckBox className="mb-10" value="Part time" name="part_time" checked={jobType.some((elem) => elem === 'Part time')} onChange={handleBox}>
						Part time
					</CheckBox>
				</div>
				<div>
					<CheckBox className="mb-10" value="Permanent" name="permanent" checked={jobType.some((elem) => elem === 'Permanent')} onChange={handleBox}>
						Permanent
					</CheckBox>
					<CheckBox className="mb-10" value="Temporary" name="temporary" checked={jobType.some((elem) => elem === 'Temporary')} onChange={handleBox}>
						Temporary
					</CheckBox>
				</div>
			</FlexBox>
		</div>
	);
};

export default JobType;
