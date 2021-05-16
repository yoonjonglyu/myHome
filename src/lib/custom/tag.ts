import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/reducers';
import * as Actions from '../../store/actions';

function tagList() {
    const { tagList } = useSelector((state: RootState) => ({
        tagList: state.TagList.tagList
    }));

    return { tagList };
}
function tabIndex() {
    const { tabIndex } = useSelector((state: RootState) => ({
        tabIndex: state.TabIndex.tabIndex
    }));

    const dispatch = useDispatch();
    const handleTapIndex = (index: number) => {
        dispatch(Actions.TABINDEX(index));
    }
    return { tabIndex, handleTapIndex };
}


export { tagList, tabIndex }