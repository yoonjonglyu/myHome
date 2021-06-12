import React from 'react';
import Styled from 'styled-components';

interface PortfolioListProps {
    portfolioList: Array<PortfolioPorps>
}
interface PortfolioPorps {
    idx: number
    date: string
    title: string
    thum: string
    description: string
    tags: Array<{ idx: number, name: string }>
}

const PortUl = Styled.ul`
    padding: 0;
    list-style : none;
`;
const PortItem = Styled.li`
    padding-top : 14px;
    border-bottom : 1px solid blue;
`;
const PortThum = Styled.img`
    float: left;
`;
const PortBox = Styled.div`
    float : left;
    padding-left: 12px;
`;
const TagItem = Styled.li`
    display: inline-block;
    margin: 0 8px 0 4px;
    color: gray;
`;

const PortfolioList: React.FC<PortfolioListProps> = function (props) {
    const {
        portfolioList
    } = props;
    const tmpportfolioList: Array<any> = [];

    const PortfolioItem = tmpportfolioList.length > 0 ? tmpportfolioList.map((item, key) => {
        return (
            <PortItem key={key}>
                <PortThum src={item.thum} />
                <PortBox>
                    <h3>{item.title}</h3>
                    <p>{item.description}썸네일 하나 옆에 있고 길쭉한 형태로 타이틀이랑 설명등을 나열한 구조로</p>
                    <p>포트폴리오 정보를 간략히 보여주는데는 태그를 표시하는게 더 나을거같다.</p>
                </PortBox>
                <hr style={{ clear: "both" }} />
                <PortUl>
                    {item.tags.map((tag: any) => (<TagItem key={tag.idx}>{tag.name}</TagItem>))}
                </PortUl>
            </PortItem>
        );
    }) : (<h2>해당하는 포트폴리오가 없습니다.</h2>);

    return (
        <div className="portfolio-list">
            <PortUl>
                {PortfolioItem}
            </PortUl>
        </div>
    );
};


export { PortfolioList, PortfolioListProps }