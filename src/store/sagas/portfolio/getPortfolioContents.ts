import { put, call } from 'redux-saga/effects';

import Api from '../../../lib/api/blogApi';

import * as Actions from '../../actions';

function* getPortfolioContents() {
    try {
        const { data } = yield call(Api.getAllTags);
        yield put(Actions.PORTFOLIOCONTENTS(data));
    } catch (error) {
        console.error("API 서버에서 데이터를 불러오는데 실패했습니다.");
    }
}

export default getPortfolioContents;