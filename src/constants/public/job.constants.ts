import { colors } from '@/assets/theme';
import { JobTypes } from '@/types/public/job.type';

export const JobTypeColor: { [x in JobTypes]: string } = {
	'Full time': colors.GREEN_BASE,
	'Part time': colors.YELLOW_BASE,
};

export const JobTypeBColor: { [x: string]: string } = {
	'Full time': colors.GREEN_CLEAR_4,
	'Part time': colors.YELLOW_CLEAR_4,
	Permanent: colors.PINK_CLEAR_4,
	Temporary: colors.BLUE_CLEAR_4,
};
