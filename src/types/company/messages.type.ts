export enum TMessage {
	SENDED = 'sended',
	RECEIVED = 'received',
}

export type TMessageStatus = 'loading' | 'sended' | 'error';

export enum TBooleanAttr {
	IS_LOADING = 'isLoading',
	IS_CONVERSATION_LOADING = 'isConversationLoading',
	IS_CONVERSATION_DETAIL_FETCHED = 'isConversationDetailFetched',
	IS_CONVERSATION_FETCHED = 'conversationFetched',
	IS_MESSAGE_SENDING = 'isMessageSending',
	IS_CONVERSATION_DELETING = 'isConversationDeleting',
	IS_CONVERSATION_DELETED = 'conversationDeleted',
}
