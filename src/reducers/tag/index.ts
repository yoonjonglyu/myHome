import { Reducer } from 'redux';
import * as actions from '../../actions';
import * as types from '../../actions/actionTypes';

interface TagListState {
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

const initialState: TagListState = {
    tagList: {
        essay: tempData,
        tech: tempData,
        portfolio: tempData
    }
};

const TagList: Reducer<TagListState, actions.TagActions> = (state = initialState, action) => {
    if (action.type === types.TAG_LIST) {
        return {
            ...state,
            tagList: action.payload
        };
    } else {
        return state;
    }
};

export default TagList;