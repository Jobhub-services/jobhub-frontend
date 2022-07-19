import { StandardProps } from './app.interface';

export interface IconDropDownProps extends StandardProps {}

export interface AvatarDropDownProps extends StandardProps {
	avatar?: string;
	onClick?: (event?: React.SyntheticEvent, value?: string) => void;
}
