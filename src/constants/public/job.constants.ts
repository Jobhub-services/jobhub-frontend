import { colors } from '@/assets/theme';
import { JobTypes } from '@/types/public/job.type';

export const JobTypeColor: { [x in JobTypes]: string } = {
	'Full-time': colors.GREEN_BASE,
	'Part-time': colors.YELLOW_BASE,
};
