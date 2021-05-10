import * as types from './actionTypes';

interface PortfolioProps {
    idx : number
    title : string
    date : string
    contents : string
    tags : Array<{ idx: number, name: string }>  
}

export const PORTFOLIOCONTENTS = (portfolio : PortfolioProps) => {
    return {
        type : types.PORTFOLIO_CONTENTS,
        payload : {
            portfolio
        }
    };
}

export type PortfolioActions =  ReturnType<typeof PORTFOLIOCONTENTS>;