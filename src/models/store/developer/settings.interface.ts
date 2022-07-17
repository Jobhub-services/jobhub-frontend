export interface ISettingsState {
	isLoading?: boolean;
	generaleInfo?: {
		email?: string;
		firstName?: string;
		lastName?: string;
		username?: string;
	};
	securityInfo?: {
		currentPassword?: string;
		newPassword?: string;
		confirmPassword?: string;
	};
}
