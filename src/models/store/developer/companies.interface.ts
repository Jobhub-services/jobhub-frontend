import { TCompanyData, TCompanyDetail } from '@/types/developer/comanies.type';
import { JobInfoData } from '@/types/developer/job.type';

export interface ICompanyState {
	isLoading?: boolean;
	companies?: {
		content?: TCompanyData[];
		size?: number;
		count?: number;
	};
	companyDetail: {
		overview: TCompanyDetail;
		jobs: {
			content?: JobInfoData[];
			size?: number;
			count?: number;
		};
	};
}
