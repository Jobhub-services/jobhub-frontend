export type AppProps = {
	basename: string;
};

export interface IconProps {
	size?: number;
	color?: string;
}

export interface StandardProps {
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode;
}

export interface LogoProps extends StandardProps {
	link?: string;
	src?: string;
}

export interface ErrorWrapperProps extends StandardProps {
	error: any;
	message: string;
}
