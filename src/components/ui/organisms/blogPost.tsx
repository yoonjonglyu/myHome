import React, { useEffect } from 'react';
import Styled, { createGlobalStyle } from 'styled-components';

import { TagList } from '../molecules/tagList';

import { postContents } from '../../../lib/custom/post';
import { tabIndex } from '../../../lib/custom/tag';

interface BlogPostProps {

}

const BlogPostStyle = createGlobalStyle`
    h3 {
        font-size : 1.5rem;
        color : #f08a5d;
    }
    p {
        font-size : 1.1rem;
        color : #323232;
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
    pre fc {
        color : #f08a5d;
    }
`;
const PostTitle = Styled.h2`
    font-size : 2rem;
    text-align : center;
`;
const PostMeta = Styled.p`
    color : #2b2e4a;
`;
const PostTime = Styled.time`
    font-size : 1.1rem;
    padding-right : 6px;
`;
const PostAuthor = Styled.strong`
    font-size : 1rem;
`;

const BlogPost: React.FC<BlogPostProps> = function (props) {
    const post = postContents();
    const tab = tabIndex();
    const {
        postTitle,
        postDate,
        postAuthor,
        postContent,
        postTags
    } = post.postContents;
    const Disqus = (disqus_title: string, disqus_url: string) => {
        let DISQUS: any;
        /**
        *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
        *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
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
        const queryString = new URLSearchParams(location.hash.split("?")[1]);
        if (isPost()) {
            switch (tab.tabIndex) {
                case 2:
                    post.getPostContents("essay", getPostIdx());
                    break;
                case 3:
                    post.getPostContents("tech", getPostIdx());
                    break;
                case 4:
                    post.getPostContents("portfolio", getPostIdx());
                    break;
                default:
                    break;
            }
            Disqus('testTitle', `https://yoonjonglyu.github.io/myHome/${tab.tabIndex}_${getPostIdx()}`);
        }

        function isPost() {
            return queryString.has("post");
        }
        function getPostIdx() {
            const result = queryString.get("post");
            if (result) {
                return result;
            } else {
                return '0';
            }
        }
    }, [tab.tabIndex]);

    return (
        <React.Fragment>
            <BlogPostStyle />
            {
                post.postContents.postTitle ?
                    <header className="post-header">
                        <PostTitle className="post-title">{postTitle}</PostTitle>
                        <PostMeta className="post-meta">
                            <PostTime dateTime={postDate}>{postDate}</PostTime>
                            <PostAuthor className="author">
                                {postAuthor}
                            </PostAuthor>
                        </PostMeta>
                    </header>
                    :
                    <header className="post-header">
                        <PostTitle className="post-title">삭제된 글입니다.</PostTitle>
                    </header>
            }
            {
                post.postContents.postTitle &&
                <>
                    <div className="post-contents" dangerouslySetInnerHTML={{ __html: postContent }}>
                    </div>
                    <div className="post-tags">
                        <TagList tagList={postTags} />
                    </div>
                </>
            }
            <div className="post-comments">
                <div id="disqus_thread"></div>
            </div>
            <script id="dsq-count-scr" src="//https-yoonjonglyu-github-io-myhome.disqus.com/count.js" async></script>
        </React.Fragment>
    );
};


export default BlogPost