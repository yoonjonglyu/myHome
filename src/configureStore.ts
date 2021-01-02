import { createStore, applyMiddleware  } from 'redux';
import RootReducers from './reducers';

import createSagaMiddleware from 'redux-saga';
import RootSaga from './sagas';

const ConfigureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
            RootReducers,
            applyMiddleware(
                sagaMiddleware
            )
        );

    sagaMiddleware.run(RootSaga);

    return store;
}

export default ConfigureStore;