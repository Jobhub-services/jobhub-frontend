import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { IAuthState } from '@/models/store/auth.interface';

const initialState: IAuthState = {
	accessToken: null,
};
const reducerSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {},
	},
});
export const reducer = persistReducer({ storage, key: 'staak-auth', whitelist: ['accessToken'] }, reducerSlice.reducer);
export const storeActions = reducerSlice.actions;
