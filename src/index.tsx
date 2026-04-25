import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as StoreProvider } from 'react-redux';
import store, { persistor } from '@/config/store/store';
import { LoadingScreen } from '@/components/common/loadings/LoadingScreen';
import App from '@/App';

const { BASE_URL } = STAAK_ENV;

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider store={store}>
			{/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
			<PersistGate persistor={persistor} loading={<LoadingScreen />}>
				<App basename={BASE_URL} />
			</PersistGate>
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
