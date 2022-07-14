import { STitle } from '@/components/developers/jobs/filter/common.style';
import { PFJobType } from '@/models/component/common/common.interface';
import { TJobType } from '@/types/developer/job.type';
import { useEffect, useState } from 'react';
import { CheckBox, FlexBox } from 'staak-ui';

const JobType = (props: PFJobType) => {
	const [jobType, setJobType] = useState<TJobType>({});

	useEffect(() => {
		setJobType(props?.jobType ?? {});
	}, [props.clear]);

	const handleBox = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = event.target;
		let tmp = { ...jobType };
		tmp[name! as 'full_time'] = checked;
		setJobType(tmp);
		if (props.onChange) props.onChange(tmp, 'job_type');
	};
	return (
		<div className="mt-15">
			<STitle>Job type</STitle>
			<FlexBox justify="start" gap={50}>
				<div>
					<CheckBox className="mb-10" value={jobType?.full_time} name="full_time" checked={jobType?.full_time} onChange={handleBox}>
						Full time
					</CheckBox>
					<CheckBox className="mb-10" value={jobType?.part_time} name="part_time" checked={jobType?.part_time} onChange={handleBox}>
						Part time
					</CheckBox>
				</div>
				<div>
					<CheckBox className="mb-10" value={jobType?.permanent} name="permanent" checked={jobType?.permanent} onChange={handleBox}>
						Permanent
					</CheckBox>
					<CheckBox className="mb-10" value={jobType?.temporary} name="temporary" checked={jobType?.temporary} onChange={handleBox}>
						Temporary
					</CheckBox>
				</div>
			</FlexBox>
		</div>
	);
};

export default JobType;
