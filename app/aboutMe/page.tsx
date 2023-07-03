import Marquee from '@/components/ui/marquee/marquee'
import styles from './page.module.scss'
import PrevNext from '@/components/ui/linkCard/prevNext'

export default function aboutMe() {
  return (
    <>
      <main className={styles.aboutMe}>
        <article className={styles.introduceArea}>
          <h2>About Cookie</h2>
          {introduce.map((text, i) => {
            return <p key={i}>{text}</p>
          })}
        </article>
        <PrevNext
          prevTitle="Home"
          prevHref="/"
          nextTitle="Skills"
          nextHref="/skills"
        />
      </main>
      <div className={styles.marqueeArea1}>
        <Marquee>COOKIE</Marquee>
        <Marquee delay={3}>COOKIE</Marquee>
      </div>
      <div className={styles.marqueeArea2}>
        <Marquee>COOKIE</Marquee>
      </div>
    </>
  )
}

const introduce = [
  '안녕하세요! 주니어 프론트엔드 개발자 황세웅입니다.',
  '여러 새로운 기술과 환경에 끊임없이 도전하는 것을 중심으로 하여 개발 공부를 해 나가고 있습니다. 새로운 도전이 성장으로 직결된다는 것을 여러 경험을 통해 알 수 있었고, 그 때문에 이러한 자세를 계속 유지해 나가고자 합니다.',
  '저는 TypeScript와 React를 기본으로 하여, 웹사이트 제작과 웹 애플리케이션 프로젝트를 다양하게 경험해 보았습니다. 특히 복잡한 기능이 필요한 웹 애플리케이션을 SPA 형태로 제작하는 것에 관심이 많으며, 그중에서도 데이터를 시각화하는 부분에 자신이 있습니다.',
  '최근에는 다시 프론트엔드의 기본으로 돌아가 부드러운 애니메이션과 반응형 디자인, 그리고 웹 표준에 중심을 두어 사용자의 입장에서 자연스럽게 사용할 수 있는 형태를 만들어 내는 부분에 대해 노력하고 있습니다.',
]
