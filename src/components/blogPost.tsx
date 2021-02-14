import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import TagList from './tagList';

import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { RootState } from '../reducers';

interface PostProps {
    postTitle : string
    postDate : string
    postAuthor : string
    postContent : string
    postTags : Array<{idx : number, name : string}>
}
interface BlogPostProps {
    postData : PostProps
    getPostData : Function
    tapIndex : number
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
const PostTitle = styled.h2`
    font-size : 2rem;
    text-align : center;
`;
const PostMeta = styled.p`
    color : #2b2e4a;
`;
const PostTime = styled.time`
    font-size : 1.1rem;
    padding-right : 6px;
`;
const PostAuthor = styled.strong`
    font-size : 1rem;
`;

const BlogPostProps: React.FC<BlogPostProps> = (props) => {
    const {
        postData,
        getPostData,
        tapIndex
    } = props;
    const {
        postTitle,
        postDate,
        postAuthor,
        postContent,
        postTags
    } = postData;
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
        const locationState = location.hash.split('?')[1].split('=');
        if(locationState[0] === "post"){
            switch(tapIndex){
                case 2:
                    getPostData("essay", locationState[1]);
                    break;
                case 3:
                    getPostData("tech", locationState[1]);
                    break;
                case 4:
                    getPostData("portfolio", locationState[1]);
                    break;
                default:
                    break;
            }
            Disqus('testTitle', `https://yoonjonglyu.github.io/myHome/${location.hash.split('\/').slice(1).join('\/')}`);
        }
    }, [tapIndex]);

    const blogPost = postData.postTitle !== "블로그 글 타이틀" ? (
        <React.Fragment>
            <BlogPostStyle />
            <header className="post-header">
                <PostTitle className="post-title">{postTitle}</PostTitle>
                <PostMeta className="post-meta">
                    <PostTime dateTime={postDate}>{postDate}</PostTime>
                    <PostAuthor className="author">
                        {postAuthor}
                    </PostAuthor>
                </PostMeta>
            </header>
            <div className="post-contents" dangerouslySetInnerHTML={{__html : postContent}}>
            </div>
            <div className="post-tags">
                <TagList taglist={postTags} />
            </div>
            <div className="post-comments">
                <div id="disqus_thread"></div>
            </div>
            <script id="dsq-count-scr" src="//https-yoonjonglyu-github-io-myhome.disqus.com/count.js" async></script>
        </React.Fragment>
    ) : (
        <React.Fragment>
        <BlogPostStyle />
        <header className="post-header">
            <PostTitle className="post-title">삭제된 글입니다.</PostTitle>
        </header>
        <div className="post-comments">
            <div id="disqus_thread"></div>
        </div>
        <script id="dsq-count-scr" src="//https-yoonjonglyu-github-io-myhome.disqus.com/count.js" async></script>
    </React.Fragment>
    );

    return blogPost;
};

const mapStateToProps = ({ BlogPost, Taps }: RootState) => {
    return {
        postData : BlogPost.BlogPost,
        tapIndex : Taps.tapIndex
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
    return {
        getPostData : (type : string, idx : string) => {dispatch(actions.LOADPOSTCONTENTS(type , idx))}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostProps);