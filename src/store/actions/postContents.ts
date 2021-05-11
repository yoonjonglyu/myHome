import * as Types from './actionTypes';

interface BlogPostProps {
    postTitle: string
    postDate: string
    postAuthor: string
    postContent: string
    postTags: Array<{ idx: number, name: string }>
}

function POSTCONTENTS(post: BlogPostProps) {
    return {
        type: Types.POST_CONTENTS,
        payload: post
    };
};

type BlogPostActions = ReturnType<typeof POSTCONTENTS>;

export { POSTCONTENTS, BlogPostActions }