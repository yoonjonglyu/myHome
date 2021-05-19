import React from 'react';
import Styled from 'styled-components';

import { Layout } from '../components/layout/layout';
import Contact from '../components/contact';
import ProfileTimeLine from '../components/portfolio/profileTimeLine';

import DevFront1 from '../assets/images/devmatch.jpg';
import SamTest from '../assets/images/sam-test.jpg';
import SamType from '../assets/images/sam-type.jpg';

const HeadLine1 = Styled.h1`
    text-align : center;
    font-size : 1.6rem;
`;
const AboutList = Styled.ul`
    padding : 8px 20px;
    font-size : 1.1rem;
`;
const HeadLine2 = Styled.h2`
    text-align : center;
    margin-top : 24px;
`;
const HeadLine3 = Styled.h3`
    text-align : center;
`;
const Image = Styled.img`
    width : 100%;
`;


const About: React.FC = () => {
    return (
        <Layout>
            <React.Fragment>
                <section className="about-me">
                    <HeadLine1>프로필</HeadLine1>
                    <h2>류윤종(ISA)</h2>
                    <AboutList>
                        <li>1995.05.24</li>
                        <li>장인이 되고 싶은 괴짜</li>
                        <li>
                            기술 스택
                        <ul>
                                <li>HTML, CSS</li>
                                <li>JavaScript(ES5, ES6~), jQuery</li>
                                <li>TypeScript</li>
                                <li>React, Vue</li>
                                <li>Canvas</li>
                                <li>Parsing</li>
                                <li>React Native</li>
                                <li>PHP(5~7, 모던), CMS(그누보드, 워드프레스)</li>
                                <li>Node.js, Express.js</li>
                                <li>Socket.io</li>
                                <li>Mysql, Marria, Postgresql</li>
                                <li>AWS, iwinv(클라우드 & 웹호스팅)</li>
                                <li>docker, linux(ubuntu, centos)</li>
                                <li>Git, Github, Gitlab</li>
                                <li>그 외 기타 등등</li>
                            </ul>
                        </li>
                        <li>현재 방통대 재학중</li>
                    </AboutList>
                    <ProfileTimeLine />
                    <Contact />
                </section>
                <section className="about-info">
                    <HeadLine2>각종 챌린지 및 인적성 결과</HeadLine2>
                    <HeadLine3>프로그래머스 2020 Dev-Matching: 웹 프론트엔드 개발자(하반기)</HeadLine3>
                    <a href={DevFront1} target="_blank" title="프로그래머스 하반기 데브매칭">
                        <Image src={DevFront1} alt="데브매칭 상위 5프로" />
                    </a>
                    <HeadLine3>사람인 인적성</HeadLine3>
                    <a href={SamTest} target="_blank" title="사람인 인적성검사 결과">
                        <Image src={SamTest} alt="인적성 직무접합 높음, 상위 1프로" />
                    </a>
                    <HeadLine3>사람인 성향분석</HeadLine3>
                    <a href={SamType} target="_blank" title="사람인 성향 분석 결과">
                        <Image src={SamType} alt="성향 분석 관습, 진취, 예술, 탐구, 현실형" />
                    </a>
                </section>
            </React.Fragment>
        </Layout>
    );
}

export default About;