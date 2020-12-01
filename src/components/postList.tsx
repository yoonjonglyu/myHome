import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface PostListProps {
    postList : Array<any>
}

const ContentsItem = styled.div`
    padding : 30px 0;
    border-bottom : 1px solid #dbe2ef;
`;
const PostLink = styled(Link)`
    text-decoration : none;
    color : unset;
`
const Headline = styled.h2`
    font-size : 2rem;
`;

const PostList: React.FC<PostListProps> = (props) => {
    const {
        postList
    } = props;

    const List = postList.map((post, key) => {
        return (
            <ContentsItem key={key}>
                <PostLink to={`?${key}`}>
                    <span><time dateTime="2020-12-01">2020.12.01</time> 류윤종</span>
                    <Headline>포트폴리오 title이랴 이랴 이랴 ! 이랴!! 이랴랴랼! 이랴!</Headline>
                    <p>
                    낙원을 피어나는 되는 긴지라 피다. 바이며, 피가 이것이야말로 위하여 쓸쓸한 이것이다. 대고, 인간의 능히 있으랴? 두손을 이성은 용감하고 있는 끓는 보내는 사막이다. 찾아다녀도, 아름답고 찬미를 청춘의 이것이다. 동산에는 긴지라 대한 이상은 쓸쓸하랴? 곧 구하지 인간이 청춘의 얼마나 반짝이는 그들은 봄바람이다. 아니한 예가 같으며, 이것이다. 커다란 청춘 그림자는 이상 같이, 그들의 것이다.
                    </p>
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