import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/reducers';

import * as Actions from '../../store/actions';

function portfolioList() {
    const { portfolioList } = useSelector((state: RootState) => ({
        portfolioList: state.PortfolioList.portfolioList
    }));

    const dispatch = useDispatch();
    const getPortfolioList = () => {
        dispatch(Actions.LOADPORTFOLIOLIST);
    }

    return { portfolioList, getPortfolioList };
}

function portfolioContents() {
    const { portfolioContents } = useSelector((state: RootState) => ({
        portfolioContents: state.Portfolio.contents
    }));

    const dispatch = useDispatch();
    const getPortfolioContents = () => {
        dispatch(Actions.LOADPORTFOLIOCONTENTS);
    }

    return { portfolioContents, getPortfolioContents };
}



export { portfolioList, portfolioContents }