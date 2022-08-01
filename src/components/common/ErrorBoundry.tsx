import { pushNotification } from '@/utils/helpers';
import React from 'react';

class ErrorBoundary extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error: any, info: any) {
		// Display fallback UI
		this.setState({ hasError: true });
		// You can also log the error to an error reporting service
		//logErrorToMyService(error, info);
	}

	render() {
		if (this.state.hasError) {
			pushNotification.error('Something went wrong.');
			return <h1>Erreur</h1>;
			// You can render any custom fallback UI
		}
		return <>{this.props.children}</>;
	}
}

export default ErrorBoundary;
