import { colors } from '@/assets/theme';
import { StatusType } from '@/types/talent.type';

export const StatusColors: { [key in StatusType]: string } = { ready: colors.GREEN_BASE, open: colors.YELLOW_BASE, closed: colors.RED_BASE };
export const TitleStatus: { [key in StatusType]: string } = { ready: 'Ready To Interview', open: 'Open To Offers', closed: 'Closed To Offers' };
