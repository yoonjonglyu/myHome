import { Reducer } from 'redux';
import * as actions from '../../actions';
import * as types from '../../actions/actionTypes';

interface PortfolioState {
    idx : number
    title : string
    date : string
    contents : string
    tags : Array<{ idx: number, name: string }>  
}

const initialState : PortfolioState = {
    idx : 0,
    title : "test",
    date : "2021-03-25",
    contents : "어떻게하면 최대한 게으르면서 좋은 결과물을 만들 수 있을까?",
    tags : [{idx : 0, name: "학습"}]
};

const Portfolio : Reducer<PortfolioState, actions.PortfolioActions> = (state = initialState, action) => {
    if(action.type === types.POST_LIST){
        return {
            ...state,
            Portfolio : action.payload
        };
    } else {
        return state;
    }
};

export default Portfolio;