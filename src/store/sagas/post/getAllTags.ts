import { put, call} from 'redux-saga/effects';
import api from '../../../lib/api/blogApi';
import * as actions from '../../actions';

function* getAllTags () {
    try {
        const { data } = yield call(api.getAllTags);
        yield put(actions.TAGLIST(data));
    } catch (error) {
        console.error("API 서버에서 데이터를 불러오는데 실패했습니다.");
    }
}

export default getAllTags;