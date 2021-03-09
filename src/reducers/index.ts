import { combineReducers } from 'redux';

import Taps from './tap';
import TagList from './tag';
import PostList from './post';
import BlogPost from './blogPost';
import PortfolioList from './portfolio/portfolioList';
import Portfolio from './portfolio/portfolio';

const RootReducers = combineReducers({
    Taps, TagList, PostList, BlogPost, PortfolioList, Portfolio
});

export default RootReducers;

export type RootState = ReturnType<typeof RootReducers>;