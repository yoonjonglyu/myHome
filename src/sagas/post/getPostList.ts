import { put, call} from 'redux-saga/effects';
import api from '../../api/blogApi';
import * as actions from '../../actions';

function* getList (type : string) {
    try {
        const { data } = yield call(api.getPostList, type);
        return data;
    } catch (error) {
    }
}
function* getPostList () {
    try {
        const postList = {
            essay : [],
            tech : [],
            portfolio : []
        };
        const essayList = yield getList("essay");

        postList.essay = essayList.essay;
        const techList = yield getList("tech");
        
        postList.tech = techList.tech;

        const portfolioList = yield getList("portfolio");
        postList.portfolio = portfolioList.tech;
        
        yield put(actions.POSTLIST(postList.essay));
    } catch (error) {
    }
}

export default getPostList;