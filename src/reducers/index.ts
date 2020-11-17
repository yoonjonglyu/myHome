import { combineReducers } from 'redux';

import Taps from './tap';
import TagList from './tag';

const RootReducers = combineReducers({
    Taps, TagList
});

export default RootReducers;

export type RootState = ReturnType<typeof RootReducers>;