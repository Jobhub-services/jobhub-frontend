export type AppProps = {
	basename: string;
};

export interface IconProps extends StandardProps {
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
	width?: string;
	closed?: boolean;
	top?: boolean;
	closable?: boolean;
	positionAbsolute?: boolean;
	onClose?: (close: boolean) => void;
}
