import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { defaultReducer } from './reducers/default/default';
import { watchDefaultSagas } from './sagas/rootSagas';

const _composeEnhancers = process.env.NODE_ENV === 'development'
	? composeWithDevTools
	: null || compose;

const _rootReducer = combineReducers({
	default	:	defaultReducer
});

const _sagaMiddleware = createSagaMiddleware();

const store = createStore(_rootReducer, _composeEnhancers(applyMiddleware(_sagaMiddleware)));
_sagaMiddleware.run(watchDefaultSagas);

export default store;