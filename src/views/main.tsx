import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Layout from '../components/layout';
import ProfileTimeLine from '../components/profileTimeLine';

import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { RootState } from '../reducers';

interface MainProps {
    handleTapIndex: Function
}

const QuickLink = styled(Link)`
    text-decoration : none;
    color : unset;
`;

const Main : React.FC<MainProps> = (props) => {
    const {
        handleTapIndex
    } = props;

    const handleTap = (e : any, value : number) => {
        handleTapIndex(value);
    }

    return(
        <Layout>
            <React.Fragment>
            <section className="main-headline">
                <h1>메인</h1>
                <p>타이핑 느낌의 인사말 넣고</p>
            </section>
            <section className="main-about">
                <h2 style={{ textAlign : 'center'}}>연력</h2>
                <QuickLink to="./about" title="더 알아보기" onClick={(e) => {handleTap(e, 1)}}>
                    <ProfileTimeLine />
                </QuickLink>
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
};

const mapStateToProps = (state : RootState) => {
    return {
    };
};

const mapDispatchToProps = (dispatch : Dispatch<Action<any>>) => {
    return {
        handleTapIndex : (value : number) => {dispatch(actions.TAPINDEX(value))} 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);