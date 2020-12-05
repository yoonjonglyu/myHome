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
    return (
        <div>
            <Headline><HeadLineIcon />프론트 엔드</Headline>
            <TechStack>
                <TechIcon alt="HTML" src={HTML} />
                <TechIcon alt="CSS" src={CSS} />
                <TechIcon alt="Javascript" src={JS} />
                <TechIcon alt="jQuery" src={JQUERY} />
                <TechIcon alt="WebPack" src={WEBPACK} />
                <TechIcon alt="React" src={REACT} />
                <TechIcon alt="Vue" src={VUE} />
                <TechIcon alt="TypeScript" src={TS} />
            </TechStack>
            <Headline><HeadLineIcon />벡 엔드</Headline>
            <TechStack>
                <TechIcon alt="Node.js" src={NODE} />
                <TechIcon alt="Php" src={PHP} />
                <TechIcon alt="Socket.io" src={SOCKETIO} />
                <TechIcon alt="Mysql" src={MYSQL} />
                <TechIcon alt="PostgreSql" src={POSTGRESQL} />
            </TechStack>
            <Headline><HeadLineIcon />데브 옵스</Headline>
            <TechStack>
                <TechIcon alt="Linux" src={LINUX} />
                <TechIcon alt="docker" src={DOCKER} />
                <TechIcon alt="Apache" src={APACHE} />
                <TechIcon alt="Nginx" src={NGINX} />
                <TechIcon alt="Git" src={GIT} />
                <TechIcon alt="Aws" src={AWS} />
            </TechStack>
        </div>
    );
};

export default AboutTech;