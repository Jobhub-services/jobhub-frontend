import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from '@/models/store/user.interface';

const initialState: IUserState = {
	userInfo: {},
	userInfoLoaded: false,
	isLoadingUserInfo: true,
};
const reducerSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserInfo: (state, action) => {
			const { user } = action.payload;
			state.userInfo = user;
			state.userInfoLoaded = true;
		},
		setIsLoadingUserInfo: (state, { payload: { isLoading } }) => {
			state.isLoadingUserInfo = isLoading;
		},
	},
});
export const reducer = reducerSlice.reducer;
export const storeActions = reducerSlice.actions;
