import CurrentSubscription from '@/components/companies/subscription/CurrentSubscription';
import SubscriptionOptions from '@/components/companies/subscription/SubscriptionOptions';
import { settingsDispatcher } from '@/modules/actions/company/settings.actions';
import { useAppSelector } from '@/utils/appHooks';
import { pushNotification } from '@/utils/helpers';
import { useEffect } from 'react';

const SubscriptionView = () => {
	const { errors } = useAppSelector((state) => state.companySettings);
	useEffect(() => {
		if (errors?.status) {
			pushNotification.error(errors.messages);
			settingsDispatcher.setErrors({ status: false, message: '' });
		}
	}, [errors]);
	return (
		<div>
			<CurrentSubscription />
			<SubscriptionOptions />
		</div>
	);
};

export default SubscriptionView;
