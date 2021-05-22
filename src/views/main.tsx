import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

import { Layout } from '../components/layout/layout';
import Intro from '../components/intro';
import ProfileTimeLine from '../components/portfolio/profileTimeLine';
import AboutTech from '../components/aboutTech';

import { tabIndex } from '../lib/custom/tag';

interface MainProps {
}

const QuickLink = Styled(Link)`
    text-decoration : none;
    color : unset;
`;
const HeadLine = Styled.h2`
    text-align : center;
    font-size : 1.5rem;
`;
const Description = Styled.p`
    text-align : center;
    font-size: 1.1rem;
    line-height: 1.6rem;
`;

const Main: React.FC<MainProps> = (props) => {
    const tab = tabIndex();

    const handleTab = (e: any, value: number) => {
        tab.handleTapIndex(value);
        window.scrollTo(0, 0);
    }

    return (
        <Layout>
            <React.Fragment>
                <section className="main-headline">
                    <Intro />
                </section>
                <section className="main-about">
                    <HeadLine>개인 연력</HeadLine>
                    <QuickLink to="./about" title="더 알아보기" onClick={(e) => handleTab(e, 1)}>
                        <ProfileTimeLine />
                    </QuickLink>
                </section>
                <section className="main-skill">
                    <HeadLine>기술 스택</HeadLine>
                    <Description>
                        실무에서 실제로 사용해 봤거나 토이 프로젝트에서 활용 해본적 있는 것들<br />
                    지금 당장 실무에 투입 되어서도 활용 가능한 수준의 기술 중 대표적인 것들입니다.
                </Description>
                    <AboutTech />
                </section>
                <section className="main-portfolio">
                    <HeadLine>포트폴리오</HeadLine>
                </section>
            </React.Fragment>
        </Layout>
    );
};

export { Main, MainProps }