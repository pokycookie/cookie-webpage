import Badges from '@/components/ui/skill/badges'
import projectData from '@data/projects.json'
import ProjectLink from '@/components/ui/linkCard/projectLink'
import styles from '../details.module.scss'
import HiddenSection from '@/components/ui/text/hiddenSection'
import Image from 'next/image'

const skills = projectData.mapleMesiter.skills

export default function MapleMeister() {
  return (
    <main className={styles.main}>
      <article>
        <h1>Maple Meister</h1>
        <Badges skills={skills} />
        <ProjectLink
          github="https://github.com/pokycookie/maple-meister"
          webpage="https://pokycookie.github.io/maple-meister/"
        />
        <section>
          <h2>프로젝트 소개</h2>
          <p>
            Maple Meister는 Nexon의 온라인 게임 메이플스토리의 전문기술 컨텐츠를
            더욱 편리하고 체계적으로 즐기기 위해 자체적으로 제작한 웹
            애플리케이션입니다.
          </p>
          <p>
            처음에는 단순히 간단한 타이머를 만들기 위한 프로젝트로 시작했습니다.
            5분마다 반복적으로 알람을 울리는 기능이 필요했는데, 기존에 존재하는
            대부분의 타이머는 지정된 시간이 지나면 다시 작동하지 않았기 때문에
            사용할 수가 없었고, 따라서 필요한 무한 타이머를 직접 제작하기로 한
            것이 이 프로젝트의 시작이었습니다.
          </p>
          <p>
            이후 생각보다 직접 만든 애플리케이션이 생각보다 유용하다고 생각되어,
            여러 기능을 추가한 것이 현재의 모습이 되었습니다.
          </p>
          <p>
            아이템의 시세와 거래 내역을 기록하여 저장하고, 이를 시각화하여
            사용자에게 보여주는 기능을 추가하였습니다. 이렇게 저장된 기록들을
            이용해 현재 어떤 아이템을 제작해야 가장 순이익이 높은지 사용자가
            쉽게 알 수 있게 했고, 시세 변동 그래프를 보면서 이후 시세를 예측하기
            쉽도록 했습니다.
          </p>
          <p>
            이 기능들은 모두 오프라인 환경에서도 동작하기 때문에 PWA로 동작할 수
            있도록 하였습니다. 덕분에 기존의 웹 브라우저에서도 동작하면서
            개별적인 앱으로도 사용할 수 있습니다.
          </p>
        </section>
        <section>
          <h2>Preview</h2>
          <h3>타이머</h3>
          <Image
            className={styles.img}
            src="https://github.com/pokycookie/maple-meister/assets/58474094/88212af1-515b-4193-9e65-bc0cd185dab6"
            alt="timer"
            width={800}
            height={450}
          />
          <p>
            Maple Meister의 타이머는 무한타이머로 동작합니다. 반복할 시간을
            정하고 시작하면, 해당 시간이 지날때마다 계속해서 알림을 보냅니다.
          </p>
          <h3>차트</h3>
          <Image
            className={styles.img}
            src="https://github.com/pokycookie/maple-meister/assets/58474094/93867205-beec-4bb6-81dd-fbedd0ddcadc"
            alt="chart"
            width={800}
            height={450}
          />
          <p>
            차트 페이지에서는 여러 아이템들의 가격 추세를 원하는 시간대별로
            확인할 수 있습니다.
          </p>
          <p>
            일간으로 확인할 경우, 하루동안의 아이템 가격 변동을 모두 확인할 수
            있습니다. 주간 또는 월간으로 시간대를 변경하면, 하루 간격으로 해당
            기간동안의 가격 변동을 나누어 확인할 수 있습니다.
          </p>
          <h3>레시피</h3>
          <Image
            className={styles.img}
            src="https://github.com/pokycookie/maple-meister/assets/58474094/552fbc08-1ee1-4b1a-bcf0-ab5e0303338f"
            alt="recipe"
            width={800}
            height={450}
          />
          <p>
            레시피 페이지에서는 현재 아이템들의 가격을 기준으로, 어떤 레시피
            아이템을 제작해야 가장 높은 효율을 만들 수 있는지 한눈에 알려줍니다.
          </p>
          <p>
            페이지 하단의 버튼들을 이용하여 자신만의 레시피를 생성하거나, 기존의
            레시피를 수정 및 삭제 할 수 있습니다.
          </p>
          <h3>거래</h3>
          <Image
            className={styles.img}
            src="https://github.com/pokycookie/maple-meister/assets/58474094/536ae3a1-8124-4f92-a41e-0d3a3e3580f5"
            alt="ledger"
            width={800}
            height={450}
          />
          <p>
            거래 페이지를 이용하면 아이템을 구입하고 판매한 내역을 장부처럼
            기록하여 관리할 수 있습니다. 이때 작성된 기록은 이전의 차트 페이지,
            레시피 페이지에서 모두 참조하여 항상 최신의 가격을 유지하도록
            합니다.
          </p>
          <h3>데이터 백업 및 복구</h3>
          <Image
            className={styles.img}
            src="https://github.com/pokycookie/maple-meister/assets/58474094/b516d97e-6ece-4440-a499-0ca6767c9714"
            alt="backup"
            width={800}
            height={450}
          />
          <p>
            데이터 백업을 이용하여 현재 데이터를 파일로 변환시켜 저장할 수
            있습니다. 이렇게 저장된 파일은 따로 보관하다가 후에 데이터 복구를
            위해 사용할 수 있습니다.
          </p>
          <Image
            className={styles.img}
            src="https://github.com/pokycookie/maple-meister/assets/58474094/019e3b47-c647-4963-9bfb-5a1751465987"
            alt="restore"
            width={800}
            height={450}
          />
          <p>
            데이터 백업을 통해 미리 파일의 형태로 변환해둔 데이터를 실제
            애플리케이션에 적용합니다.
          </p>
          <p>
            이를 이용해 다른 PC를 이용하거나, 이전의 데이터가 손실된 경우 원래의
            데이터로 복구시킬 수 있습니다.
          </p>
        </section>
        <section>
          <h2>기술 스택</h2>
          <h3>React & TypeScript</h3>
          <p>
            해당 프로젝트는 React와 TypeScript를 기반으로 제작된 웹
            애플리케이션입니다. 웹 애플리케이션의 특성상 사용자가 조작하고,
            페이지가 이에 반응해야 하는 경우가 많습니다. 따라서 가상 DOM을
            사용하여 UI 업데이트를 최적화 할 수 있는 React를 선택하였습니다.
          </p>
          <p>
            또한 기본 언어로는 JavaScript가 아닌 TypeScript를 선택하였습니다.
            기존에 JavaScript로 개발을 진행하던 때에는 런타임 환경에서 예상하지
            못하던 오류가 발생하는 경우가 많았습니다. 이러한 문제를 해결하고자
            TypeScript를 선택했고, 그 결과 대부분의 에러들을 미리 파악하고
            대비할 수 있게 되었습니다.
          </p>
          <p>
            특히 indexedDB를 간편하게 사용하기 위해 이용한 Dexie라이브러리에서
            공식적으로 TypeScript를 지원했기 때문에, 저장소에 저장된 데이터의
            타입정보를 앱 내에서 쉽게 사용할 수 있다는 장점도 있었습니다.
          </p>
          <h3>Dexie</h3>
          <p>
            Dexie 라이브러리는 indexedDB API를 좀 더 편리하게 사용하기 위해
            도입했습니다. 이 프로젝트는 사용자가 입력한 데이터들을 저장하고,
            이를 나중에 불러와서 사용하기 때문에 자체적인 저장소 기능을 사용해야
            했습니다.
          </p>
          <p>
            LocalStorage의 경우 문자열만 저장할 수 있으며, 용량에도 제한이 있기
            때문에 고려대상이 아니었습니다. 따라서 객체의 형태로 데이터를 저장할
            수 있으며, 용량에도 제한이 없는 indexedDB를 사용하기로
            마음먹었습니다.
          </p>
          <p>
            프로젝트 초기에는 indexedDB를 Promise형태로 래핑한 자체적인
            라이브러리를 제작하여 사용했습니다. 하지만 프로젝트의 규모가 점점
            커짐에 따라 indexedDB를 전문적으로 구조화한 라이브러리의 필요성을
            느끼게 되었고, 이에 맞는 라이브러리로 Dexie를 선택하게 되었습니다.
          </p>
          <p>
            Dexie는 Promise형태로 저장소를 사용할 수 있기 때문에, 기존의
            React환경에서 쉽게 사용할 수 있다고 판단했습니다. 또한 TypeScript를
            지원하여 저장할 데이터의 타입을 미리 지정할 수 있으며, 자동으로
            primary key를 제공하는 등의 기능이 제공되기 때문에 더욱 편리하게
            사용할 수 있었습니다.
          </p>
          <h3>PWA</h3>
          <p>
            해당 애플리케이션은 서버와의 통신이 필요하지 않은 구조로
            제작되었습니다. 즉, 인터넷에 연결되지 않은 상태에서도 해당
            애플리케이션을 이용할 수 있어야 합니다.
          </p>
          <p>
            하지만 웹 애플리케이션의 특성상 해당 웹 주소에 접속 하여 서버로부터
            기본적인 애플리케이션의 데이터를 받아오는 과정이 필요했고, 이
            단계에서 인터넷에 연결되어 있지 않으면 애플리케이션을 사용할 수
            없었습니다.
          </p>
          <p>
            PWA에 대해 조사를 하면서 기존에 자주 사용하던 Youtube Music과 같은
            데스크탑 앱이 사실은 PWA로 제작되었다는 것을 알았고, 이번 프로젝트도
            이와 마찬가지로 데스크탑 앱처럼 만들 수 있다는 것을 알았습니다.
          </p>
        </section>
        <section>
          <h2>개발 과정 및 배운점</h2>
          <HiddenSection title="Service Worker">
            <p>
              이번 프로젝트에서 가장 기술적으로 어려움을 겪었던 파트는 가장
              가볍게 생각했던 타이머 파트였습니다. 이전에도 현재 시간, 스톱워치,
              타이머와 같은 기능을 포함하는 애플리케이션은 제작해본 경험이 꽤
              있었기 때문에 크게 어렵게 생각하지 않았습니다.
            </p>
            <p>
              하지만 이전에 가볍게 제작했던 것과는 상황이 달랐던 것이, 이번의
              타이머 기능은 탭을 비활성화 한 상태에서도 높은 정확도를 유지해야
              했다는 것입니다.
            </p>
            <p>
              당연히 지금까지는 탭의 비활성화 여부와 상관없이 JavaScript의
              interval은 정확한 시간 간격을 보장해준다고 생각하고 있었습니다.
              하지만 실제로 탭을 최소화하거나, 다른 탭을 열어보는 등의 행동으로
              웹 애플리케이션이 작동하는 탭을 비활성화 한 결과, 미세하지만 초
              단위로 계속해서 오차가 누적되는 것을 확인할 수 있었습니다.
            </p>
            <p>
              따라서 이에 대해 자세히 알아본 결과, 자바스크립트 엔진은 사용자
              디바이스의 리소스를 최대한 효율적으로 사용하기 위해 비활성화 된
              탭의 활동에 스로틀링을 건다는 것을 알 수 있었습니다. 타이머,
              오디오, 비디오와 같은 API들이 이런 영향을 받을 수 있다고 했고,
              제가 직면한 문제도 이러한 이유임을 알 수 있었습니다.
            </p>
            <p>
              이를 해결하기 위해 여러 방법들을 찾아보았고, 그 결과
              서비스워커라는 기술에 대해 알게되었습니다. 서비스워커는 브라우저의
              백그라운드에서 실행되는 스크립트로, 탭의 비활성화 여부에 상관없이
              타이머 함수를 일정한 시간 간격으로 사용할 수 있게 할 수
              있었습니다.
            </p>
            <p>
              마침 서비스워커를 사용하여 setInterval을 제공하는
              worker-timmers라는 라이브러리를 발견하였고, 기존에 사용하던
              useInterval훅에 setInterval을 해당 라이브러리 함수로
              교체하였습니다. 예상대로 비활성화 된 탭에서 스로틀링이 걸리는
              현상이 원인이 맞았고, 서비스워커를 사용함으로써 이 문제를 해결할
              수 있었습니다.
            </p>
          </HiddenSection>
          <HiddenSection title="File upload & download">
            <p>
              해당 프로젝트는 IndexedDB API를 이용하여 웹 저장소를 주 저장소로
              사용하게끔 계획하였습니다. 그 결과 Dexie 라이브러리도 사용을 하게
              되었고, 이에 맞춰서 프로젝트의 전반적인 기능들을 맞춰서 만들어
              나갔습니다.
            </p>
            <p>
              이때 만약 다른 기기에서 이전 기기의 데이터를 가져오거나, 데이터가
              의도치 않게 지워지는 상황을 대비해 백업본을 따로 저장하는 등의
              작업을 하려면, 앱에서 관리하는 저장소의 데이터를 파일로, 반대로
              파일은 저장소의 데이터로 서로 변환해주는 작업이 필요했습니다. 또한
              이렇게 변환된 데이터를 실제 파일로 내보내거나, 로컬 파일을
              애플리케이션으로 업로드 하는 작업도 필요했습니다.
            </p>
            <p>
              문제는 지금까지 파일시스템을 사용할 때는 Node js환경에서 fs모듈을
              사용한 케이스만 있었기 때문에, 막상 단순 웹의 기능만 이용해서
              파일을 업로드하고 다운로드하게 만드려고 하니 어떻게 해야 할지 감이
              잘 잡히지 않았습니다.
            </p>
            <p>
              이후 여러 자료들을 찾아보면서 방법을 찾게 되었는데, 생각보다 아주
              단순한 방법으로 해결할 수 있었습니다. 가장 기본적인 HTML의 태그를
              이용해서 업로드와 다운로드를 구현할 수 있었는데, 각각 input
              type=file 태그와 a href=url download 태그를 이용하는 방법입니다.
            </p>
            <p>
              input태그의 타입을 file로 지정하면 로컬 파일을 업로드하는데에
              사용할 수 있다는 것은 이전에도 알고 있었습니다. 하지만 a태그에서
              download 속성을 이용하면 해당 url의 콘텐츠를 다운받도록 할 수
              있다는 것은 이번 경험을 통해 처음 알게 되었습니다. download를 위한
              파일은 File 생성자를 이용해 생성하고, 이를
              URL.createObjectURL메서드를 이용해 URL로 만든 다음, 지정한 a태그의
              href에 연결하는 방식을 사용했습니다.
            </p>
            <p>
              그리고 이러한 업로드와 다운로드를 위한 기능을 함수화시켜 쉽게
              사용할 수 있도록 했습니다. 각 함수는 기능에 맞게 a태그와
              input태그를 document.createElement로 생성했다가 click메서드로
              강제로 클릭시키게 한 다음 문서에서 삭제하는 방식을 사용합니다.
              따라서 React의 어떤 컴포넌트에서든지 해당 함수를 사용하기만 하면
              쉽게 파일 다운로드와 업로드가 가능하도록 했습니다.
            </p>
          </HiddenSection>
          <HiddenSection title="JSON parse">
            <p>
              데이터의 백업 또는 자료의 이동과 같은 기능을 제공하기 위해, 위의
              내용과 같이 애플리케이션의 데이터가 담긴 파일을 다운로드 받거나
              업로드 할 수 있도록 하였습니다. 하지만 문제는 모든 데이터를
              JSON.stringify를 이용해 문자열로 변환하여 파일에 저장한다는
              점이었습니다.
            </p>
            <p>
              이때 일반적인 객체나 기본형 데이터의 경우 큰 문제가 없었지만,
              Date객체로 저장된 값에 한해서는 문제가 발생했습니다.
              JSON.stringify를 이용해 Date객체를 변환하면, 해당 값은 마치
              Date.prototype.toISOString()을 사용할 때와 동일한 형태의 문자열로
              변환이 됩니다. 그리고 이를 다시 JSON.parse를 이용해 객체 형태로
              되돌릴 때, 원래 Date객체였던 부분은 그대로 문자열로 남게 됩니다.
            </p>
            <p>
              이러한 이유로 원래 Date객체였던 데이터가 ISO문자열의 형태로
              변환되어 애플리케이션에 적용되는 문제가 발생했고, 이를 해결하기
              위해 여러 방법을 찾아보았습니다.
            </p>
            <p>
              결국 이를 해결하기 위해 사용한 방법은 JSON.parse함수에서 제공하는
              두 번째 매개변수인 reviver을 사용하는 방법이었습니다. reviver에
              결과 값을 원하는 형태로 변환하는 함수를 사용하면, 문자열 형태의
              Date데이터를 실제 Date타입으로 변환할 수 있었습니다.
            </p>
            <p>
              이때 아무런 문자열이나 Date로 변환하면 안되었기 때문에,
              정규표현식을 이용하여 ISO Date 문자열의 형태를 가진 문자열만을
              확인해서 이를 new Date()로 변형하는 방식을 사용하였습니다.
            </p>
          </HiddenSection>
        </section>
      </article>
    </main>
  )
}
