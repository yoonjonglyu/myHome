import { useSelector } from 'react-redux';

import { RootState } from '../../store/reducers';


function tagList() {
    const { tagList } = useSelector((state: RootState) => ({
        tagList: state.TagList.tagList
    }));

    return { tagList };
}


export { tagList }