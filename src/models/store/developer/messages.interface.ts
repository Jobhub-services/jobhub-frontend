import { TMessage } from '@/types/developer/messages.type';

export type TMessageData = {
	createdAt?: string;
	content?: string;
	type?: TMessage;
};
export interface IMessageState {
	isLoading?: boolean;
	isMessageSending?: boolean;
	messages?: {
		content: TMessageData[];
		userInfo?: {
			_id: string;
			avatar?: string;
			companyName?: string;
			industry?: string;
		};
	};
	contacts?: {
		content?: {
			_id: string;
			avatar?: string;
			companyName?: string;
			message?: string;
			lastDate?: string;
			sended?: boolean;
		}[];
	};
}
