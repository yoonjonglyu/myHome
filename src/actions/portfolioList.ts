import * as types from './actionTypes';

export const PORTFOLIOLIST = () => {
    return {
        type : types.PORTFOLIO_LIST,
        payload : {

        }
    };
}

export type PortfolioListActions =  ReturnType<typeof PORTFOLIOLIST>;