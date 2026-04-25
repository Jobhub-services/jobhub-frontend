import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootReducer from '@/config/store/rootReducer';
import rootSaga from '@/config/store/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const { APP_ENV } = STAAK_ENV;

const store = configureStore({
	reducer: rootReducer,
	middleware,
	devTools: APP_ENV !== 'production',
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
