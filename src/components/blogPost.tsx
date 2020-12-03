import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import TagList from './tagList';

import test from '../assets/images/sam-type.jpg';

interface BlogPostProps {
    PostData : Object
}

const BlogPostStyle = createGlobalStyle`
    h2 {
        font-size : 2rem;
        text-align : center;
    }
    h3 {
        font-size : 1.5rem;
        color : #f08a5d;
    }
    p {
        font-size : 1.1rem;
        line-height : 1.8rem;
        letter-spacing : 0;
    }
    img {
        width : 100%;
        margin : 8px 0; 
    }
    pre {
        margin: 8px 0;
        padding: 20px 16px;
        font-size : 1.1rem;
        line-height : 1.5rem;
        color : #eeeeee;
        background-color : #222831;
    }
    pre span {
        color : #00adb5;
    }
    pre code {
        color : #b83b5e;
    }

`;
const Fc = styled.code`
    color : #f08a5d;
`;

const BlogPostProps: React.FC<BlogPostProps> = () => {
    const Disqus = (disqus_title: string, disqus_url: string) => {
        /**
        *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
        *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
        const disqus_config = function () {
            this.page.url = disqus_url;  // Replace PAGE_URL with your page's canonical URL variable
            this.page.identifier = disqus_title; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
        if (typeof (DISQUS) === 'undefined') {
            (function () { // DON'T EDIT BELOW THIS LINE
                const d = document, s = d.createElement('script');
                s.src = 'https://https-yoonjonglyu-github-io-myhome.disqus.com/embed.js';
                s.setAttribute('data-timestamp', `${+new Date()}`);
                (d.head || d.body).appendChild(s);
            })();
        } else {
            DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.identifier = disqus_url;
                    this.page.url = disqus_url;
                    this.page.title = disqus_title;
                }
            });
        }
    };

    useEffect(() => {
        Disqus('testTitle', `https://yoonjonglyu.github.io/myHome/${location.hash.split('\/').slice(1).join('\/')}`);
    }, []);

    const tempTags = [
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
    ];

    return (
        <React.Fragment>
            <BlogPostStyle />
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
                    글은 기본적으로  p태그 안에 쓰고 단락마다 p태그를 열고 닫는다.<br />
                    여러 라인으로 글을 쓰고 글 간격이나 기타등등<br />
                    을 조정
                </p>
                <img src={test} alt="이미지는 img src로 단락 밖에" />
                <p>
                    이렇게 말이다. 해드라인도 p태그 밖에 위치한다.
                </p>
                <pre className="post-code">
                    <span>code : js</span><br/>
                    <code>const</code> foo = bar;<br />
                    <Fc>console.log(foo);</Fc>
                </pre>
                <p>
                    코드는 pre로 감싸서 p태그 밖의 스타일링은 class를 통해서가 아니라 태그 자체로 스타일링 해야할거 같다.
                </p>
            </div>
            <div className="post-tags">
                <TagList taglist={tempTags} />
            </div>
            <div className="post-comments">
                <div id="disqus_thread"></div>
            </div>
            <script id="dsq-count-scr" src="//https-yoonjonglyu-github-io-myhome.disqus.com/count.js" async></script>
        </React.Fragment>
    );
};

export default BlogPostProps;