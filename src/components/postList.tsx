import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface PostProps {
    postIdx : number
    postDate : string
    postAuthor : string 
    postTitle : string 
    postDescription : string
}

interface PostListProps {
    postList : Array<PostProps> 
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
        postList
    } = props;

    const List = postList.map((post, key) => {
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
    });

    return (
        <div className="post-list">
            {List}
        </div>
    );
};


export default PostList;