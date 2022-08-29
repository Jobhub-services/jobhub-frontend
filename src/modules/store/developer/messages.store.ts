import { IMessageState } from '@/models/store/developer/messages.interface';
import { TBooleanAttr } from '@/types/developer/messages.type';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IMessageState = {
	isLoading: false,
	isMessageSending: false,
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
	name: 'talentMessage',
	initialState,
	reducers: {
		setBooleanAttr: (state, action) => {
			const { value, attr } = action.payload;
			state[attr as TBooleanAttr] = value;
		},
		setConversations: (state, action) => {
			state.contacts = action.payload;
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
		setErrors: (state, action) => {
			const data = action.payload;
			state.messageErrors = data;
		},
	},
});

export const reducer = reducerSlices.reducer;
export const storeActions = reducerSlices.actions;
