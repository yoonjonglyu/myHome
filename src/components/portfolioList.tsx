import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../reducers';

interface PortfolioListProps {
    portfolioList : Array<portfolioPorps>
}
interface portfolioPorps {
    idx: number
    date: string
    title: string
    thum : string
    description: string
    tags: Array<{ idx: number, name: string }>
}

const PortfolioList: React.FC<PortfolioListProps> = (props) => {
    const {
        portfolioList 
    } = props; // 컨트롤러같은 구성이 좀 더 세분화 된다는 가정하에 임시 props 컴포넌트 단위로 아키텍처 구성을 어떻게 할지는 아직 고민할 부분이 많다.
    const tmpportfolioList  = useSelector((state : RootState) => state.PortfolioList.portfolioList);

    const PortfolioItem = tmpportfolioList.length > 0 ? tmpportfolioList.map((item, key) => {
        return (
            <li key={key}>
                <img src={item.thum} />
                <h3>{item.title}</h3>
                <p>{item.description}썸네일 하나 옆에 있고 길쭉한 형태로 타이틀이랑 설명등을 나열한 구조로</p>
                <p>포트폴리오 정보를 간략히 보여주는데는 태그를 표시하는게 더 나을거같다.</p>
            </li>
        );
    }) : (<h2>해당하는 포트폴리오가 없습니다.</h2>);

    return (
        <div className="portfolio-list">
            <ul>
                {PortfolioItem}
            </ul>
        </div>
    );
};


export default PortfolioList;