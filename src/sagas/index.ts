import { all, takeEvery } from 'redux-saga/effects';
import * as actionType  from '../actions/actionTypes';

import getAllTags from './post/getAllTags';
import getPostList from './post/getPostList';
import getPostContents from './post/getPostContents';
import getTagPostList from './post/getTagPostList';

function* RootSaga() {
    yield all([
        getAllTags(),
        takeEvery(actionType.LOAD_POST_LIST, getPostList),
        takeEvery(actionType.LOAD_POST_CONTENTS, getPostContents),
        takeEvery(actionType.LOAD_TAG_POST_LIST, getTagPostList),
    ]);
};

export default RootSaga;