import { colors } from './../../assets/theme/index';
import { ApplicationStatus } from '@/types/developer/application.type';

export const CApplicationStatus: { [key in ApplicationStatus]: string } = {
	ACCEPTED: colors.GREEN_BASE,
	IN_PROGRESS: colors.YELLOW_BASE,
	REFUSED: colors.RED_BASE,
	NEW: colors.YELLOW_BASE,
};
export const TxtApplicationStatus: { [key in ApplicationStatus]: string } = {
	ACCEPTED: 'Accepted',
	IN_PROGRESS: 'In progress',
	REFUSED: 'Not accepted',
	NEW: 'Pending',
};
