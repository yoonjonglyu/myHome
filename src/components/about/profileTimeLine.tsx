import React from 'react';
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
import Styled, { createGlobalStyle } from 'styled-components';

interface ProfileTimeLineProps {
}

const MobileTimeLine = createGlobalStyle`
  @media screen and (max-width: 768px) {
      .MuiTimeline-root {
        padding: 0;
      }
      .MuiTimelineSeparator-root {
        display: none !IMPORTANT;
      }
      .MuiTimelineOppositeContent-root {
        display: none !IMPORTANT;
      }
      .MuiTimelineItem-alignAlternate:nth-child(even) .MuiTimelineItem-content {
        text-align : left !IMPORTANT;
      }
  }
`;
const FadeTimeLine = Styled(Timeline)`
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
  animation: fadeup 0.8s;
`;
const TimeLinePaper = Styled(Paper)`
  padding: 6px 16px;
`;
const TimeLineTail = Styled(TimelineConnector)`
  background-color: #f50057 !important;
`;

const ProfileTimeLine: React.FC<ProfileTimeLineProps> = function () {
  return (
    <FadeTimeLine align="alternate">
      <MobileTimeLine />
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
          <TimeLinePaper elevation={3}>
            <Typography variant="h6" component="h1">
              출생
            </Typography>
            <Typography>
              전주 류씨(全州 柳氏) 수곡파(水谷派)<br />
              차남 류재홍 슬하<br />
              대구 출생
            </Typography>
          </TimeLinePaper>
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
          <TimeLinePaper elevation={3}>
            <Typography variant="h6" component="h1">
              중국 유학
            </Typography>
            <Typography>
              아버지께서 장차 <strong>중국이 급부상하여 경제 대국이 될 것이니 중국에서 기회를 찾아보라는 뜻으로</strong> 원하셔서 중국 유학길에 올랐다.
            </Typography>
          </TimeLinePaper>
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
          <TimeLineTail />
        </TimelineSeparator>
        <TimelineContent>
          <TimeLinePaper elevation={3}>
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
          </TimeLinePaper>
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
          <TimeLinePaper elevation={3}>
            <Typography variant="h6" component="h1">
              전역 후 직업 탐색
            </Typography>
            <Typography>무사히 전역 한후,<br />
              <strong>자신이 정한 인생의 목표인 등봉조극(登峰造極)을 위해서 직업을 신중히 탐색했고</strong>, 여러 시행착오 끝에 <strong>개발자를 업으로</strong> 삼기로 결정했다.<br /><br />
              <small>登峰造極(등봉조극): 산에 올라 정상에 도달한다는 뜻으로, 학문이나 기술이 심오한 경지에 도달함을 비유하여 이르는 말.</small></Typography>
          </TimeLinePaper>
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
          <TimeLineTail />
        </TimelineSeparator>
        <TimelineContent>
          <TimeLinePaper elevation={3}>
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
          </TimeLinePaper>
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
          <TimeLinePaper elevation={3}>
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
          </TimeLinePaper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2021년
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <Work />
          </TimelineDot>
          <TimeLineTail />
        </TimelineSeparator>
        <TimelineContent>
          <TimeLinePaper elevation={3}>
            <Typography variant="h6" component="h1">
              NHN godo
            </Typography>
            <Typography>
              대구에서의 짧은 활동을 정리 한후 무작정 서울로 올라왔다. 막연히 내가 원하는 환경을 위해서 여러 측면에서 탐색했고,<br />
              서울에서의 환경이 내가 생각하던 것 보다 그렇게 이상적이지 않다는 현실을 깨달으면서 점점 지쳐갈 쯤 헤드헌팅 회사로 부터 NHN godo라는 회사의<br />
              기술 지원팀으로 지원해보지 않겠냐는 제안이 들어왔다. 그 동안 충족 되지 않은 욕구 중 하나인 <strong>메이저한 개발 환경이라는 것을<br />
              간접적으로나마 체험해볼 수 있지 않을까?</strong> 라는 생각으로 받아들이고 기존 연봉 그대로 입사했다.<br />
              그후 <strong>"고도몰5" 중심으로 "이나무" 솔루션등의 소스코드를 분석하고, NHN계열사의 문화 중 긍정적인 부분을 최대한 흡수하려고 노력했다.</strong><br />
              스스로 개발쪽으로 꾸준히 공부해가면서 맡은바 직무를 큰 실수 없이 수행했으며, 같이 입사한 동기들을 업무적인 측면에서 챙기려고 노력했는 점을 인정 받아서인지<br />
              <strong>수습2개월 정도 지났을쯤 어느 정도 내가 배울 수 있는 부분들을 거진다 배웠다는 판단이 들었을때</strong> 부서장님들이 불러서 니가 같이 들온 애들 중에서는 제일 잘하니 솔루션 개발팀에서 기존에 하던 업무인<br />
              <strong>VIP 대응, 이벤트 모니터링, 솔루션 디버깅을 통한 유지보수</strong> 등을 알려줄테니 한번 니가 맡아서 해봐라 라는 소리 듣고 실습 교육을 시작했다.<br />
              그 과정에서 기존에 파악했던 <strong>고도몰5 솔루션을 좀 더 자세하게 파악 할 수 있었고, 직접 마일리지 관련된 버그에 대한 원인과 솔루션을 제시하고 그중 하나가 QA통과 후 적용되는 솔루션에 기여해본 경험이 인상깊다.</strong><br />
              다만 그 과정에서 과도한 업무스트레스<strong>(기존에 개발팀 과장, 차장님들이 도맡아 하던 일을 교육이란 이름으로 조금씩 맡아서 했다. 책임감이 힘든점)</strong> 로 인한 번아웃 과 정규직 전환 및 1년 후 솔루션 개발팀으로의 전배가 가진 가능성<br />
              또 그걸로 인한 매리트가 거의 없어졌기에 이직을 결심했다. 솔직히 기술지원 업무가 개발 경력이 아니다 보니 더 있을 수 없었다.<br />
              <strong>이 과정에서 실제로 유명한 솔루션이나 대기업 자회사 코드라도 내가 개인적으로 고민하고 짜던 코드와 크게 다를바 없다는 걸 느꼈고, 막연히 가지고 있던 내가 제대로 된 실무를 경험하지 못해서 개발을 잘못하고 있는건 아닐까?<br />
              라는 불안감이 해소되었다.</strong> 이후 현실을 빠르게 인정하고 내가 원하는 환경이라는게 사실 현실에 존재할 가능성이 매우 희박하다는 것을 알고 포기했으며 기존 목표를<br />
              <strong>나 자신의 성장에 지장이 안갈 환경, 높은 연봉, 워라밸 등 보편적 가치를 추구하기로 방향을 선회했다. 즉, 나 자신의 가치를 제대로 받아내면서 일할 수 있는 환경에서 그냥 알아서 크자로 변경했다.</strong>
            </Typography>
          </TimeLinePaper>
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
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimeLinePaper elevation={3}>
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
          </TimeLinePaper>
        </TimelineContent>
      </TimelineItem>
    </FadeTimeLine>
  );
};


export { ProfileTimeLine, ProfileTimeLineProps }