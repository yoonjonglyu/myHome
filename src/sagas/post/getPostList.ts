import { put, call } from 'redux-saga/effects';
import api from '../../api/blogApi';
import * as actions from '../../actions';

function* getPostList(action : {type : string , payload : string}) {
    try {
        const { data } = yield call(api.getPostList, action.payload);
        yield put(actions.POSTLIST(data[action.payload]));
    } catch (error) {

    }
}

export default getPostList;