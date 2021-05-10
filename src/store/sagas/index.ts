import { all, takeEvery } from 'redux-saga/effects';
import * as actionType  from '../actions/actionTypes';

import getAllTags from './post/getAllTags';
import getPostList from './post/getPostList';
import getPostContents from './post/getPostContents';
import getTagPostList from './post/getTagPostList';
import getPortfolioList from './portfolio/getPortfolioList';
import getPortfolioContents from './portfolio/getPortfolioContents';

function* RootSaga() {
    yield all([
        getAllTags(),
        takeEvery(actionType.LOAD_POST_LIST, getPostList),
        takeEvery(actionType.LOAD_POST_CONTENTS, getPostContents),
        takeEvery(actionType.LOAD_TAG_POST_LIST, getTagPostList),
        takeEvery(actionType.LOAD_PORTFOLIO_LIST, getPortfolioList),
        takeEvery(actionType.LOAD_PORTFOLIO_CONTENTS, getPortfolioContents),
    ]);
};

export default RootSaga;