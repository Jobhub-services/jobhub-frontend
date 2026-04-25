import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { IAuthState } from '@/models/store/auth.interface';
import { httpClient } from '@/config/httpClient/HttpClient';

const initialState: IAuthState = {
	accessToken: null,
	isLoading: false,
	authErrors: {},
	apiError: null,
};
const reducerSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			const { token } = action.payload;
			state.accessToken = token;
			state.apiError = null;
			httpClient.setAuthToken();
		},
		setIsLoading: (state, action) => {
			const { isLoading } = action.payload;
			state.isLoading = isLoading;
		},
		setAuthErrors: (state, action) => {
			const { errors } = action.payload;
			state.authErrors = errors;
		},
		setApiError: (state, action) => {
			state.apiError = action.payload;
		},
		clearApiError: (state) => {
			state.apiError = null;
		},
	},
});
export const reducer = persistReducer({ storage, key: 'staak-auth', whitelist: ['accessToken'] }, reducerSlice.reducer);
export const storeActions = reducerSlice.actions;
export const { setApiError, clearApiError } = reducerSlice.actions;
