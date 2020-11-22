import React from 'react';

interface BlogPostProps {

}

const BlogPostProps: React.FC<BlogPostProps> = () => {
    return (
        <React.Fragment>
            <header className="post-header">
                <h2 className="post-title">블로그 글</h2>
                <p className="post-meta">
                <time dateTime="2020-11-18T11:15:00+09:00">js date format</time>
                <span className="author">
                    (공백엑 스타일링)  ISA
                </span>
                </p>
            </header>
            <div className="post-contents">
                <h3>소제목은 h3로</h3>
                <p>
                    글 은 기본적으로  p태그 안에 쓰고 단락마다 p태그를 열고 닫는다.
                </p>
                <img src="#/" alt="이미지는 img src로 단락 밖에" />
                <p>
                    이렇게 말이다. 해드라인도 p태그 밖에 위치한다.<br />

                </p>
                <pre className="post-code" style={{border : "1px solid red"}}>
                        code : js
                        const foo = bar;
                        console.log(foo);
                </pre>
                <p>
                    코드는 pre로 감싸서 p태그 밖의 스타일링은 class를 통해서가 아니라 태그 자체로 스타일링 해야할거 같다.
                </p>
            </div>
            <div className="post-tags">
                태그 목록들 그리드로 넣으면 되지 않을까 생각중
            </div>
            <div className="post-comments">
                댓글 들갈 부분
            </div>
        </React.Fragment>
    );
};

export default BlogPostProps;