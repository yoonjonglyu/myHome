import { all } from 'redux-saga/effects';
import getAllTags from './post/getAllTags';


function* RootSaga() {
    yield all([
        getAllTags()
    ]);
};

export default RootSaga;