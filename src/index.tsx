import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from '@/reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as StoreProvider } from 'react-redux';
import store, { persistor } from '@/config/store/store';
import App from '@/App';

const { PUBLIC_URL } = process.env;
ReactDOM.render(
	<React.StrictMode>
		<StoreProvider store={store}>
			{/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
			<PersistGate persistor={persistor} loading={<div>Loading...</div>}>
				<App basename={PUBLIC_URL} />
			</PersistGate>
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals(console.log);
