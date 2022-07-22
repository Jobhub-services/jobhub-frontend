import { TValueLabel } from '@/types';
import { TCompanyData, TCompanyDetail } from '@/types/developer/comanies.type';
import { JobInfoData } from '@/types/developer/job.type';

export interface ICompanyState {
	isLoading?: boolean;
	isDetailLoading?: boolean;
	filterClosed?: boolean;
	companies?: {
		content?: TCompanyData[];
		size?: number;
		count?: number;
		pages?: number;
	};
	companyDetail: {
		_id: string;
		overview: TCompanyDetail;
		jobs: {
			content?: JobInfoData[];
			size?: number;
			count?: number;
		};
	};
	filters?: {
		headquarters?: TValueLabel[];
		company_size?: TValueLabel[];
		industry?: string[];
		keywords?: string[];
	};
}
