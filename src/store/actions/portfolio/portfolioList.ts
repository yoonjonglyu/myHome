import * as Types from '../actionTypes';

interface PortfolioProps {
    portfolioList: Array<{
        idx: number
        date: string
        title: string
        thum: string
        description: string
        tags: Array<{ idx: number, name: string }>
    }>
}

function PORTFOLIOLIST(list: Array<PortfolioProps>) {
    return {
        type: Types.PORTFOLIO_LIST,
        payload: {
            list
        }
    };
}

type PortfolioListActions = ReturnType<typeof PORTFOLIOLIST>;

export { PORTFOLIOLIST, PortfolioListActions }