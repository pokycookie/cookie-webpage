import projectData from '@data/projects.json'
import ProjectLink from '@/components/ui/linkCard/projectLink'
import Badges from '@/components/ui/skill/badges'
import styles from '../details.module.scss'
import HiddenSection from '@/components/ui/text/hiddenSection'
import Image from 'next/image'
import Link from 'next/link'

const skills = projectData.WhatToDoNow.skills

export default function WhatToDoNow() {
  return (
    <main className={styles.main}>
      <article>
        <h1>What to do now?</h1>
        <Badges skills={skills} />
        <ProjectLink
          github="https://github.com/pokycookie/what-to-do-now"
          download="https://github.com/pokycookie/what-to-do-now/releases/download/0.1.0/WTDN-0.1.0.exe"
        />
        <section>
          <h2>프로젝트 소개</h2>
          <p>
            What to do now는 현재 해야하는 일 중에서 지금 당장 뭘 해야할지를
            제시해주는 일정 관리 프로그램입니다.
          </p>
          <p>
            사용자가 일정을 관리하는 방법은 아주 단순합니다. 일정 추가 버튼을
            눌러 해야할 일정을 추가하기만 하면, 프로그램이 알아서 일정의 순서를
            조절해 줍니다.
          </p>
          <p>
            여기서 사용하는 일정은 기본일정과 고정일정 두 가지의 종류가
            있습니다.
          </p>
          <ul>
            <li>
              기본일정: 마감시간안에 끝내기만 하면 되는 일정 ex) 프로젝트 마감,
              학교 과제 등
            </li>
            <li>
              고정일정: 시작과 끝 시간이 정해져 있는 일정 ex) 여행 일정, 결혼식
              등
            </li>
          </ul>
          <p>
            사용자가 일정의 종류만 잘 지켜서 생성하기만 하면, 그 다음은
            프로그램이 알아서 일정의 순서를 조절해줍니다. 이때 고정일정은 항상
            정해진 시간대에 일정이 들어가고, 기본일정은 마감일을 넘지 않도록
            사이사이에 배치됩니다.
          </p>
          <p>
            해당 프로젝트는 Electron을 사용하여 React와 TypeScript로 생성한 웹
            애플리케이션을 프로그램으로 변환하였습니다. 서버와의 통신은 필요하지
            않는 구조로 설계하였고, 이를 프로그램으로 완전히 변환하여 웹
            브라우저에서 독립시켰기 때문에, 사용자가 프로그램을 한번 설치해두면
            인터넷 연결에 신경쓰지 않고 언제든 사용할 수 있게 하였습니다.
          </p>
        </section>
        <section>
          <h2>Preview</h2>
          <h3>기본일정 등록</h3>
          <Image
            className={styles.img}
            src="https://github.com/pokycookie/maple-meister/assets/58474094/7ad4d822-c6b6-43ce-85fb-f21e18609381"
            alt="backup"
            width={800}
            height={450}
            draggable={false}
          />
          <p>
            메인 화면의 우측 하단 추가 버튼을 눌러 일정을 등록할 수 있습니다.
            일정의 이름을 정하고, 마감시간과 소요시간을 정하면 기본일정이
            생성됩니다.
          </p>
          <h3>고정일정 등록</h3>
          <Image
            className={styles.img}
            src="https://github.com/pokycookie/maple-meister/assets/58474094/aba2ca5f-adf6-4b81-8c5e-3e41c5b41566"
            alt="backup"
            width={800}
            height={450}
            draggable={false}
          />
          <p>
            우측 상단의 고정일정 토글 버튼을 눌러 생성할 일정을 고정일정
            타입으로 변경할 수 있습니다. 고정일정을 생성할 때는 일정의
            시작시간과 종료시간을 입력합니다.
          </p>
          <h3>일간 뷰어</h3>
          <Image
            className={styles.img}
            src="https://github.com/pokycookie/maple-meister/assets/58474094/9123e386-c3dc-4c96-a938-978060c13c95"
            alt="backup"
            width={800}
            height={450}
            draggable={false}
          />
          <p>
            하루의 일정을 한눈에 보여주는 일간 뷰어입니다. 원형으로 표시된
            그래프는 하루 24시간을 나타내며, 푸른색은 기본일정을 붉은색은
            고정일정을, 얇은 주황색 막대는 현재 시간을 나타냅니다.
          </p>
          <h3>월간 뷰어</h3>
          <Image
            className={styles.img}
            src="https://github.com/pokycookie/maple-meister/assets/58474094/097d3db7-19bd-4e4b-a09a-9bdeb8990fb8"
            alt="backup"
            width={800}
            height={450}
            draggable={false}
          />
          <p>
            한달의 일정을 한눈에 보여주는 월간 뷰어입니다. 달력의 형태로
            전반적인 일정을 확인할 수 있으며, 각 영역에 마우스를 올려 일정의
            정보를 확인할 수 있습니다.
          </p>
          <h3>데이터베이스</h3>
          <Image
            className={styles.img}
            src="https://github.com/pokycookie/maple-meister/assets/58474094/29d609a7-570f-466b-98e8-ac188a5a2ca6"
            alt="backup"
            width={800}
            height={450}
            draggable={false}
          />
          <p>
            데이터베이스 메뉴를 이용해 작성된 모든 기본일정, 고정일정,
            지난일정을 표의 형태로 확인할 수 있습니다. 이곳에서 각 일정들을
            수정하거나 복원 및 삭제할 수 있습니다.
          </p>
        </section>
        <section>
          <h2>기술 스택</h2>
          <HiddenSection title="React & TypeScript" deafultOpen>
            <p>
              비록 이번 프로젝트를 웹 브라우저에 종속되지 않는 프로그램으로
              계획했지만, 그럼에도 가장 기본적인 베이스는 React와 TypeScript를
              사용했습니다. 저에게 가장 익숙한 웹 개발의 형태로 평소처럼 개발을
              진행하고, 이후에 Electron을 이용해 프로그램으로 변환하는 방식을
              선택했기 때문입니다.
            </p>
          </HiddenSection>
          <HiddenSection title="Electron" deafultOpen>
            <p>
              해당 프로젝트는 웹 브라우저에 종속되지 않고, 설치를 통해 일반적인
              프로그램처럼 사용할 수 있도록 계획하였고, 이를 위해 Electron을
              사용하였습니다.
            </p>
            <p>
              Electron을 사용하면 기존의 웹 브라우저에서 동작하는 웹
              애플리케이션보다 더욱 밀접하게 사용자의 환경에 접근할 수 있습니다.
              이번 프로젝트에서는 이를 이용해 Node.js의 fs모듈을 적극
              활용하였고, 그 결과 마치 서버에서처럼 클라이언트 단에서도 사용자의
              데이터를 파일로 만들어 실시간으로 저장하고 불러오도록 할 수
              있었습니다. 이때 Electron에서 제공하는 getPath메서드를 사용하여
              사용자의 OS에 상관없이 일정한 경로에서 데이터 파일을 관리할 수
              있었습니다.
            </p>
          </HiddenSection>
          <HiddenSection title="SVG" deafultOpen>
            <p>
              SVG는 프로그램이 정렬한 일정을 사용자가 보기 편한 형태로 그리기
              위해 사용하였습니다.
            </p>
            <p>
              데이터를 시각화하기 위해서는 관련 라이브러리를 사용하거나,
              canvas요소 또는 svg요소를 사용하여 직접 시각화하는 방법이
              있습니다. 저는 제가 구상하는 형태로 데이터를 그려내고 싶었기
              때문에 라이브러리를 사용하지 않고 직접 구현하기로 하였습니다.
            </p>
            <p>
              canvas와 svg는 둘 다 화면에 이미지를 그릴 수 있는 기술이지만, 서로
              다른 목적을 가지고 있기 때문에 현재 프로젝트에 적합한 기술을
              선택하여 사용해야 했습니다.
            </p>
            <p>
              canvas는 svg에 비해 훨씬 복잡한 형태를 그려낼 수 있지만, 그만큼
              개발에 오랜시간이 걸리고 신경써야 할 것이 많다는 단점이 있습니다.
              반면 svg는 비교적 간단하게 이미지를 그려낼 수 있고, 무엇보다
              DOM에서 상위의 요소나 화면크기에 반응하게 할 수 있으며, click이나
              hover와 같은 이벤트에 반응하도록 할 수 있습니다.
            </p>
            <p>
              이번 프로젝트에서는 간단한 도형의 형태로 데이터를 시각화 할것이기
              때문에 굳이 canvas를 사용할 이유가 없었습니다. 또한 반응형으로
              동작하는 부분이나 이벤트 핸들러를 다루기 쉽다는 점도 svg를
              선택하게된 큰 이유였습니다.
            </p>
          </HiddenSection>
          <HiddenSection title="Emotion" deafultOpen>
            <p>
              Emotion은 CSS-in-JS 라이브러리로, JavaScript파일에서 CSS와 같은
              스타일을 작성할 수 있게 도와줍니다. React를 사용하는 이번
              프로젝트의 특성상 react환경을 지원하는 @emotion/react를 설치하여
              사용하였습니다.
            </p>
            <p>
              기존에는 개별의 css파일이나 scss파일을 이용해 스타일을
              관리하였습니다. 하지만 같은 className을 가지는 요소가 의도치 않게
              더 작성된 경우, 스타일시트가 의도한 요소가 아닌 부분에도 잘못
              적용되는 문제가 종종 발생했습니다.
            </p>
            <p>
              또한 컴포넌트는 src/components에서 스타일시트는 src/styles에서
              보통 관리하였는데, 이 경우 어떤 컴포넌트가 어떤 스타일시트를
              사용하는지 쉽게 알기 어렵다는 문제가 있었습니다. 컴포넌트와
              스타일시트가 서로 같은 파일명을 공유함에도, 특정 컴포넌트를
              수정하는데에 양쪽의 파일을 동시에 열어서 수정해야하는 불편함은
              프로젝트가 커짐에 따라 같이 증가했습니다.
            </p>
            <p>
              사실 마지막 이유가 CSS-in-JS 라이브러리를 사용하기로 마음먹은 가장
              큰 이유인데, 바로 스타일에 JavaScript변수를 직접적으로 사용할 수
              있다는 것입니다. 이전에 동적으로 스타일을 변경하기 위해서는 상황에
              맞는 className을 중첩해서 사용하거나, inline style을 주로
              사용했었는데 각자의 문제가 있었습니다.
            </p>
            <p>
              className을 중첩해서 사용하는 경우에는 상황에 맞는 className에
              맞는 스타일을 미리 정의하고, js파일에서도 동적으로 className을
              변경하는 기능이 들어가야 했습니다. inline style의 경우에는 일부
              요소의 스타일을 동적으로 변경하기에는 편리했지만, 결국은 별도의
              css파일을 이용해 전체 스타일을 정의해야 했습니다. 이러한 부분이
              많아질수록 css파일에 정의된 스타일과 다르게 동작하여 문제점을
              파악하지 못하는 경우가 많아지곤 했습니다.
            </p>
            <p>
              이러한 문제를 해결하기 위해 Emotion을 사용하였는데, 별도의
              스타일시트 파일을 사용하지 않고, react의 각 컴포넌트에 직접적으로
              스타일을 적용할 수 있었습니다. 또한 동적으로 스타일을 적용하기에도
              편리하면서 동시에 하나의 파일에서 컴포넌트의 기능과 스타일을
              동시에 관리할 수 있었기 때문에 유지보수 측면에서도 유용했습니다.
            </p>
          </HiddenSection>
        </section>
        <section>
          <h2>개발 과정 및 배운점</h2>
          <HiddenSection title="UI / UX">
            <p>
              전문적인 디자이너 없이 1인으로 프로젝트를 진행함에 있어서 가장
              오랜 시간이 걸렸던 부분은 UI/UX부분이었습니다.
            </p>
            <p>
              하루의 일정을 보여주는 부분은 원을 이용해 하루의 시간과 일정을
              표현하도록 구상했습니다. 그런데 이렇게 그려진 원 안에 그날의
              일정을 리스트의 형태로 나열하는 것은 UI적으로 마음에 들지
              않았습니다. 그래서 중앙에서 하나의 일정만을 보이도록 하여 디자인을
              꾸몄더니, UX적으로 사용자가 하루의 일정을 한번에 파악하기
              어렵겠다는 것이 바로 느껴졌습니다.
            </p>
            <p>
              이러한 부분들을 고려하면서 하루의 일정을 한번에 파악하고, 쉽게
              원하는 일정을 바꿔가며 확인할 수 있으면서도 디자인적으로 깔끔한
              형태를 만들어내는데에는 많은 시간이 걸렸습니다.
            </p>
            <p>
              이는 비단 하루의 일정을 보여주는 페이지 뿐만 아니라 프로젝트의
              전반에서 항상 고민해야 했던 문제입니다. UI/UX적으로 좋은 디자인은
              생각보다 간단하지만, 실제로 그 간단한 디자인을 만들어내기까지는
              많은 부분들을 고려하고 고심해야 한다는 것을 직접적으로 느낄 수
              있었습니다.
            </p>
          </HiddenSection>
          <HiddenSection title="일정 정렬 알고리즘">
            <p>
              작성된 일정을 종합하여 순서에 맞게 재정렬하는 알고리즘은 이
              프로젝트의 핵심입니다. 처음에는 너무 복잡하게 생각하여 어떤
              방식으로 알고리즘을 작성해야 할지 많은 고민이 있었습니다. 후에
              여로 코딩 테스트 공부를 하며 알고리즘을 이용한 문제 해결 능력이
              전반적으로 향상된 이후로 다시 이 프로젝트의 핵심 알고리즘에 대해
              고민하게 되었고, 간단하지만 의도한 대로 동작하는 알고리즘을 만들어
              낼 수 있었습니다.
            </p>
            <a
              href="https://github.com/pokycookie/what-to-do-now#일정-정렬-알고리즘-소개"
              target="_blank"
            >
              github README에서 알고리즘에 대한 자세한 내용을 확인하실 수
              있습니다.
            </a>
          </HiddenSection>
        </section>
      </article>
      <Link href="/portfolio" className={styles.backBtn}>
        돌아가기
      </Link>
    </main>
  )
}
