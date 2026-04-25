import { TApplicationData } from '@/types/developer/application.type';
import { TCompanyDetail } from '@/types/developer/comanies.type';
import { TJobDetails } from '@/types/developer/job.type';

export interface IApplicationState {
	isLoading?: boolean;
	isDetailLoading?: boolean;
	applicationInfo?: {
		content?: TApplicationData[];
		count?: number;
		size?: number;
		pages?: number;
		page?: number;
	};
	applicationDetails?: TApplicationData & {
		responses?: {
			question: string;
			response: string;
		}[];
		notice_period?: string;
		start_date?: string | null;
		job: TJobDetails;
		company: TCompanyDetail;
	};
}
