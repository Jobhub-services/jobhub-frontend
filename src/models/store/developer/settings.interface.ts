export interface ISettingsState {
	isLoading?: boolean;
	isUpdated?: boolean;
	errors?: {
		status?: boolean;
		messages?: any;
	};
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
