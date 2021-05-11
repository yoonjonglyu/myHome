import * as Types from '../actionTypes';

function LOADPORTFOLIOLIST() {
    return {
        type: Types.LOAD_PORTFOLIO_LIST
    };
}

type LoadPortfolioListAction = ReturnType<typeof LOADPORTFOLIOLIST>;

export { LOADPORTFOLIOLIST, LoadPortfolioListAction }