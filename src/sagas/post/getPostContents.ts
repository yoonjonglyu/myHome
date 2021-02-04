import { put, call} from 'redux-saga/effects';
import api from '../../api/blogApi';
import * as actions from '../../actions';

function* getPostContents (action : {type : string, payload : {type : string, idx : string}}) {
    try {
        const { data } = yield call(api.getPostContents, action.payload.type, action.payload.idx);
        const responsePost = data[action.payload.type];
        yield put(actions.POSTCONTENTS(responsePost));
    } catch(error) {

    }
}

export default getPostContents;