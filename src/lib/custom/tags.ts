import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/reducers';

import * as Actions from '../../store/actions';

function tagList() {
    const { tagList } = useSelector((state: RootState) => ({
        tagList : state.TagList.tagList
    }));

    const dispatch = useDispatch();
    const getTagList = () => {
        dispatch(Actions.LOADTAGLIST);
    }
    
    return { tagList, getTagList };
}

export { tagList }