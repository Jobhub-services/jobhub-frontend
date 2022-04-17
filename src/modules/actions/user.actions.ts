import { httpClient } from '@/config/httpClient/HttpClient';
import dispatchToStore from '@/utils/store';
import { storeActions } from '@/modules/store/user.store';
import { IUser } from '@/models/store/user.interface';
import { API_PATHS } from '@/constants/api.constants';

const { USERS_SERVICE } = API_PATHS;

export const userDispatchers = {
	setUserInfo(user: IUser) {
		dispatchToStore(storeActions.setUserInfo({ user }));
	},
};

export const userActions = {
	async getUserInfo() {
		try {
			const response = await httpClient.get(`${USERS_SERVICE}/user/info`);
			const responseData = response.data;
			if (responseData.data) userDispatchers.setUserInfo(responseData.data);
		} catch (e: any) {
		} finally {
		}
	},
};
