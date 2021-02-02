import { all, takeEvery } from 'redux-saga/effects';
import * as actionType  from '../actions/actionTypes';

import getAllTags from './post/getAllTags';
import getPostList from './post/getPostList';
import getPostContents from './post/getPostContents';


function* RootSaga() {
    yield all([
        getAllTags(),
        takeEvery(actionType.LOAD_POST_LIST, getPostList),
        getPostContents("essay", 1)
    ]);
};

export default RootSaga;