import * as actions from '../../actions';
import * as types from '../../actions/actionTypes';

interface TagListState {
    tagList : Array<any>
}
/** 여기서 생각할 점은 각 태그 리스트가 에세이, 기술, 포트폴리오로 나뉜다는 점이다. 어떻게 처리할까? */
const initialState : TagListState = {
    tagList : []
};

const TagList = (state : TagListState = initialState, action : actions.TapActions) => {
    if(action.type === types.TAG_LIST){
        return {
            ...state,
            tagList : action.payload
        };
    } else {
        return state;
    }
};

export default TagList;