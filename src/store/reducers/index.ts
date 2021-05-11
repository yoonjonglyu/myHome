import { combineReducers } from 'redux';

import TabIndex from './tab/tabIndex';
import TagList from './tag/tagList';

import PostList from './post/postList';
import PostContents from './post/postContents';

import PortfolioList from './portfolio/portfolioList';
import Portfolio from './portfolio/portfolioContents';

const RootReducers = combineReducers({
    TabIndex,
    TagList,
    PostList,
    PostContents,
    PortfolioList,
    Portfolio
});

type RootState = ReturnType<typeof RootReducers>;

export { RootReducers, RootState }