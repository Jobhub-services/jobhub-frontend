export enum UserType {
	DEVELOPER = 'developer',
	COMPANY = 'company',
}
interface IDeveloperInfo {
	firstName: string;
	lastName: string;
}

interface ICompanyInfo {
	companyName: string;
}

export interface IUser {
	email?: string;
	username?: string;
	password?: string;
	userType?: UserType;
	developerInfo?: IDeveloperInfo;
	companyInfo?: ICompanyInfo;
}

export interface IUserState {
	userInfo: IUser;
	userInfoLoaded: boolean;
}
