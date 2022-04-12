import { StatusType } from '@/types/jobs';
import { colors } from '@/assets/theme';

export const StatusColors: { [key in StatusType]: string } = {
	active: colors.GREEN_CLEAR_4,
	closed: colors.RED_CLEAR_4,
	suspended: colors.YELLOW_CLEAR_4,
};
export const StatusValue: { [key in StatusType]: string } = {
	active: 'Active',
	closed: 'Closed',
	suspended: 'Suspended',
};

export const TextAvatarColors: string[] = [colors.RED_CLEAR_4, colors.YELLOW_CLEAR_4, colors.GREEN_CLEAR_4, colors.PINK_CLEAR_4, colors.BLUE_CLEAR_4];
