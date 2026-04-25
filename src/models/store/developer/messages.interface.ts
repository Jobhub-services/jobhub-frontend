import { TBooleanAttr } from '@/types/developer/messages.type';

export type TMessageData = {
	createdAt?: string;
	content?: string;
	sender?: string;
};
export type TUserInfo = {
	_id: string;
	avatar?: string;
	companyName?: string;
	industry?: string;
};

export interface IMessageState {
	[TBooleanAttr.IS_LOADING]?: boolean;
	[TBooleanAttr.IS_MESSAGE_SENDING]?: boolean;
	[TBooleanAttr.IS_MESSAGES_LOADING]?: boolean;
	[TBooleanAttr.IS_CONVERSATION_FETCHED]?: boolean;
	[TBooleanAttr.IS_DELETE_POP_MODAL_OPENED]?: boolean;

	[TBooleanAttr.IS_CONVERSATION_DELETING]?: boolean;
	[TBooleanAttr.IS_CONVERSATION_DELETED]?: boolean;
	[TBooleanAttr.IS_MESSAGES_FETCHED]?: boolean;
	messages?: {
		_id: string;
		messages: TMessageData[];
		userInfo?: TUserInfo;
	};
	contacts?: {
		content?: {
			_id: string;
			message: {
				content?: string;
				sender?: string;
				_id?: string;
				createdAt?: string;
			};
			userInfo?: TUserInfo;
		}[];
		count?: number;
		pages?: number;
		size?: number;
		page?: number;
	};
	messageErrors?: {
		fetchStatus: boolean;
		content: any;
	};
}
