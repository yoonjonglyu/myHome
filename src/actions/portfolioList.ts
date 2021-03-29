import * as types from './actionTypes';

interface PortfolioProps {
    portfolioList : Array<{
        idx: number
        date: string
        title: string
        thum : string
        description: string
        tags: Array<{ idx: number, name: string }>  
    }>
}
export const PORTFOLIOLIST = (list : Array<PortfolioProps>) => {
    return {
        type : types.PORTFOLIO_LIST,
        payload : {
            list
        }
    };
}

export type PortfolioListActions =  ReturnType<typeof PORTFOLIOLIST>;