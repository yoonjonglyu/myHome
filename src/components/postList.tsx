import React from 'react';

interface PostListProps {
}

const PostList: React.FC<PostListProps> = () => {
    return (
        <div className="post-list">
            <ul>
                <li>글 목록을 어떻게 디자인할까?</li>
                <li>각 항목 당 표시를 어떻게할까? 이미지를 넣을까 뭐가 좋을까?</li>
            </ul>
        </div>
    );
};


export default PostList;