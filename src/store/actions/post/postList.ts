import * as Types from '../actionTypes';

interface PostProps {
    postIdx: number
    postDate: string
    postAuthor: string
    postTitle: string
    postDescription: string
    postTags: Array<{ idx: number, name: string }>
}

function POSTLIST(list: Array<PostProps>) {
    return {
        type: Types.POST_LIST,
        payload: list
    };
};

type PostListAction = ReturnType<typeof POSTLIST>;

export { POSTLIST, PostListAction }