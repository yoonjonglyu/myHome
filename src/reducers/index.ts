import { combineReducers } from 'redux';

import Taps from './tap';

const RootReducers = combineReducers({
    Taps
});

export default RootReducers;

export type RootState = ReturnType<typeof RootReducers>;