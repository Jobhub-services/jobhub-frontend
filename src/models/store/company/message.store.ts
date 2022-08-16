import { TMessage } from '@/types/company/messages.type';

export type TMessageData = {
	date?: string;
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
			firstName?: string;
			lastName?: string;
			role?: string;
			experience?: string;
		};
	};
	contacts?: {
		content?: {
			_id: string;
			avatar?: string;
			firstName?: string;
			lastName?: string;
			message?: string;
			lastDate?: string;
			sended?: boolean;
		}[];
	};
}
