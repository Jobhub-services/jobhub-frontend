import { colors } from '@/assets/theme';
import styled from 'styled-components';
import { PFJobType } from '@/models/component/common/common.interface';
import { useEffect, useState } from 'react';
import { CheckBox } from 'staak-ui';

const SH3 = styled.h3`
	font-size: 14px;
	margin: 10px 0;
	font-weight: 600;
	color: ${colors.BLACK_3};
`;
const OccupationType = (props: PFJobType) => {
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
		if (props.onChange) props.onChange(tmp, props.name);
	};

	return (
		<div className="mt-20">
			<SH3>{props.title}</SH3>
			<CheckBox className="mb-10" value="Full time" name="full_time" checked={jobType?.some((elem) => elem === 'Full time')} onChange={handleBox}>
				Full time
			</CheckBox>
			<CheckBox className="mb-10" value="Part time" name="part_time" checked={jobType?.some((elem) => elem === 'Part time')} onChange={handleBox}>
				Part time
			</CheckBox>
			<CheckBox className="mb-10" value="Permanent" name="permanent" checked={jobType?.some((elem) => elem === 'Permanent')} onChange={handleBox}>
				Permanent
			</CheckBox>
			<CheckBox className="mb-10" value="Temporary" name="temporary" checked={jobType?.some((elem) => elem === 'Temporary')} onChange={handleBox}>
				Temporary
			</CheckBox>
		</div>
	);
};

export default OccupationType;
