import * as types from './actionTypes';

interface BlogPostProps {
    postTitle : string
    postDate : string
    postAuthor : string
    postContent : string
    postTags : Array<{key : number, label : string}>
}

export const POSTCONTENTS = (post : BlogPostProps) => {
    return {
        type : types.POST_CONTENTS,
        payload : post
    };
};

export type BlogPostActions = ReturnType<typeof POSTCONTENTS>;