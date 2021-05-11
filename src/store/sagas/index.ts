import { all, takeEvery } from 'redux-saga/effects';
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
        takeEvery(Types.LOAD_POST_LIST, GetPostList),
        takeEvery(Types.LOAD_POST_CONTENTS, GetPostContents),
        takeEvery(Types.LOAD_POST_LIST_BY_TAG, GetPostListByTag),
        takeEvery(Types.LOAD_PORTFOLIO_LIST, GetPortfolioList),
        takeEvery(Types.LOAD_PORTFOLIO_CONTENTS, GetPortfolioContents),
    ]);
};

export default RootSaga;