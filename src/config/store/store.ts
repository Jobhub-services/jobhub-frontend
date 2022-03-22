import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootReducer from '@/config/store/rootReducer';
import rootSaga from '@/config/store/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
	reducer: rootReducer,
	middleware,
	devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
