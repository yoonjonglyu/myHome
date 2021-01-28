import { put, call} from 'redux-saga/effects';
import api from '../../api/blogApi';
import * as actions from '../../actions';

function* getPostContents (type : string, idx : number) {
    try {
        const { data } = yield call(api.getPostContents, type, idx);
        const responsePost = data[type];
        
        yield put(actions.POSTCONTENTS(responsePost));
    } catch(error) {

    }
}

export default getPostContents;