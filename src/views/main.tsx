import React from 'react';

import Layout from '../components/layout';
import ProfileTimeLine from '../components/profileTimeLine';

interface MainProps {
    
}

const Main : React.FC<MainProps> = () => {
    return(
        <Layout>
            <React.Fragment>
            <section className="main-headline">
                <h1>메인</h1>
                <p>타이핑 느낌의 인사말 넣고</p>
            </section>
            <section className="main-about">
                <h2 style={{ textAlign : 'center'}}>연력</h2>
                <a href="./about" title="더 알아보기" style={{ textDecoration : 'none', color : 'unset'}}>
                    <ProfileTimeLine />
                </a>
            </section>
            <section className="main-skill">
                <p>기술소개</p>
            </section>
            <section className="main-portfolio">
                <p>포트폴리오 간략히 소개</p>
            </section>
            </React.Fragment>
        </Layout>
    );
}

export default Main;