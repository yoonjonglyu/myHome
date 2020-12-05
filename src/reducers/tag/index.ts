import { Reducer } from 'redux';
import * as actions from '../../actions';
import * as types from '../../actions/actionTypes';

interface TagListState {
    tagList : {
        essay : Array<any>
        tech : Array<any>
        portfolio : Array<any>
    }
}
/** 여기서 생각할 점은 각 태그 리스트가 에세이, 기술, 포트폴리오로 나뉜다는 점이다. 어떻게 처리할까? */
const tempData = [// 해당 데이터를 어떻게 만드냐에 따라 뷰가 달라진다. 뷰모델 부분에서 가공할 필요가 있다.
    [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }, { name: 'TypeScript' }],
    [{ name: 'Node.js' }, { name: 'Webpack' }, { name: 'Node.js' }],
];
const initialState : TagListState = {
    tagList : {
        essay : tempData,
        tech : tempData,
        portfolio : tempData
    }
};

const TagList : Reducer<TagListState, actions.TagActions> = (state = initialState, action) => {
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