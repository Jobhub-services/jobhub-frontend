import { PendingIcon, SuccessIcon } from '@/assets/icons';
import { colors } from '@/assets/theme/index';
import { ApplicationStatus } from '@/types/developer/application.type';
import { CloseIcon } from 'staak-ui';

export const CApplicationStatus: { [key in ApplicationStatus]: string } = {
	ACCEPTED: colors.GREEN_BASE,
	IN_PROGRESS: colors.YELLOW_BASE,
	REFUSED: colors.RED_BASE,
	NEW: colors.YELLOW_BASE,
};

export const BCApplicationStatus: { [key in ApplicationStatus]: string } = {
	ACCEPTED: colors.GREEN_CLEAR_5,
	IN_PROGRESS: colors.YELLOW_CLEAR_5,
	REFUSED: colors.RED_CLEAR_5,
	NEW: colors.YELLOW_CLEAR_5,
};

export const TxtApplicationStatus: { [key in ApplicationStatus]: string } = {
	ACCEPTED: 'Accepted',
	IN_PROGRESS: 'In progress',
	REFUSED: 'Not accepted',
	NEW: 'Pending',
};

export const IconStatus: { [key in ApplicationStatus]: React.ReactNode } = {
	ACCEPTED: <SuccessIcon />,
	IN_PROGRESS: <SuccessIcon />,
	REFUSED: <CloseIcon height="25px" width="25px" />,
	NEW: <PendingIcon />,
};

export const ContentStatus: { [key in ApplicationStatus]: string } = {
	ACCEPTED: 'Accepted',
	IN_PROGRESS: 'In progress',
	REFUSED: 'Not accepted',
	NEW: 'Application pending Your application is awaiting review by Mennr. We’ll notify you when they make a decision.',
};
