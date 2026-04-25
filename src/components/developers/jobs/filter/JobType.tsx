import { STitle } from '@/components/developers/jobs/filter/common.style';
import { PFJobType } from '@/models/component/common/common.interface';
import { TJobType, TJobDuration } from '@/types';
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
					<CheckBox
						className="mb-10"
						value={TJobType.FULL_TIME}
						name="full_time"
						checked={jobType.some((elem) => elem === TJobType.FULL_TIME)}
						onChange={handleBox}
					>
						{TJobType.FULL_TIME}
					</CheckBox>
					<CheckBox
						className="mb-10"
						value={TJobType.PART_TIME}
						name="part_time"
						checked={jobType.some((elem) => elem === TJobType.PART_TIME)}
						onChange={handleBox}
					>
						{TJobType.PART_TIME}
					</CheckBox>
					<CheckBox
						className="mb-10"
						value={TJobType.CONTRACT}
						name="contract"
						checked={jobType.some((elem) => elem === TJobType.CONTRACT)}
						onChange={handleBox}
					>
						{TJobType.CONTRACT}
					</CheckBox>
				</div>
				<div>
					<CheckBox
						className="mb-10"
						value={TJobType.INTERNSHIP}
						name="internship"
						checked={jobType.some((elem) => elem === TJobType.INTERNSHIP)}
						onChange={handleBox}
					>
						{TJobType.INTERNSHIP}
					</CheckBox>
					<CheckBox
						className="mb-10"
						value={TJobDuration.PERMANENT}
						name="permanent"
						checked={jobType.some((elem) => elem === TJobDuration.PERMANENT)}
						onChange={handleBox}
					>
						{TJobDuration.PERMANENT}
					</CheckBox>
					<CheckBox
						className="mb-10"
						value={TJobDuration.TEMPORARY}
						name="temporary"
						checked={jobType.some((elem) => elem === TJobDuration.TEMPORARY)}
						onChange={handleBox}
					>
						{TJobDuration.TEMPORARY}
					</CheckBox>
				</div>
			</FlexBox>
		</div>
	);
};

export default JobType;
