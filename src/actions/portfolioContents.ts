import * as types from './actionTypes';

export const PORTFOLIOCONTENTS = () => {
    return {
        type : types.PORTFOLIO_CONTENTS,
        payload : {

        }
    };
}

export type PortfolioActions =  ReturnType<typeof PORTFOLIOCONTENTS>;