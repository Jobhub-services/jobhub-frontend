import { TBooleanAttr, TMessageStatus } from '@/types/company/messages.type';

export type TMessageData = {
	createdAt?: string;
	content?: string;
	sender?: string;
	status?: TMessageStatus;
};

export type TUserInfo = {
	_id: string;
	avatar?: string;
	firstName?: string;
	lastName?: string;
	role?: string;
	experience?: string;
};
export interface IMessageState {
	[TBooleanAttr.IS_LOADING]?: boolean;
	[TBooleanAttr.IS_MESSAGE_SENDING]?: boolean;
	[TBooleanAttr.IS_CONVERSATION_LOADING]?: boolean;
	[TBooleanAttr.IS_CONVERSATION_FETCHED]?: boolean;
	[TBooleanAttr.IS_CONVERSATION_DELETING]?: boolean;
	[TBooleanAttr.IS_CONVERSATION_DELETED]?: boolean;
	[TBooleanAttr.IS_CONVERSATION_DETAIL_FETCHED]?: boolean;
	newChat?: {
		created: boolean;
		_id: string;
	};
	messages?: {
		_id: string;
		messages: TMessageData[];
		userInfo?: TUserInfo;
	};
	contacts?: {
		content: {
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
