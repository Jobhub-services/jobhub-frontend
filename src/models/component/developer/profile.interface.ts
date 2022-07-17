import { StandardProps } from '@/models/component/app.interface';
import { CertificationType, EducationType, KeyValType, WorkExperienceType } from '@/types/developer/profile.type';
import { StatusType } from '@/types/common.type';

export interface WorkExperienceProps extends StandardProps, WorkExperienceType {
	width?: string;
}
export interface EducationProps extends StandardProps, EducationType {}
export interface CertificationProps extends StandardProps, CertificationType {
	width?: string;
}

export interface ProfileAvatarProps extends StandardProps {
	firstname?: string;
	lastname?: string;
	role?: string;
	experience?: string;
	location?: {
		country?: KeyValType;
		city?: string | null;
	};
	size?: number;
	status?: StatusType;
	overview?: boolean;
	avatar?: string;
}
