import { PendingIcon, SuccessIcon } from '@/assets/icons';
import { colors } from '@/assets/theme/index';
import { ApplicationStatus } from '@/types/developer/application.type';
import { CloseIcon } from 'staak-ui';

export const CApplicationStatus: { [key in ApplicationStatus]: string } = {
	ACCEPTED: colors.PINK_BASE,
	IN_PROGRESS: colors.BLUE_BASE,
	DECLINED: colors.RED_BASE,
	NEW: colors.YELLOW_BASE,
	HIRED: colors.GREEN_BASE,
};

export const BCApplicationStatus: { [key in ApplicationStatus]: string } = {
	ACCEPTED: colors.PINK_CLEAR_5,
	IN_PROGRESS: colors.BLUE_CLEAR_5,
	DECLINED: colors.RED_CLEAR_5,
	NEW: colors.YELLOW_CLEAR_5,
	HIRED: colors.GREEN_CLEAR_5,
};

export const TxtApplicationStatus: { [key in ApplicationStatus]: string } = {
	ACCEPTED: 'Accepted',
	IN_PROGRESS: 'In progress',
	DECLINED: 'Not accepted',
	NEW: 'Pending',
	HIRED: 'Hired',
};

export const IconStatus: { [key in ApplicationStatus]: React.ReactNode } = {
	ACCEPTED: <SuccessIcon />,
	IN_PROGRESS: <SuccessIcon />,
	DECLINED: <CloseIcon height="25px" width="25px" />,
	NEW: <PendingIcon />,
	HIRED: <SuccessIcon />,
};

export const ContentStatus: { [key in ApplicationStatus]: string } = {
	ACCEPTED: 'Accepted',
	IN_PROGRESS: 'In progress',
	DECLINED: 'Not accepted',
	NEW: 'Application pending Your application is awaiting review by Mennr. We’ll notify you when they make a decision.',
	HIRED: 'Application pending Your application is awaiting review by Mennr. We’ll notify you when they make a decision.',
};
