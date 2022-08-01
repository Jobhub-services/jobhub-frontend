import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProps } from '@/models/component/app.interface';
import AppRoutes from '@/routes/AppRoutes';
import '@/assets/scss/main.scss';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from '@/components/common/ErrorBoundry';
import { ToastContainer } from 'react-toastify';

const App: FC<AppProps> = ({ basename }) => {
	return (
		<BrowserRouter basename={basename}>
			<ErrorBoundary>
				<ToastContainer />
				<AppRoutes />
			</ErrorBoundary>
		</BrowserRouter>
	);
};

export default App;
