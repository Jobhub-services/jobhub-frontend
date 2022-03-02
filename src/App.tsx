import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProps } from '@/models/component/app.interface';
import AppRoutes from '@/routes/AppRoutes';

const App: FC<AppProps> = ({ basename }) => {
	return (
		<BrowserRouter basename={basename}>
			<AppRoutes />
		</BrowserRouter>
	);
};


export default App;
