export type TSocialProfile = {
	linkedin?: string;
	facebook?: string;
	website?: string;
	twitter?: string;
};

export type TProfileInfo = {
	_id?: string;
	description?: string;
	keywords?: string[];
	company_division?: string[];
	social_profile?: TSocialProfile;
	headquarter?: { country: { _id?: string; name?: string }; city?: string; street?: string };
	generalinfo?: {
		founded?: string;
		industry?: string;
		company_size?: string;
	};
	avatar?: string;
};
