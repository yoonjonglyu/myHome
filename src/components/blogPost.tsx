import React from 'react';

interface BlogPostProps {

}

const BlogPostProps: React.FC<BlogPostProps> = () => {
    return (
        <React.Fragment>
            <header className="post-header">
                <h1 className="post-title">블로그 글</h1>
                <p className="post-meta">
                <time dateTime="2020-11-18T11:15:00+09:00">js date format</time>
                <span className="author">
                    (공백엑 스타일링)  ISA
                </span>
                </p>
            </header>
            <div className="post-contents">
                <p>
                    글 어떻게 구성하고 스타일링 할까? 글에는 당연히 텍스트는 들어갈거고,
                    이미지나 해드라인, 링크등은 어떻게 처리할까?
                </p>
            </div>
            <div className="post-comments">
                댓글 들갈 부분
            </div>
        </React.Fragment>
    );
};

export default BlogPostProps;