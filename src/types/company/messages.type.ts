export enum TMessage {
	SENDED = 'sended',
	RECEIVED = 'received',
}

export type TMessageStatus = 'loading' | 'sended' | 'error';

export enum TBooleanAttr {
	IS_LOADING = 'isLoading',
	IS_CONVERSATION_FETCHED = 'conversationFetched',
	IS_MESSAGES_LOADING = 'isMessagesLoading',
	IS_MESSAGES_FETCHED = 'isMessagesFetched',
	IS_MESSAGE_SENDING = 'isMessageSending',
	IS_CONVERSATION_DELETING = 'isConversationDeleting',
	IS_CONVERSATION_DELETED = 'conversationDeleted',
}
