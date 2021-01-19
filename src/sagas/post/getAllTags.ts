import { put, call} from 'redux-saga/effects';
import api from '../../api/blogApi';
import * as actions from '../../actions';

function* getAllTags () {
    console.log("태그목록을 성공적으로 불러왔습니다.");
    try {
        const { data } = yield call(api.getAllTags);
        const state : any = {};
        state.essay = [data.essay];
        state.tech = [data.tech];
        state.portfolio = [data.portfolio];
        yield put(actions.TAGLIST(state));
    } catch(error) {

    }
}

export default getAllTags;