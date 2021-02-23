import React from 'react';
import { Helmet } from 'react-helmet';

interface HeadMetaProps {
    description?: string
    keywords?: string
    image?: string
    title?: string
}
/**
 * 리액트 헬멧의 경우 서버사이드 기능을 추가하지 않으면 SEO 최적화는 안된다...
 * 크롤러가 좀 더 발전하면 되지 않을까?
 */
const HeadMeta: React.FC<HeadMetaProps> = (props) => {
    const {
        title,
        description,
        keywords,
        image
    } = props;
    const TitleMeta = title ? (
        <>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta name="twitter:title" content={title} />
        </>
    ) : '';
    const DescriptionMeta = description ? (
        <>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta name="twitter:description" content={description} />
        </>
    ) : '';
    const ImageMeta = image ? (
        <>
            <meta property="og:image" content={image} />
            <meta name="twitter:image" content={image} />
        </>
    ) : '';
    const KeywordsMeta = keywords ? (<meta name="keywords" content={keywords} />) : '';

    return (
        <Helmet>
            {TitleMeta}
            {DescriptionMeta}
            {ImageMeta}
            {KeywordsMeta}
        </Helmet>
    );
};

export default HeadMeta;