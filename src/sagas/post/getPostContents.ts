import { put, call} from 'redux-saga/effects';
import api from '../../api/blogApi';
import * as actions from '../../actions';

function* getPostContents (type : string, idx : number) {
    try {
        const { data } = yield call(api.getPostContents, type, idx);
        console.log(data)
    } catch(error) {

    }
}

export default getPostContents;