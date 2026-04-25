import { TProfileInfo } from '@/types/company/profile.type';

export interface IProfileState {
	isLoading?: boolean;
	profile: TProfileInfo;
}
