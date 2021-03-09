import { Reducer } from 'redux';
import * as actions from '../../actions';
import * as types from '../../actions/actionTypes';

interface PortfolioState {
}

const initialState : PortfolioState = {
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