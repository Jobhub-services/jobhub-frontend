import { colors } from '@/assets/theme';
import { PFSkills } from '@/models/component/common/common.interface';
import styled from 'styled-components';
import { TagPicker } from 'staak-ui';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useState } from 'react';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { TValueLabel } from '@/types/common.type';
const SH3 = styled.h3`
	font-size: 14px;
	margin: 10px 0;
	font-weight: 600;
	color: ${colors.BLACK_3};
`;

const Skills = ({ onChange, skills, clear }: PFSkills) => {
	const { skills_list } = useAppSelector((state) => state.metadata);
	const [localSkills, setLocalSkills] = useState<{ _id?: string | undefined; name?: string | undefined }[]>([]);
	const [tmpArray, setTmpArray] = useState<TValueLabel[]>([]);

	useEffect(() => {
		if (skills_list?.count === 0) metadataActions.getSkills();
		setTmpArray(skills ?? []);
	}, [clear]);

	const handleChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		if (value === '') setLocalSkills([]);
		else {
			const tmp = skills_list?.content?.filter((elem) => elem.name?.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()));
			setLocalSkills(tmp!);
		}
	};

	const pickerChange = (event: any, value: { value: string; label: string }[], name?: string) => {
		setTmpArray(value);
		if (onChange) onChange(value, 'skills');
	};
	return (
		<div className="mt-20">
			<SH3>Skills</SH3>
			<TagPicker name="skills" placeholder="Choose your skills" values={tmpArray} onChange={pickerChange} onDataChange={handleChangeData}>
				{localSkills?.map((elem, idx) => {
					return (
						<TagPicker.Option key={idx} value={elem._id!}>
							{elem.name}
						</TagPicker.Option>
					);
				})}
			</TagPicker>
		</div>
	);
};

export default Skills;
