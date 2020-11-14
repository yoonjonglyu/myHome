import React from 'react';

import Layout from '../components/layout';

interface AboutProps {
    
}

const About : React.FC<AboutProps> = () => {
    return(
        <Layout>
            <React.Fragment>
            <section className="about-me">
                <h1>프로필</h1>
                <p>따로 컴포넌트를 만든다.</p>
                <a href="https://github.com/yoonjonglyu/" target="_blank" >github</a>
                <a href="mailto:isa@kakao.com" >mail</a>
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