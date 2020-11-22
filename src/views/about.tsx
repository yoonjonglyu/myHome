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
                <h1>프로필</h1>
                <p>자기소개 간략히 한다.</p>
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