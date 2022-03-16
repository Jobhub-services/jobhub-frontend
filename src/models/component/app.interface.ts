export type AppProps = {
	basename: string;
};

export interface StandardProps{
    className?:string,
    style?:React.CSSProperties
    children?:React.ReactNode
}

export interface LogoProps extends StandardProps {
	link?:string,
	src?:string
}
