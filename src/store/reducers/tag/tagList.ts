import { Reducer } from 'redux';

import * as Actions from '../../actions';
import * as Types from '../../actions/actionTypes';

interface TagListProps {
    tagList: {
        essay: Array<TagProps>
        tech: Array<TagProps>
        portfolio: Array<TagProps>
    }
}
interface TagProps {
    idx: number
    name: string
}

const tempData = [
    { idx: 1, name: 'HTML' },
    { idx: 2, name: 'CSS' },
    { idx: 3, name: 'JavaScript' },
    { idx: 4, name: 'TypeScript' },
    { idx: 5, name: 'Node.js' },
    { idx: 6, name: 'Webpack' },
    { idx: 7, name: 'React' }
];

const initialState: TagListProps = {
    tagList: {
        essay: tempData,
        tech: tempData,
        portfolio: tempData
    }
};

const TagList: Reducer<TagListProps, Actions.TagListAction> = (state = initialState, action) => {
    if (action.type === Types.TAG_LIST) {
        return {
            ...state,
            tagList: action.payload
        };
    } else {
        return state;
    }
};

export default TagList;