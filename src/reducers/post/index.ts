import { Reducer } from 'redux';
import * as actions from '../../actions';
import * as types from '../../actions/actionTypes';

interface PostListState {
    PostList : Array<{
        postIdx : number
        postDate : string
        postAuthor : string 
        postTitle : string 
        postDescription : string
        postTags : Array<{key : number, label : string}>     
    }>
}

const tempData = {
    postIdx : 1,
    postDate : "2020-12-06",
    postAuthor : "ISA 류윤종",
    postTitle : "일어나, 코딩해야지",
    postDescription : "진정한 게으름은 미래까지 고려해서 불필요한 귀찮음이 발생하지 않게 하는 것이다.",
    postTags : [
        {
            key : 1,
            label : "HTML"
        },
        {
            key : 2,
            label : "CSS"
        }
    ]
}

const initialState : PostListState = {
    PostList : [tempData, tempData, tempData]
};

const PostList : Reducer<PostListState, actions.PostActions> = (state = initialState, action) => {
    if(action.type === types.POST_LIST){
        return {
            ...state,
            PostList : action.payload
        };
    } else {
        return state;
    }
};

export default PostList;