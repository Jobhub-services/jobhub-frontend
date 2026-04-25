export enum VariantType {
	PRIMARY = 'primary',
	LIGHT = 'light',
	DARK = 'dark',
}

export interface IStaakLogo {
	variant?: VariantType;
	size?: number;
	style?: any;
}
