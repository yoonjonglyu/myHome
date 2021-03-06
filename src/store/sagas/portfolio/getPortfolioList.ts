import { put, call } from 'redux-saga/effects';

import Api from '../../../lib/api/blogApi';

import * as Actions from '../../actions';

function* getPortfolioList() {
    try {
        const { data } = yield call(Api.getAllTags);
        yield put(Actions.PORTFOLIOLIST(data));
    } catch (error) {
        console.error("API 서버에서 데이터를 불러오는데 실패했습니다.");
    }
}

export default getPortfolioList;