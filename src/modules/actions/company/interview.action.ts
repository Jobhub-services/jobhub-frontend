import { httpClient } from '@/config/httpClient/HttpClient';
import { storeActions } from '@/modules/store/company/interview.store';
import { InterviewInfo } from '@/types/company/interview.type';
import { API_PATHS } from '@/constants/api.constants';
import dispatchToStore from '@/utils/store';

const { JOBS_SERVICE } = API_PATHS;

export const interviewDispatcher = {
	setIsloading(loading: boolean) {
		dispatchToStore(storeActions.setIsLoading({ loading }));
	},
	setIsDeleted(isdeleted: boolean) {
		dispatchToStore(storeActions.setIsDeleted({ isdeleted }));
	},
	setIsCreated(iscreated: boolean) {
		dispatchToStore(storeActions.setIsCreated({ iscreated }));
	},
	setAttribute(value: boolean, attr: 'isUpdated' | 'isError' | 'isCreated' | 'isDeleted') {
		dispatchToStore(storeActions.setAttribute({ value, attr }));
	},
	setCreateInterview(data: InterviewInfo) {
		dispatchToStore(storeActions.create(data));
	},
	setInterviews(data: { total?: number; currentPage?: number; pages?: number; interviews: InterviewInfo[] }) {
		dispatchToStore(storeActions.setInterviews(data));
	},
};

export const interviewActions = {
	async create(applicantId: string, data: InterviewInfo) {
		interviewDispatcher.setIsloading(true);
		try {
			const response = await httpClient.post(`${JOBS_SERVICE}/application/${applicantId}/interview`, data);
			const responseData = response.data;
			if (responseData) {
				interviewDispatcher.setIsCreated(true);
				interviewDispatcher.setCreateInterview(responseData.content);
			}
		} catch (e: any) {
		} finally {
			interviewDispatcher.setIsloading(false);
		}
	},
	async getInterviews() {
		interviewDispatcher.setIsloading(true);
		try {
			const response = await httpClient.get(`${JOBS_SERVICE}/show`);
			if (response.data) interviewDispatcher.setInterviews(response.data);
		} catch (e: any) {
		} finally {
			interviewDispatcher.setIsloading(false);
		}
	},
	async removeInterview(applicantId: string, interviewId: string) {
		interviewDispatcher.setIsloading(true);
		try {
			const response = await httpClient.delete(`${JOBS_SERVICE}/application/${applicantId}/interview/${interviewId}`);
			const responseData = response.data;
			if (responseData) interviewDispatcher.setIsDeleted(true);
		} catch (e: any) {
		} finally {
			interviewDispatcher.setIsloading(false);
		}
	},
	async updateInterview(applicantId: string, interviewId: string, data: any) {
		interviewDispatcher.setIsloading(true);
		try {
			const response = await httpClient.put(`${JOBS_SERVICE}/application/${applicantId}/interview/${interviewId}`, data);
			const responseData = response.data;
			if (responseData) {
				interviewDispatcher.setAttribute(true, 'isUpdated');
				interviewDispatcher.setCreateInterview(responseData.content);
			}
		} catch (e: any) {
			interviewDispatcher.setAttribute(true, 'isError');
		} finally {
			interviewDispatcher.setIsloading(false);
		}
	},
};
