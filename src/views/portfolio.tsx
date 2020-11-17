import React from 'react';


import Layout from '../components/layout';
import ListView from '../components/listView';

interface PortfolioProps {
    
}

const Portfolio : React.FC<PortfolioProps> = () => {
    return(
        <Layout>
            <React.Fragment>
                <section className="portfolio-category">
                    <h1>포트폴리오</h1>
                    <ListView />
                </section>
                <section className="portfolio-items">
                    <p>스크롤 방식의 페이지뷰</p>
                </section>
            </React.Fragment>
        </Layout>
    );
}

export default Portfolio;