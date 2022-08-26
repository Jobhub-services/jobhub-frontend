import { IMessageState } from '@/models/store/developer/messages.interface';
import { TMessage } from '@/types/developer/messages.type';
import { createSlice } from '@reduxjs/toolkit';
import Women from '@/assets/icons/facebook.png';
import Jerom from '@/assets/icons/google.jpg';
import Capture3 from '@/assets/icons/Capture3.png';
import Capture2 from '@/assets/icons/Capture2.png';

const initialState: IMessageState = {
	isLoading: false,
	isMessageSending: false,
	contacts: {
		content: [
			{
				_id: '62d54b2ca30898b4111956be',
				avatar: Women,
				companyName: 'Longevity',
				message: 'I am here and i will sdlf sdlfsmdl sfmldsf sd',
				lastDate: '2022-08-15T23:45',
				sended: true,
			},
			{
				_id: '2',
				avatar: Jerom,
				companyName: 'Anywhr',
				message: 'I am here and i will',
				lastDate: '2022-08-15T23:45',
				sended: true,
			},
			{
				_id: '3',
				avatar: Capture3,
				companyName: 'TestGorilla',
				message: 'I am here and i will sdlf sdlfsmdl sfmldsf sd',
				lastDate: '2022-08-15T23:45',
				sended: false,
			},
			{
				_id: '4',
				avatar: Capture2,
				companyName: 'Staak',
				message: 'I am here and i will',
				lastDate: '2022-08-15T23:45',
			},
		],
	},
	messages: {
		userInfo: {
			_id: '',
			avatar: Women,
			companyName: 'Longevity',
			industry: 'Information technology',
		},
		content: [
			{
				createdAt: '2022-08-15T15:30',
				content: `Hi, Thank you`,
				type: TMessage.SENDED,
			},
			{
				createdAt: '2022-08-15T15:30',
				content: `Hi, Thank you so much for applying! We are honored that our company and vacant position took your attention. We are thrilled by your
						application and would love the chance to get to know you a little better. As a part of our recruitment process, I would like to send you
						the coding skills assessment test, after that, I would be able to invite you to further step. Our steps look like 1. assessment test(1
						hour) 2. soft skill interview 3. Team’s PM interview 4. Hard technical interview 5. Tech & Final Interview Best, Kristine`,
				type: TMessage.SENDED,
			},
			{
				createdAt: '2022-08-15T15:30',
				content: `Hello good morning`,
				type: TMessage.RECEIVED,
			},
			{
				createdAt: '2022-08-15T15:30',
				content: `Hi, Thank you so much for applying! We are honored that our company and vacant position took your attention. We are thrilled by your
						application and would love the chance to g invite you to further step. Our steps look like 1. assessment test(1
						hour) 2. soft skill interview 3. Team’s PM interview 4. Hard technical interview 5. Tech & Final Interview Best, Kristine`,
				type: TMessage.RECEIVED,
			},
			{
				createdAt: '2022-08-15T15:30',
				content: `Hi, Thank you so much for applying! We arew 4. Hard technical interview 5. Tech & Final Interview Best, Kristine`,
				type: TMessage.SENDED,
			},
			{
				createdAt: '2022-08-15T15:30',
				content: `I would be able to invite you to further step. Our steps look like 1. assessment test(1
						hour) 2. soft skill interview 3. Team’s PM interview 4. Hard technical interview 5. Tech & Final Interview Best, Kristine`,
				type: TMessage.RECEIVED,
			},
		],
	},
};

const reducerSlices = createSlice({
	name: 'talentMessage',
	initialState,
	reducers: {
		setIsLoading: (state, action) => {
			const { loading, attr } = action.payload;
			state[attr as 'isLoading'] = loading;
		},
		setMessages: (state, action) => {
			state.messages = action.payload;
		},
		setAddMessage: (state, action) => {
			const { msg, type } = action.payload;
			const data = {
				date: new Date().toUTCString(),
				content: msg,
				type: type,
			};
			if (state.messages) state.messages.content = [...(state.messages.content ?? []), data];
		},
	},
});

export const reducer = reducerSlices.reducer;
export const storeActions = reducerSlices.actions;
