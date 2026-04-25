import { PendingIcon, SuccessIcon } from '@/assets/icons';
import { colors } from '@/assets/theme/index';
import { ApplicationStatus } from '@/types/developer/application.type';
import { CloseIcon } from 'staak-ui';

export const CApplicationStatus: { [key in ApplicationStatus]: string } = {
	ACCEPTED: colors.PURPLE_2,
	IN_PROGRESS: colors.BLUE_BASE,
	DECLINED: colors.RED_BASE,
	NEW: colors.YELLOW_BASE,
	HIRED: colors.GREEN_BASE,
};

export const BCApplicationStatus: { [key in ApplicationStatus]: string } = {
	ACCEPTED: colors.PURPLE_1,
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
	ACCEPTED: <SuccessIcon color={colors.PURPLE_2} />,
	IN_PROGRESS: <SuccessIcon />,
	DECLINED: <CloseIcon height="20px" width="20px" color="red" />,
	NEW: <PendingIcon />,
	HIRED: <SuccessIcon />,
};

export const ContentStatus: { [key in ApplicationStatus]: string } = {
	ACCEPTED: 'Your application is accepted, you will move forwarde with the company',
	IN_PROGRESS: 'Your application is in progress, We’ll notify you when they make a final decision ',
	DECLINED: 'The company reviewed your application, but did not accept it.',
	NEW: 'Your application is awaiting review by the company. We’ll notify you when they make a decision.',
	HIRED: 'You are hired by the company. you are now a member.',
};
