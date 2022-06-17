import { StandardProps } from '@/models/component/app.interface';
export interface PProfileAvatar extends StandardProps {
	overview?: boolean;
	city?: string;
	street?: string;
	country?: { _id: string; name: string };
}
