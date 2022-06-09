import { StatusType } from '@/types';
import { ClosedToOffers, OpenToOffers, ReadyToOffers } from '@/assets/icons';
import { colors } from '@/assets/theme';

export const CProfileStatus: { [key in StatusType]: { value: string; descr: string; icon?: JSX.Element } } = {
	ready: {
		value: 'Ready to interview',
		descr: 'You’re actively looking for new work and ready to interview. Your job profile will be visible to startups.',
		icon: <ReadyToOffers color={colors.GREEN_BASE} />,
	},
	open: {
		value: 'Open to offers',
		descr: 'You’re not looking but open to hear about new opportunities. Your job profile will be visible to startups.',
		icon: <OpenToOffers color={colors.YELLOW_BASE} />,
	},
	closed: {
		value: 'Closed to offers',
		descr: 'You’re not looking and don’t want to hear about new opportunities. Your job profile will be hidden to startups.',
		icon: <ClosedToOffers color={colors.RED_BASE} />,
	},
};
