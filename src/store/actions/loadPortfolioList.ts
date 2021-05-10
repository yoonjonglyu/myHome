import * as types from './actionTypes';

export const LOADPORTFOLIOLIST = () => {
    return {
        type : types.LOAD_PORTFOLIO_LIST,
        payload : {

        }
    };
}

export type LoadPortfolioListActions =  ReturnType<typeof LOADPORTFOLIOLIST>;