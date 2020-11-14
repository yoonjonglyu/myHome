import React from 'react';


import Layout from '../components/layout';

interface PortfolioProps {
    
}

const Portfolio : React.FC<PortfolioProps> = () => {
    return(
        <Layout>
            <React.Fragment>
                <section className="portfolio-category">
                    <h1>포트폴리오</h1>
                    <p>데이터를 태그 또는 카테고리 정보로 분류해서 보기 좋게 만들 생각</p>
                </section>
                <section className="portfolio-items">
                    <p>스크롤 방식의 페이지뷰</p>
                </section>
            </React.Fragment>
        </Layout>
    );
}

export default Portfolio;