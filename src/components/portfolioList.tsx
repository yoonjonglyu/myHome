import React from 'react';

interface PortfolioListProps {
}

const PortfolioList: React.FC<PortfolioListProps> = () => {
    return (
        <div className="portfolio-list">
            <ul>
                <li>글 목록을 어떻게 디자인할까?</li>
                <li>각 항목 당 표시를 어떻게할까? 이미지를 넣을까 뭐가 좋을까?</li>
            </ul>
        </div>
    );
};


export default PortfolioList;