import { Reducer } from 'redux';

import * as Actions from '../../actions';
import * as Types from '../../actions/actionTypes';

interface PortfolioContentsProps {
    idx: number
    title: string
    date: string
    contents: string
    tags: Array<{ idx: number, name: string }>
}

const initialState: PortfolioContentsProps = {
    idx: 0,
    title: "test",
    date: "2021-03-25",
    contents: "어떻게하면 최대한 게으르면서 좋은 결과물을 만들 수 있을까?",
    tags: [{ idx: 0, name: "학습" }]
};

const Portfolio: Reducer<PortfolioContentsProps, Actions.PortfolioContentsAction> = function (state = initialState, action) {
    if (action.type === Types.POST_LIST) {
        return {
            ...state,
            portfolio: action.payload
        };
    } else {
        return state;
    }
};

export default Portfolio;