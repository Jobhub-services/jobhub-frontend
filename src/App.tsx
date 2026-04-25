import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProps } from '@/models/component/app.interface';
import AppRoutes from '@/routes/AppRoutes';
import '@/assets/scss/main.scss';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from '@/components/common/ErrorBoundry';
import { ToastContainer } from 'react-toastify';
import { useAppSelector } from '@/utils/appHooks';
import ErrorPage from '@/views/ErrorPage';

const App: FC<AppProps> = ({ basename }) => {
	const apiError = useAppSelector(({ auth }) => auth.apiError);
	return (
		<BrowserRouter basename={basename}>
			<ErrorBoundary>
				<ToastContainer />
				{apiError && <ErrorPage status={apiError.status} message={apiError.message} />}
				<AppRoutes />
			</ErrorBoundary>
		</BrowserRouter>
	);
};

export default App;
