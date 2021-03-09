import * as types from './actionTypes';

export const LOADPORTFOLIOCONTENTS = () => {
    return {
        type : types.LOAD_PORTFOLIO_CONTENTS,
        payload : {
            
        }
    };
}

export type LoadPortfolioActions =  ReturnType<typeof LOADPORTFOLIOCONTENTS>;