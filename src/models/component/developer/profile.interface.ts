import { StandardProps } from '@/models/component/app.interface';
import { CertificationType, EducationType, WorkExperienceType } from '@/types/developer/profile.type';
export interface WorkExperienceProps extends StandardProps, WorkExperienceType {}
export interface EducationProps extends StandardProps, EducationType {}
export interface CertificationProps extends StandardProps, CertificationType {}
export interface ProfileAvatarProps extends StandardProps {
	firstname?: string;
	lastname?: string;
	role?: string;
	experience?: string;
	location?: {
		country?: string;
		city?: string;
	};
	size?: number;
}
