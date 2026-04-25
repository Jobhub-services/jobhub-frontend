import { ProfileInfo } from '@/types/developer/profile.type';

export interface IProfileState {
	isLoading?: boolean;
	profile: ProfileInfo;
}
