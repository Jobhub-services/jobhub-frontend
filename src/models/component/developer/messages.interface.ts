import { StandardProps } from '@/models/component';

export interface PMessageInput extends StandardProps {
	value?: string;
	height?: number;
	onHeightChange?: (height: number, value: string) => void;
	onSend?: (e: any) => void;
}

export interface PCompanyContact extends StandardProps {
	_id: string;
	active?: boolean;
	img?: string;
	companyName?: string;
	sender?: boolean;
	message?: string;
	lastDate?: string;
	onClick?: (id: string) => void;
}

export interface PMessageAvatar extends StandardProps {
	img?: string;
	companyName?: string;
	industry?: string;
}

export interface PMessageContentElem extends StandardProps {
	img?: string;
	messsage?: string;
	createdAt?: string;
	sender?: boolean;
	loading?: boolean;
}
