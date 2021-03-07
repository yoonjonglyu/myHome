import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

interface PortfolioListProps {
    portfolioList : Array<portfolioPorps>
}
interface portfolioPorps {
    Idx: number
    Date: string
    Title: string
    Description: string
    Tags: Array<{ idx: number, name: string }>
}

const PortfolioList: React.FC<PortfolioListProps> = (props) => {
    const {
        portfolioList
    } = props;

    const PortfolioItem = portfolioList.length > 0 ? portfolioList.map((item) => {
        return (
            <li>
                <img src="test" />
            </li>
        );
    }) : (<h2>해당하는 포트폴리오가 없습니다.</h2>);

    return (
        <div className="portfolio-list">
            <ul>
                <li><img src="test" /></li>
            </ul>
        </div>
    );
};


export default PortfolioList;