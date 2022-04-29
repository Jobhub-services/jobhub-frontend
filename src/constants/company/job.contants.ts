import { StatusType } from '@/types/common.type';
import { colors } from '@/assets/theme';

export const StatusTitle: { [key in StatusType]: string } = {
	ready: 'Active',
	open: 'Suspended',
	closed: 'Closed',
};

export const TextAvatarColors: string[] = [colors.RED_CLEAR_4, colors.YELLOW_CLEAR_4, colors.GREEN_CLEAR_4, colors.PINK_CLEAR_4, colors.BLUE_CLEAR_4];
