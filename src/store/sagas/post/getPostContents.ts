import { put, call } from 'redux-saga/effects';

import Api from '../../../lib/api/blogApi';

import * as Actions from '../../actions';

function* getPostContents(action: { type: string, payload: { type: string, idx: string } }) {
    try {
        const { data } = yield call(Api.getPostContents, action.payload.type, action.payload.idx);
        const responsePost = data[action.payload.type];
        if (JSON.stringify(responsePost) !== "{}") {
            yield put(Actions.POSTCONTENTS(responsePost));
        }
    } catch (error) {
        console.error("API 서버에서 데이터를 불러오는데 실패했습니다.");
    }
}

export default getPostContents;