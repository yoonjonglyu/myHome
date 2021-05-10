import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout/layout';
import ListView from '../components/listView';
import PortfolioList from '../components/portfolio/portfolioList';

interface PortfolioProps {
}

const Headline1 = styled.h1`
    text-align : center;
    font-size : 1.2rem;
`;
const CategorySection = styled.section`
    margin : 0;
`;
const ContentsSection = styled.section`
    margin-top : 16px;
    border : 1px solid #00adb5;
    border-left : 0;
    border-right : 0;
`;


const Portfolio : React.FC<PortfolioProps> = () => {
    return(
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
}

export default Portfolio;