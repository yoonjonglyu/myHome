import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot
} from '@material-ui/lab';
import { Cake, Flight, Work, SupervisedUserCircle, Search } from '@material-ui/icons';
import { Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

interface ProfileTimeLineProps {
}

const FadeTimeLine = styled(Timeline)`
  font-size : 0.9rem;
  @keyframes fadeup {
    0% {
      opacity : 0;
      transform : translateY(200px); 
    }
    100% {
      opacity : 1;
      transform : none;
    } 
  }
  animation : fadeup 0.8s;
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const ProfileTimeLine: React.FC<ProfileTimeLineProps> = () => {
  const classes = useStyles();

  return (
    <FadeTimeLine align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            1995년 05월 24일
            </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <Cake />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              출생
              </Typography>
            <Typography>
              전주 류씨(全州 柳氏) 수곡파(水谷派)<br />
                차남 류재홍 슬하<br />
                대구 출생
              </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            초등학생 4학년 시절
            </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <Flight />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              중국 유학
              </Typography>
            <Typography>
              아버지께서 장차 <strong>중국이 급부상하여 경제 대국이 될 것이니 중국에서 기회를 찾아보라는 뜻으로</strong> 원하셔서 중국 유학길에 올랐다.
              </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2015년
            </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <SupervisedUserCircle />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              귀국 후 군입대
              </Typography>
            <Typography>
              중국에서의 10년 정도의 유학 생활<br />
                부모님의 결정에 따라야 할 시기를 지나서 스스로 자신의 인생을 결정 할 수 있게 된 기점으로 미래를 구상한 후 <br />
              <strong>중국에서의 삶이 내가 원하는 삶이 아니라고 느끼고 독립을 결심<br />
                집에서 아무런 금전적인 지원을 받지 않는 조건으로 독립하기 위해서 먼저 한국 남자라면 언젠가는 마무리 지어야 할 병역 문제를 먼저 해결하기로 결심하고 귀국</strong><br />
                육군 현역으로 입대를 했다.
              </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2017년
            </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <Search />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              전역 후 직업 탐색
              </Typography>
            <Typography>무사히 전역 한후,<br />
              <strong>자신이 정한 인생의 목표인 등봉조극(登峰造極)을 위해서 직업을 신중히 탐색했고</strong>, 여러 시행착오 끝에 <strong>개발자를 업으로</strong> 삼기로 결정했다.<br /><br />
              <small>登峰造極(등봉조극): 산에 올라 정상에 도달한다는 뜻으로, 학문이나 기술이 심오한 경지에 도달함을 비유하여 이르는 말.</small></Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2019년
            </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <Work />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              페르소나
              </Typography>
            <Typography>
              개발자가 되기로 결심 하고 계속 독학을 하는 와중에<br />
                미완성인 이력서를 보고 온 입사제의를 받고 입사했다.<br />
                처음 목표로 했던 <strong>"일단 개발을 할 수 있는 환경에서 개발을 잘 해보자"는 목표에 적합한 회사</strong>였고,<br />
                해당 회사의 <strong>1인 개발자로 "제로 베이스에서 부터 그래도 구색을 갖춘 회사가 되기 까지 모든 걸 자기가 닦아 볼 기회"라</strong> 여기고 목표를 위해서 노력하여서<br />
                내가 원하던 목표인 개발을 통해서 <strong>해당 회사의 프로젝트 개발(SI, 공공기관 + 대기업 계열사), 기본적인 솔루션 개발(자사 제품 + 개발 라이브러리), 기본적인 개발 환경 구축 등<br />
                을 이루고</strong> 그 과정에서 쌓였던 스트레스 요인인 사내 정치 + 낮은 연봉 + 시너지 없는 환경을 이유로 퇴사 후 다시 독학을 시작했다.
              </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2020년
            </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined">
            <Work />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              더블디 그 후 서울로
              </Typography>
            <Typography>
              전 회사를 퇴사후 공부하는 시간 과 코로나 19 사태를 피해서 은둔 생활 보내다<br />
                대구 지역의 코로나 19 대확산이 진정 국면에 들어선 것을 보며 다시 구직활동을 시작했다.<br />
                목표는 <strong>"오픈소스 개발 또는 컨트리뷰터가 가능할 정도로 자신의 실력을 키우고, 협업을 할 수 있는 환경, 1년차 전에 연봉 3천 이상"</strong><br />
                이였고 기술 스택 상 Node.js개발 그리고 React.js개발이 가능한 회사 위주로 컨텍하여 대구 소재의 해당 회사에 합격 후 입사<br />
                처음 목표 였던 오픈소스 개발이 가능할 정도의 협업 환경을 만들기 위해서 여러모로 노력 하였으나, 배달 앱 벡엔드 REST API 개발 과정에서 해당 회사의 여건상<br />
                처음 목표 였던 오픈소스 개발이 가능할 정도로 제대로 된 개발 환경을 구축하는게 회사 여건 상 불가능 하다는 걸 느껴서 퇴사를 했다.<br />
              <strong>여러모로 검토 해본 결과 대구에서는 내가 목표로 하는 것을 이룰 만한 환경을 찾기 힘들다는 걸 깨닫고 서울로 올라왔다.</strong>
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            미래
            </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <Work />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              미래의 지향점
              </Typography>
            <Typography>
              나는 처음부터 직업을 선택할때 <strong>登峰造極(등봉조극) 또는 庖丁解牛(포정해우)라 부르는 일종의 경지를 목표로</strong> 직업을 선택했고<br />
                그로 인해서 <strong>내가 개발자라는 업을 삼으면서 목표로 삼았던 것은 바로 귀도 반 로섬(파이썬 창시자) 와 같이 메이저한 언어를 개발 하는 것이다.</strong><br />
                그러나, 해당 목표는 <strong>너무 거대한 목표이기에 해당 목표를 위해서 차근차근 작은 목표를 만들어서 하나씩 이루어가고 있는중이다.</strong><br /><br />
                지금까지 이룬 목표는 "1. 개발 회사에서 일 잘 해보자. 2. 1년차 쯤 연봉 3천넘기자." 이고 <br />
                지금 당장의 목표는 <strong>"1.오픈소스 개발(컨트리뷰터)과 네카라 같은 IT 기업에서 S급 인재가 되어보자."</strong>이다.
              </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </FadeTimeLine>
  );
};


export default ProfileTimeLine;