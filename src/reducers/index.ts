import { combineReducers } from 'redux';

import Taps from './tap';
import TagList from './tag';
import PostList from './post';

const RootReducers = combineReducers({
    Taps, TagList, PostList
});

export default RootReducers;

export type RootState = ReturnType<typeof RootReducers>;