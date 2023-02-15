import createSagaMiddleware from 'redux-saga'
import {compose, legacy_createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { rootReducer } from '../reducers/rootReducer';
import { watcherSaga } from '../sagas/sagas';

export const createAppStore = () => {
    let store = legacy_createStore(rootReducer,composeWithDevTools());

    return store;
}


export const createAppAsyncStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    let store = legacy_createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            composeWithDevTools()
        )
    );

    // We init the watcher Saga
    sagaMiddleware.run(watcherSaga);
    return store;
}