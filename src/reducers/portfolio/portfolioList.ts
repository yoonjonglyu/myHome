import { Reducer } from 'redux';
import * as actions from '../../actions';
import * as types from '../../actions/actionTypes';

interface PortfolioListState {
    portfolioList : Array<{
        idx: number
        date: string
        title: string
        thum : string
        description: string
        tags: Array<{ idx: number, name: string }>  
    }>
}


const initialState : PortfolioListState = {
    portfolioList : [
        {
            idx : 1,
            date : "2021-04-01",
            title: "test 포트폴리오",
            thum: "test",
            description : "간단한 설명",
            tags : [
                {
                    idx : 1,
                    name : "포트폴리오 초기값"
                }
            ]
        }
    ]
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