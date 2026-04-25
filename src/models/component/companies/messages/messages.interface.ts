import { StandardProps } from '@/models/component';
import { TMessageStatus } from '@/types/company/messages.type';

export interface PTalentContact extends StandardProps {
	_id: string;
	userId?: string;
	active?: boolean;
	img?: string;
	firstname?: string;
	lastname?: string;
	sender?: boolean;
	message?: string;
	lastDate?: string;
	onClick?: (id: string, userId: string) => void;
}

export interface PMessageAvatar extends StandardProps {
	img?: string;
	firstname?: string;
	lastname?: string;
	role?: string;
	experience?: string;
}

export interface PMessageInput extends StandardProps {
	value?: string;
	height?: number;
	onHeightChange?: (height: number, value: string) => void;
	onSend?: (e: any) => void;
}

export interface PMessageContentElem extends StandardProps {
	img?: string;
	messsage?: string;
	createdAt?: string;
	sender?: boolean;
	status?: TMessageStatus;
}
