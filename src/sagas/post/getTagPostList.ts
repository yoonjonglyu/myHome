import { put, call } from 'redux-saga/effects';
import api from '../../api/blogApi';
import * as actions from '../../actions';

function* getTagPostList (action : {type : string, payload : {type : string, idx : string}}) {
    try {
        const { data } = yield call(api.getTagPostList, action.payload.type, action.payload.idx);
        yield put(actions.POSTLIST(data));
    } catch (error) {
        console.error("API 서버에서 데이터를 불러오는데 실패했습니다.");
    }
}

export default getTagPostList;