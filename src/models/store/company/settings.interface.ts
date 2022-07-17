export interface ISettingsState {
	isLoading?: boolean;
	generaleInfo?: {
		email?: string;
		companyName?: string;
		username?: string;
	};
	securityInfo?: {
		currentPassword?: string;
		newPassword?: string;
		confirmPassword?: string;
	};
}
