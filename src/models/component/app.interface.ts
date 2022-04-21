export type AppProps = {
	basename: string;
};

export interface IconProps {
	width?: string;
	height?: string;
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

export interface PopModelProps extends StandardProps {
	children?: JSX.Element | JSX.Element[];
	closed?: boolean;
	onClose?: (close: boolean) => void;
}
