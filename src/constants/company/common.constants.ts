import { colors } from '@/assets/theme';
import { StatusType } from '@/types/common.type';

export const StatusColors: { [key in StatusType]: string } = { ready: colors.GREEN_BASE, open: colors.YELLOW_BASE, closed: colors.RED_BASE };
