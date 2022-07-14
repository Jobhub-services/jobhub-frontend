import { colors } from '@/assets/theme';
import styled from 'styled-components';
import { PFJobType } from '@/models/component/common/common.interface';
import { useEffect, useState } from 'react';
import { CheckBox } from 'staak-ui';
import { TJobType } from '@/types/developer/job.type';

const SH3 = styled.h3`
	font-size: 14px;
	margin: 10px 0;
	font-weight: 600;
	color: ${colors.BLACK_3};
`;
const OccupationType = (props: PFJobType) => {
	const [jobType, setJobType] = useState<TJobType>({});

	useEffect(() => {
		setJobType(props?.jobType ?? {});
	}, [props.clear]);

	const handleBox = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = event.target;
		let tmp = { ...jobType };
		tmp[name! as 'full_time'] = checked;
		setJobType(tmp);
		if (props.onChange) props.onChange(tmp, 'occupationType');
	};

	return (
		<div className="mt-20">
			<SH3>Occupation type</SH3>
			<CheckBox className="mb-10" value={jobType?.full_time} name="full_time" checked={jobType?.full_time} onChange={handleBox}>
				Full time
			</CheckBox>
			<CheckBox className="mb-10" value={jobType?.part_time} name="part_time" checked={jobType?.part_time} onChange={handleBox}>
				Part time
			</CheckBox>
			<CheckBox className="mb-10" value={jobType?.permanent} name="permanent" checked={jobType?.permanent} onChange={handleBox}>
				Permanent
			</CheckBox>
			<CheckBox className="mb-10" value={jobType?.temporary} name="temporary" checked={jobType?.temporary} onChange={handleBox}>
				Temporary
			</CheckBox>
		</div>
	);
};

export default OccupationType;
