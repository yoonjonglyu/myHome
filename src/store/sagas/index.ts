import { all, takeLatest } from 'redux-saga/effects';
import * as Types from '../actions/actionTypes';

import GetAllTags from './post/getAllTags';
import GetPostList from './post/getPostList';
import GetPostContents from './post/getPostContents';
import GetPostListByTag from './post/getPostListByTag';
import GetPortfolioList from './portfolio/getPortfolioList';
import GetPortfolioContents from './portfolio/getPortfolioContents';

function* RootSaga() {
    yield all([
        GetAllTags(),
        takeLatest(Types.LOAD_POST_LIST, GetPostList),
        takeLatest(Types.LOAD_POST_CONTENTS, GetPostContents),
        takeLatest(Types.LOAD_POST_LIST_BY_TAG, GetPostListByTag),
        takeLatest(Types.LOAD_PORTFOLIO_LIST, GetPortfolioList),
        takeLatest(Types.LOAD_PORTFOLIO_CONTENTS, GetPortfolioContents),
    ]);
};

export default RootSaga;