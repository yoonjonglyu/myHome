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
const StarLight = keyframes`
    0%{opacity : 0.9} 
    50%{opacity : 0.8} 
    100%{opacity : 1} 
`;
const IntroBox = styled.div`
    width : 100%;
    min-height : 380px;
    text-align : center;
    color : white;
    background-image : url('${BackGroundIMG}');
    background-size : cover;
`;

const Headline = styled.h1<{isEnd : boolean}>`
    display : inline-block;
    margin : 90px 0 20px 0;
    font-size : ${props => props.isEnd ? "2.5rem" : "2rem"};
    line-height : 2rem;
    color : #eaeaea;
    &:after {
        content : '';
        animation : ${props => props.isEnd ? 'none' : Cursor } 0.5s step-end infinite;
    }
`;
const AboutHead = styled.span<{isStart : boolean, isEnd : boolean}>`
    display : inline-block;
    margin : 20px 8px;
    font-size : 1.3rem;
    line-height : 1.6rem;
    color : #08d9d6;
    animation : ${props => props.isEnd ? StarLight : 'none'} 0.5s step-end infinite;
    &:after {
        content : '';
        animation : ${props => (props.isStart && props.isEnd === false) ? Cursor : 'none'} 0.5s step-end infinite;
    }
`;
const IntroText = styled.span<{isStart : boolean}>`
    display : inline-block;
    font-size : 1.2rem;
    line-height : 1.5rem;
    color : #ff2e63;
    &:after {
        content : '';
        animation : ${props => props.isStart ? Cursor : 'none'} 0.5s step-end infinite;
    }
`;

const Intro: React.FC<IntroProps> = () => {
    const helloText = "Hello, World!";
    const aboutText = "소프트웨어 장인을 목표로 노력하는 개발자 류윤종입니다.";
    const subText = [
        "JavaScript(TypeScript)를 이용한 풀스택 개발을 지향합니다.",
        "클린 코드, 누구나 이해하기 쉬운 코드 견고한 구조를 지향합니다.",
        "늘 표면을 넘어 그 너머의 원리를 고민합니다."
    ];
    const [headline, setHeadline] = useState("");
    const [about, setAbout] = useState("");
    const [intro, setIntro] = useState("");
    const [introIndex, setIntroIndex] = useState(0);
    const [headAvail, setHeadAvail] = useState(false);
    const [aboutAvail, setAboutAvail] = useState(false);
    const [time, setTime] = useState(100);

    const typing = (dom: React.Dispatch<React.SetStateAction<string>>, text: string) => {
        dom(text);
    }

    const typeIntro = () => {
        if (headline.length < helloText.length) { // hello world typing
            const state = helloText.split('');
            typing(setHeadline, `${headline}${state[headline.length]}`);
        } else if (about.length < aboutText.length) { // about typing
            const state = aboutText.split('');
            typing(setAbout, `${about}${state[about.length]}`);

            if (headAvail === false) { 
                setHeadAvail(true);
            }
        } else if (intro.length < subText[introIndex].length) { // intro typing
            if (intro.length === (subText[introIndex].length - 1)) { // 문장 완성 후 잠시 멈춤
                setTime(800);
            }
            const state = subText[introIndex].split('');
            typing(setIntro, `${intro}${state[intro.length]}`);

            if (aboutAvail === false) {
                setAboutAvail(true);
                setTime(150);
            }
        } else { // intro 초기화
            let state = 0;
            if (introIndex + 1 < subText.length) {
                state = 1 + introIndex;
                setIntroIndex((1 + introIndex));
            } else {
                state = 0;
                setIntroIndex(0);
            }
            setTime(150);
            typing(setIntro, subText[state][0]);
        }
    };

    useEffect(() => {
        const set = setTimeout(typeIntro, time);
        
        const clean = () => {
            clearTimeout(set);
        }
        
        return  clean;
    }, [headline, about, intro]);

    return (
        <IntroBox>
            <Headline className="intro-hello" isEnd={headAvail}>
                {headline}<span></span>
            </Headline>
            <p>
                <AboutHead isStart={headAvail} isEnd={aboutAvail}>
                    {about}
                </AboutHead>
            </p>
            <p>
                <IntroText isStart={aboutAvail}>
                    {intro}
                </IntroText>
            </p>
        </IntroBox>
    );
};

export default Intro;