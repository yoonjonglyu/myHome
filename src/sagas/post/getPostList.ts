import { put, call} from 'redux-saga/effects';
import api from '../../api/blogApi';
import * as actions from '../../actions';

function* getPostList (type : string) {
    try {
        const { data } = yield call(api.getPostList, type);
        console.log(data)
        yield put(actions.POSTLIST(data));
    } catch(error) {

    }
}

export default getPostList;