export interface IApiError {
	status: number;
	message: string;
}

export interface IAuthState {
	accessToken: null | string;
	isLoading: boolean;
	authErrors: { [x: string]: string };
	apiError: IApiError | null;
}
