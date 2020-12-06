import * as types from './actionTypes';

interface PostProps {
    postIdx : number
    postDate : string
    postAuthor : string 
    postTitle : string 
    postDescription : string
    postTags : Array<{key : number, label : string}>    
}

export const POSTLIST = (list : Array<PostProps>) => {
    return {
        type : types.POST_LIST,
        payload : list
    };
};

export type PostActions = ReturnType<typeof POSTLIST>;