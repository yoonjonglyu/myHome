import { all } from 'redux-saga/effects';
import getAllTags from './post/getAllTags';
import getPostList from './post/getPostList';
import getPostContents from './post/getPostContents';


function* RootSaga() {
    yield all([
        getAllTags(),
        getPostList(),
        getPostContents("essay", 1)
    ]);
};

export default RootSaga;