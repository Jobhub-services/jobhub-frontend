import { StandardProps } from '@/models/component';

export interface PTalentContact extends StandardProps {
	_id: string;
	active?: boolean;
	img?: string;
	firstname?: string;
	lastname?: string;
	sender?: boolean;
	message?: string;
	lastDate?: string;
	onClick?: (id: string) => void;
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
	onHeightChange?: (height: number, value: string) => void;
	onSend?: (e: any) => void;
}

export interface PMessageContentElem extends StandardProps {
	img?: string;
	messsage?: string;
	date?: string;
	sender?: boolean;
	loading?: boolean;
}
