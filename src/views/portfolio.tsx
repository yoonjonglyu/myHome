import React from 'react';
import Styled from 'styled-components';

import { Layout } from '../components/layout/layout';
import ListView from '../components/listView';
import PortfolioList from '../components/portfolio/portfolioList';

interface PortfolioProps {
}

const Headline1 = Styled.h1`
    text-align : center;
    font-size : 1.2rem;
`;
const CategorySection = Styled.section`
    margin : 0;
`;
const ContentsSection = Styled.section`
    margin-top : 16px;
    border : 1px solid #00adb5;
    border-left : 0;
    border-right : 0;
`;


const Portfolio: React.FC<PortfolioProps> = function () {
    return (
        <Layout>
            <React.Fragment>
                <CategorySection className="portfolio-category">
                    <Headline1>포트폴리오</Headline1>
                    <ListView />
                </CategorySection>
                <ContentsSection className="portfolio-contents">
                    <PortfolioList portfolioList={[]} />
                </ContentsSection>
            </React.Fragment>
        </Layout>
    );
};

export { Portfolio, PortfolioProps }