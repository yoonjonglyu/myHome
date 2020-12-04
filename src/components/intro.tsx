import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import BackGroundIMG from '../assets/images/intro_1280.png';

interface IntroProps {

}
const Cursor = keyframes`
    0%{border-right: 1px solid #fff} 
    50%{border-right: 1px solid #000} 
    100%{border-right: 1px solid #fff} 
`;
const IntroBox = styled.div`
    width : 100%;
    min-height : 400px;
    text-align : center;
    color : white;
    background-image : url('${BackGroundIMG}');
    background-size : cover;
`;
const Headline = styled.h1`
    display : inline-block;
    animation : ${Cursor} 0.5s step-end infinite;
    animation : ${props => props.isEnd ? '' : "none"}
`;
const AboutHead = styled.span`
    display : inline-block;
    animation : ${Cursor} 0.5s step-end infinite;
    animation : ${props => props.isEnd ? '' : "none"}
`;
const IntroText = styled.span`
    display : inline-block;
    animation : ${Cursor} 0.5s step-end infinite;
`;

const Intro: React.FC<IntroProps> = () => {
    const helloText = "Hello, World!";
    const aboutText = "소프트웨어 장인을 목표로 노력하는 개발자 류윤종입니다.";
    const subText = [
        "JavaScript를(TypeScript) 이용한 풀스택 개발을 합니다.",
        "클린 코드, 누구나 이해하기 쉬운 코드 견고한 구조를 지향합니다.",
        "늘 지식의 영역을 넘어서 지혜의 영역을 고민합니다."
    ];
    const [headline, setHeadline] = useState("");
    const [about, setAbout] = useState("");
    const [intro, setIntro] = useState("");
    const [introIndex, setIntroIndex] = useState(0);
    const [headAvail, setHeadAvail] = useState(true);
    const [aboutAvail, setAboutAvail] = useState(true);

    const typing = (dom: React.Dispatch<React.SetStateAction<string>>, text: string) => {
        dom(text);
    }

    const typeIntro = () => {
        if (headline.length < helloText.length) {
            const state = helloText.split('');
            typing(setHeadline, `${headline}${state[headline.length]}`);
        } else if (about.length < aboutText.length) {
            const state = aboutText.split('');
            typing(setAbout, `${about}${state[about.length]}`);

            if (headAvail === true) {
                setHeadAvail(false);
            }
        } else if (intro.length < subText[introIndex].length) {
            const state = subText[introIndex].split('');
            typing(setIntro, `${intro}${state[intro.length]}`);

            if (aboutAvail === true) {
                setAboutAvail(false);
            }
        } else {
            let state = 0;
            if (introIndex + 1 < subText.length) {
                state = 1 + introIndex;
                setIntroIndex((1 + introIndex));
            } else {
                state = 0;
                setIntroIndex(0);
            }
            typing(setIntro, subText[state][0]);
        }
    };

    useEffect(() => {
        setTimeout(typeIntro, 50);
    }, [headline, about, intro]);

    return (
        <IntroBox>
            <Headline className="intro-hello" isEnd={headAvail}>
                {headline}
            </Headline>
            <p>
                <AboutHead isEnd={aboutAvail}>
                    {about}
                </AboutHead>
            </p>
            <p>
                <IntroText>
                    {intro}
                </IntroText>
            </p>
        </IntroBox>
    );
};

export default Intro;