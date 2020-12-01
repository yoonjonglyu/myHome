import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import ListView from '../components/listView';
import PostList from '../components/postList';

interface PortfolioProps {
}

const Headline1 = styled.h1`
    text-align : center;
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
    const data = {
        postIdx : 1,
        postDate : "2020-12-01",
        postAuthor : "ISA",
        postTitle : "컨텐츠 리스트 임시 타이틀 길게 길게",
        postDescription : "낙원을 피어나는 되는 긴지라 피다. 바이며, 피가 이것이야말로 위하여 쓸쓸한 이것이다. 대고, 인간의 능히 있으랴? 두손을 이성은 용감하고 있는 끓는 보내는 사막이다. 찾아다녀도, 아름답고 찬미를 청춘의 이것이다. 동산에는 긴지라 대한 이상은 쓸쓸하랴? 곧 구하지 인간이 청춘의 얼마나 반짝이는 그들은 봄바람이다. 아니한 예가 같으며, 이것이다. 커다란 청춘 그림자는 이상 같이, 그들의 것이다."
    };
    const temp = [data, data, data, data, data, data, data];

    return(
        <Layout>
            <React.Fragment>
                <CategorySection className="portfolio-category">
                    <Headline1>포트폴리오</Headline1>
                    <ListView />
                </CategorySection>
                <ContentsSection className="portfolio-contents">
                    <PostList postList={temp} />
                </ContentsSection>
            </React.Fragment>
        </Layout>
    );
}

export default Portfolio;