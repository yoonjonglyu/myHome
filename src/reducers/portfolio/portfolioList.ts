import { Reducer } from 'redux';
import * as actions from '../../actions';
import * as types from '../../actions/actionTypes';

interface PortfolioListState {
    portfolioList : Array<{
        Idx: number
        Date: string
        Title: string
        Description: string
        Tags: Array<{ idx: number, name: string }>  
    }>
}


const initialState : PortfolioListState = {
    portfolioList : []
};

const PortfolioList : Reducer<PortfolioListState, actions.PortfolioListActions> = (state = initialState, action) => {
    if(action.type === types.POST_LIST){
        return {
            ...state,
            PortfolioList : action.payload
        };
    } else {
        return state;
    }
};

export default PortfolioList;