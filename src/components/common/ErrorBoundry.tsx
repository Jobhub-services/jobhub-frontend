import { pushNotification } from '@/utils/helpers';
import React from 'react';
import { ToastContainer } from 'react-toastify';

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
			return <ToastContainer />;
			// You can render any custom fallback UI
		}
		return (
			<>
				<ToastContainer />
				{this.props.children}
			</>
		);
	}
}

export default ErrorBoundary;
