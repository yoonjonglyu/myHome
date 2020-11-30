import React from 'react';

import Layout from '../components/layout';
import Contact from '../components/contact';
import ProfileTimeLine from '../components/profileTimeLine';

interface AboutProps {
    
}

const About : React.FC<AboutProps> = () => {
    return(
        <Layout>
            <React.Fragment>
            <section className="about-me">
                <h1 style={{textAlign : 'center', fontSize : '1.6rem'}}>프로필</h1>
                <h2>류윤종(ISA)</h2>
                <ul style={{padding : '8px 20px', fontSize : '1.1rem'}}>
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
                </ul>
                <ProfileTimeLine />
                <Contact />
            </section>
            <section className="about-info">
                <p>
                    각종 챌린지 또는 인적성 결과
                </p>
            </section>
            </React.Fragment>
        </Layout>
    );
}

export default About;