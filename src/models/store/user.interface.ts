export enum UserType {
	DEVELOPER = 'developer',
	COMPANY = 'company',
}
interface IDeveloperInfo {
	firstName?: string;
	lastName?: string;
}

interface ICompanyInfo {
	companyName?: string;
}

export interface IUser extends IDeveloperInfo, ICompanyInfo {
	_id?: string;
	email?: string;
	username?: string;
	password?: string;
	userType?: UserType;
	avatar?: string;
	phone?: { number: string; country_code: string };
	enableCreateJob?: number;
}

export interface IUserState {
	userInfo: IUser;
	userInfoLoaded: boolean;
}
