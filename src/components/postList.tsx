import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { RootState } from '../reducers';

interface PostListProps {
    postList : Array<PostProps>
    tapIndex : number | false
    getPostList : Function
    getTagPostList : Function
}
interface PostProps {
    postIdx : number
    postDate : string
    postAuthor : string 
    postTitle : string 
    postDescription : string
    postTags : Array<{idx : number, name : string}>    
}

const ContentsItem = styled.div`
    padding : 30px 0;
    border-bottom : 1px solid #dbe2ef;
`;
const PostLink = styled(Link)`
    text-decoration : none;
    color : unset;
`;
const MetaText = styled.span`
    font-size : 0.9rem;
    color : gray;
`;
const Headline = styled.h2`
    font-size : 2rem;
`;
const SubText = styled.p`
    font-size : 1rem;
    color : #0f4c75;
`;

const PostList: React.FC<PostListProps> = (props) => {
    const {
        postList,
        tapIndex,
        getPostList,
        getTagPostList,
    } = props;
    const test = location.hash;
    useEffect(() => {
        const isTag = location.hash.split("?")[1]?.split("=");

        switch(tapIndex){
            case 2:
                isTag?.[0] === "tags" ? getTagPostList("essay", isTag[1]) : getPostList("essay");
                break;
            case 3:
                isTag?.[0] === "tags" ? getTagPostList("tech", isTag[1]) : getPostList("tech");
                break;
            case 4:
                isTag?.[0] === "tags" ? getTagPostList("portfolio", isTag[1]) : getPostList("portfolio");
                break;
            default:
                break;
        }
    }, [tapIndex, test]);

    const List = postList.length > 0 ? postList.map((post, key) => {
        return (
            <ContentsItem key={key}>
                <PostLink to={`?post=${post.postIdx}`}>
                    <MetaText className="post-meta"><time dateTime={post.postDate}>{post.postDate}</time> {post.postAuthor}</MetaText>
                    <Headline className="post-title">{post.postTitle}</Headline>
                    <SubText className="post-description">
                        {post.postDescription}
                    </SubText>
                </PostLink>
            </ContentsItem>
        );
    }) : (<ContentsItem> <Headline style={{textAlign : 'center'}}>원하시는 조건에 해당 하는 글이 없습니다.</Headline> </ContentsItem>); // 나중에 꾸미자

    return (
        <div className="post-list">
            {List}
        </div>
    );
};

const mapStateToProps = ({ PostList, Taps } : RootState) => {
    return {
        postList : PostList.PostList,
        tapIndex : Taps.tapIndex
    };
};

const mapDispatchToProps = (dispatch : Dispatch<Action<any>>) => {
    return {
        getPostList : (type : string) => {dispatch(actions.LOADPOSTLIST(type))},
        getTagPostList : (type : string, idx : string) => {dispatch(actions.LOADTAGPOSTLIST(type, idx))},
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);