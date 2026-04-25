import { IMessageState } from '@/models/store/company/message.store';
import { TBooleanAttr } from '@/types/company/messages.type';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IMessageState = {
	isLoading: false,
	isMessageSending: false,
	isMessagesLoading: false,
	conversationFetched: false,
	[TBooleanAttr.IS_DELETE_POP_MODAL_OPENED]: false,
	contacts: {
		content: [],
		size: 0,
		count: 0,
		page: 0,
		pages: 0,
	},
	messages: {
		_id: '',
		userInfo: { _id: '' },
		messages: [],
	},
};

const reducerSlices = createSlice({
	name: 'companyMessage',
	initialState,
	reducers: {
		setBooleanAttr: (state, action) => {
			const { value, attr } = action.payload;
			state[attr as TBooleanAttr] = value;
		},
		createChat: (state, action) => {
			state.newChat = action.payload;
		},
		setConversations: (state, action) => {
			const { data, reset } = action.payload;
			let tmp: any = {};
			if (reset) {
				tmp = {
					content: [],
					size: 0,
					count: 0,
					pages: 0,
					page: 0,
				};
			} else {
				tmp = {
					content:
						(state.contacts?.page ?? 0) <= (state.contacts?.pages ?? 0)
							? [...(state.contacts?.content ?? []), ...(data?.content ?? [])]
							: state.contacts?.content ?? [],
					size: data?.size ?? 0,
					count: data?.count ?? 0,
					pages: data?.pages ?? 0,
					page: state.contacts?.page! < data?.pages ? (state.contacts?.page ?? 0) + 1 : state.contacts?.page,
				};
			}

			state.contacts = tmp;
		},
		setMessages: (state, action) => {
			const { data, userInfo } = action.payload;
			state.messages = { ...data, userInfo: userInfo };
		},
		setAddMessage: (state, action) => {
			if (state.messages) state.messages.messages = [...(state.messages.messages ?? []), action.payload];
		},
		updateContacts: (state, action) => {
			const { chatId, data } = action.payload;
			let tmp = state.contacts?.content?.find((elem) => elem._id === chatId);
			if (tmp) {
				tmp['message'] = data;
			}
		},
		setDeleteConversation: (state, action) => {
			const chatId = action.payload;
			const newContacts = state.contacts?.content?.filter((elem) => elem._id !== chatId);
			if (state.contacts && newContacts) state.contacts.content = newContacts;
		},
		setErrors: (state, action) => {
			const data = action.payload;
			state.messageErrors = data;
		},
	},
});

export const reducer = reducerSlices.reducer;
export const storeActions = reducerSlices.actions;
