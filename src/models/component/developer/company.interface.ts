import { StandardProps } from '@/models/component';
import { TCompanyData } from '@/types/developer/comanies.type';
export interface PCompanyCard extends StandardProps, TCompanyData {}

export interface PCompanyAvatar extends StandardProps {
	_id: string;
	avatar?: string;
	name?: string;
	industry?: string;
}
