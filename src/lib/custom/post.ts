import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/reducers';

import * as Actions from '../../store/actions';

function postList() {
    const { postList } = useSelector((state: RootState) => ({
        postList: state.PostList.PostList
    }));

    const dispatch = useDispatch();
    const getPostList = () => {
        dispatch(Actions.LOADPOSTLIST);
    }
    const getPostListByTag = (type: string, idx: string) => {
        dispatch(Actions.LOADPOSTLISTBYTAG(type, idx));
    }

    return { postList, getPostList, getPostListByTag };
}
function postContents() {
    const { postContents } = useSelector((state: RootState) => ({
        postContents: state.PostContents.post
    }));

    const dispatch = useDispatch();
    const getPostContents = (type: string, idx: string) => {
        dispatch(Actions.LOADPOSTCONTENTS(type, idx));
    }

    return { postContents, getPostContents }
}


export { postList, postContents }