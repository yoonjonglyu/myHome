import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/reducers';

import * as Actions from '../../store/actions';

function postList() {
    const { postList } = useSelector((state: RootState) => ({
        postList : state.PostList.PostList
    }));

    const dispatch = useDispatch();
    const getPostList = () => {
        dispatch(Actions.LOADPOSTLIST);
    }
    
    return { postList, getPostList };
}


export { postList }