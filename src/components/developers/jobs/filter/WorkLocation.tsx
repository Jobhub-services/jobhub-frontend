import { STitle } from '@/components/developers/jobs/filter/common.style';
import { PFWorkLocation } from '@/models/component/developer/jobs.interface';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { TFWorkLocation } from '@/types/developer/job.type';
import { useAppSelector } from '@/utils/appHooks';
import { useEffect, useState } from 'react';
import { CheckBox, TagPicker } from 'staak-ui';

const WorkLocation = ({ onChange, worklocation, clear }: PFWorkLocation) => {
	const [localLocation, setLocalLocation] = useState<TFWorkLocation>();
	const { countries } = useAppSelector((state) => state.metadata);
	useEffect(() => {
		if (countries?.count === 0) metadataActions.getCountries();
		setLocalLocation(worklocation);
	}, [clear]);
	const handleChange = (event: any, value: { value: string; label: string }[], name?: string) => {
		let tmp = { ...localLocation };
		tmp.countries = value;
		setLocalLocation(tmp);
		if (onChange) onChange(tmp, 'work_location');
	};
	const handleBox = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = event.target;
		let tmp = { ...localLocation };
		tmp.remote = checked;
		setLocalLocation(tmp);
		if (onChange) onChange(tmp, 'work_location');
	};
	return (
		<div className="mt-15">
			<STitle>Work location</STitle>
			<div className="mb-10">
				<CheckBox value={localLocation?.remote} checked={localLocation?.remote} onChange={handleBox}>
					Remote work
				</CheckBox>
				<TagPicker
					name="work_location"
					placeholder="Choose your countries"
					values={localLocation?.countries ?? []}
					className="mt-15"
					onChange={handleChange}
				>
					{countries?.content?.map((elem, idx) => {
						const str = elem.name + '(' + elem.code + ')';
						return (
							<TagPicker.Option key={idx} value={elem._id!}>
								{str}
							</TagPicker.Option>
						);
					})}
				</TagPicker>
			</div>
		</div>
	);
};

export default WorkLocation;
