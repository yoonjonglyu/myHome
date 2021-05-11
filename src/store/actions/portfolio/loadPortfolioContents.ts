import * as Types from '../actionTypes';

function LOADPORTFOLIOCONTENTS() {
    return {
        type: Types.LOAD_PORTFOLIO_CONTENTS
    };
}

type LoadPortfolioContentsAction = ReturnType<typeof LOADPORTFOLIOCONTENTS>;

export { LOADPORTFOLIOCONTENTS, LoadPortfolioContentsAction }