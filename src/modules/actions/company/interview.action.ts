import { httpClient } from '@/config/httpClient/HttpClient';
import { storeActions } from '@/modules/store/company/interview.store';
import { InterviewInfo } from '@/types/interview.type';
import { API_PATHS } from '@/constants/api.constants';
import dispatchToStore from '@/utils/store';

const { INTERVIEW_SERVICE } = API_PATHS;

export const interviewDispatcher = {
	setIsloading(loading: boolean) {
		dispatchToStore(storeActions.setIsLoading({ loading }));
	},
	setCreateInterview(data: InterviewInfo) {
		dispatchToStore(storeActions.create(data));
	},
	setInterviews(data: { total?: number; currentPage?: number; pages?: number; interviews: InterviewInfo[] }) {
		dispatchToStore(storeActions.setInterviews(data));
	},
};

export const interviewActions = {
	async create(data: InterviewInfo & { applicantId: number }) {
		interviewDispatcher.setIsloading(true);
		try {
			const response = await httpClient.post(`${INTERVIEW_SERVICE}/create`, data);
			if (response.data) interviewDispatcher.setCreateInterview(response.data);
		} catch (e: any) {
		} finally {
			interviewDispatcher.setIsloading(false);
		}
	},
	async getInterviews() {
		interviewDispatcher.setIsloading(true);
		try {
			const response = await httpClient.get(`${INTERVIEW_SERVICE}/show`);
			if (response.data) interviewDispatcher.setInterviews(response.data);
		} catch (e: any) {
		} finally {
			interviewDispatcher.setIsloading(false);
		}
	},
};
