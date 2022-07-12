import { useEffect, useState } from 'react';
import { useAppSelector } from '@/utils/appHooks';
import { STitle } from '@/components/developers/jobs/filter/common.style';
import { metadataActions } from '@/modules/actions/metadata.actions';
import { TagPicker } from 'staak-ui';
import { TValueLabel } from '@/types/developer/job.type';
import { PFJobCategories } from '@/models/component/developer/jobs.interface';

const JobCategories = ({ onChange, jobCategories, clear }: PFJobCategories) => {
	const [localCateg, setLocalCateg] = useState<TValueLabel[]>();
	const { job_categories } = useAppSelector((state) => state.metadata);
	useEffect(() => {
		if (job_categories?.count === 0) {
			metadataActions.getJobCategories();
		}
		setLocalCateg(jobCategories ?? []);
	}, [clear]);
	const handleChange = (event: any, value: { value: string; label: string }[], name?: string) => {
		setLocalCateg(value);
		if (onChange) onChange(value, 'job_categories');
	};
	return (
		<div className="mt-15">
			<STitle>Job categories</STitle>
			<TagPicker name="job_categories" placeholder="Choose your categories" values={localCateg} onChange={handleChange}>
				{job_categories?.content?.map((elem, idx) => {
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

export default JobCategories;
