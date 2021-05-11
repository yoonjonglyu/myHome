import * as Types from '../actionTypes';

interface PortfolioProps {
    idx: number
    title: string
    date: string
    contents: string
    tags: Array<{ idx: number, name: string }>
}

function PORTFOLIOCONTENTS(portfolio: PortfolioProps) {
    return {
        type: Types.PORTFOLIO_CONTENTS,
        payload: {
            portfolio
        }
    };
}

type PortfolioContentsAction = ReturnType<typeof PORTFOLIOCONTENTS>;

export { PORTFOLIOCONTENTS, PortfolioContentsAction }