import { Reducer } from 'redux';
import * as actions from '../../actions';
import * as types from '../../actions/actionTypes';

interface BlogPostState {
    BlogPost : {
        postTitle : string
        postDate : string
        postAuthor : string
        postContent : string
        postTags : Array<{key : number, label : string}>
    }
}

const initialState : BlogPostState = {
    BlogPost : {
        postTitle : "",
        postDate : "",
        postAuthor : "",
        postContent : "",
        postTags : []
    } 
}
const BlogPost : Reducer<BlogPostState, actions.BlogPostActions> = (state = initialState, action) => {
    if(action.type === types.POST_LIST){
        return {
            ...state,
            BlogPost : action.payload
        };
    } else {
        return state;
    }
};

export default BlogPost;