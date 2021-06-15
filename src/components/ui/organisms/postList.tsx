import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

import { postList } from '../../../lib/custom/post';
import { tabIndex } from '../../../lib/custom/tag';

interface PostListProps {

}
interface PostProps {
    postIdx: number
    postDate: string
    postAuthor: string
    postTitle: string
    postDescription: string
    postTags: Array<{ idx: number, name: string }>
}

const ContentsItem = Styled.div`
    padding : 30px 0;
    border-bottom : 1px solid #dbe2ef;
`;
const PostLink = Styled(Link)`
    text-decoration : none;
    color : unset;
`;
const MetaText = Styled.span`
    font-size : 0.9rem;
    color : gray;
`;
const Headline = Styled.h2`
    font-size : 2rem;
`;
const SubText = Styled.p`
    font-size : 1rem;
    color : #0f4c75;
`;

const PostList: React.FC<PostListProps> = function (props) {
    const post = postList();
    const tab = tabIndex();
    const [tags, setTags] = useState(location.hash.split("?")[1]);
    useEffect(() => {
        console.log(tags);
        if (tags !== location.hash.split("?")[1]) setTags(location.hash.split("?")[1]);
    });
    useEffect(() => {
        const queryString = new URLSearchParams(tags);
        switch (tab.tabIndex) {
            case 2:
                isTag() ? post.getPostListByTag("essay", getTag()) : post.getPostList("essay");
                break;
            case 3:
                isTag() ? post.getPostListByTag("tech", getTag()) : post.getPostList("tech");
                break;
            case 4:
                isTag() ? post.getPostListByTag("portfolio", getTag()) : post.getPostList("portfolio");
                break;
            default:
                break;
        }

        function isTag() {
            return queryString.has("tags") && queryString.get("tags") !== null;
        }
        function getTag() {
            const result = queryString.get("tags");
            if (result !== null) {
                return result;
            } else {
                return '';
            }
        }
    }, [tab.tabIndex, tags]);

    const List = post.postList.length > 0 ? post.postList.map((post, key) => {
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
    }) : (<ContentsItem> <Headline style={{ textAlign: 'center' }}>원하시는 조건에 해당 하는 글이 없습니다.</Headline> </ContentsItem>); // 나중에 꾸미자

    return (
        <div className="post-list">
            {List}
        </div>
    );
};

export { PostList, PostListProps }