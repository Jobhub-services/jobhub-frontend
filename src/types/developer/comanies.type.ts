export type TCompanyData = {
	_id: string;
	about?: string;
	avatar?: string;
	name?: string;
	industry?: string;
	headquarters?: { country?: string; city?: string; street?: string };
	founded?: string;
	company_size?: string;
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
};
