import React from 'react';
import styled from 'styled-components';
import CodeIcon from '@material-ui/icons/Code';

/** 아이콘 불러오기 */
import HTML from '../assets/images/html.png';
import CSS from '../assets/images/css.png';
import JS from '../assets/images/js.png';
import TS from '../assets/images/ts.png';
import JQUERY from '../assets/images/jquery.png';
import WEBPACK from '../assets/images/webpack.png';
import REACT from '../assets/images/react.png';
import VUE from '../assets/images/vue.png';
// 벡엔드 시작
import NODE from '../assets/images/node.png';
import PHP from '../assets/images/php.png';
import SOCKETIO from '../assets/images/socketio.png';
import MYSQL from '../assets/images/mysql.png';
import POSTGRESQL from '../assets/images/postgre.png';
// 운영 시작
import LINUX from '../assets/images/ubuntu.png';
import DOCKER from '../assets/images/docker.png';
import APACHE from '../assets/images/apache.png';
import NGINX from '../assets/images/nginx.png';
import GIT from '../assets/images/git.png';
import AWS from '../assets/images/aws.png';

interface AboutTechProps {

}

const Headline = styled.h3`
    padding : 10px 0;
    text-align : center;
    font-size : 1.2rem;
`;
const HeadLineIcon = styled(CodeIcon)`
    padding : 4px 8px 0 0;
    font-size : 1.2rem;
`;
const TechStack = styled.p`
    text-align : center;
`;
const TechIcon = styled.img`
    max-width : 100px;
    max-height : 100px;
    margin : 16px;
    vertical-align : middle;
`;

const AboutTech: React.FC<AboutTechProps> = () => {
    const frontEnd : Array<{key : string, value : string}> = [
        {
            key : "HTML",
            value : HTML
        },
        {
            key : "CSS",
            value : CSS
        },
        {
            key : "Javascript",
            value : JS
        },
        {
            key : "jQuery",
            value : JQUERY
        },
        {
            key : "WebPack",
            value : WEBPACK
        },
        {
            key : "React",
            value : REACT
        },
        {
            key : "Vue",
            value : VUE
        },
        {
            key : "TypeScript",
            value : TS
        }
    ];
    const backEnd : Array<{key : string, value : string}> = [
        {
            key : "Node.js",
            value : NODE
        },
        {
            key : "PHP",
            value : PHP
        },
        {
            key : "Socket.IO",
            value : SOCKETIO
        },
        {
            key : "MySQL",
            value : MYSQL
        },
        {
            key : "PostgreSQL",
            value : POSTGRESQL
        },
    ];
    const devOps : Array<{key : string, value : string}> = [
        {
            key : "Linux",
            value : LINUX
        },
        {
            key : "Docker",
            value : DOCKER
        },
        {
            key : "Apache",
            value : APACHE
        },
        {
            key : "Nginx",
            value : NGINX
        },
        {
            key : "GIT",
            value : GIT
        },
        {
            key : "AWS",
            value : AWS
        }
    ]

    const FrontTeck = frontEnd.map((data, index) => {
        return (
            <TechIcon key={index} src={data.value} alt={data.key} />
        );
    });
    const BackTeck = backEnd.map((data, index) => {
        return (
            <TechIcon key={index} src={data.value} alt={data.key} />
        );
    });
    const DevTeck = devOps.map((data, index) => {
        return (
            <TechIcon key={index} src={data.value} alt={data.key} />
        );
    });

    return (
        <div>
            <Headline><HeadLineIcon />프론트 엔드</Headline>
            <TechStack>
                {FrontTeck}
            </TechStack>
            <Headline><HeadLineIcon />벡 엔드</Headline>
            <TechStack>
                {BackTeck}
            </TechStack>
            <Headline><HeadLineIcon />데브 옵스</Headline>
            <TechStack>
                {DevTeck}
            </TechStack>
        </div>
    );
};

export default AboutTech;