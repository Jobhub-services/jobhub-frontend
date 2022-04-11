export interface IAuthState {
	accessToken: null | string;
	isLoading: boolean;
	authErrors: { [x: string]: string };
}
