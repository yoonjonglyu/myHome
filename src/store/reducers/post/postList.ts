import { Reducer } from 'redux';

import * as Actions from '../../actions';
import * as Types from '../../actions/actionTypes';

interface PostListProps {
    PostList: Array<{
        postIdx: number
        postDate: string
        postAuthor: string
        postTitle: string
        postDescription: string
        postTags: Array<{ idx: number, name: string }>
    }>
}

const tempData = {
    postIdx: 1,
    postDate: "2020-12-06",
    postAuthor: "ISA 류윤종",
    postTitle: "일어나, 코딩해야지",
    postDescription: "진정한 게으름은 미래까지 고려해서 불필요한 귀찮음이 발생하지 않게 하는 것이다.",
    postTags: [
        {
            idx: 1,
            name: "HTML"
        },
        {
            idx: 2,
            name: "CSS"
        }
    ]
}

const initialState: PostListProps = {
    PostList: [tempData, tempData, tempData]
};

const PostList: Reducer<PostListProps, Actions.PostListAction> = (state = initialState, action) => {
    if (action.type === Types.POST_LIST) {
        return {
            ...state,
            PostList: action.payload
        };
    } else {
        return state;
    }
};

export default PostList;