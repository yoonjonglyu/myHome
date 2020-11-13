import { createStore } from 'redux';
import RootReducers from './reducers';

const ConfigureStore = () => {
    const store = createStore(RootReducers);
    
    return store;
}

export default ConfigureStore;