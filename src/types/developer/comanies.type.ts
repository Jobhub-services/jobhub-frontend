export type TCompanyData = {
	_id: string;
	description?: string;
	avatar?: string;
	generalinfo?: {
		industry?: string;
		founded?: string;
		company_size?: string;
	};
	companyName?: string;
	headquarter?: { country?: string; city?: string; street?: string };
	number_job?: number;
};

export type TCompanyDetail = TCompanyData & {
	keywords?: string[];
	social_profile?: {
		website?: string;
		twitter?: string;
		facebook?: string;
		linkedin?: string;
	};
	company_division?: string[];
};
