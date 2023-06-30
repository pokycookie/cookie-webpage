import styles from './page.module.scss'
import Marquee from './components/ui/marquee/marquee'
import LinkCard from './components/ui/linkCard/linkCard'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.main}>
        <div className={styles.titleArea}>
          <h1>Front-End</h1>
          <h1>Developer</h1>
          <h1>Cookie</h1>
        </div>
        <div className={styles.linkArea}>
          <div className={styles.cardArea}>
            <LinkCard
              title="GitHub"
              href="https://github.com/pokycookie"
              description="지금까지 진행한 여러 프로젝트를 저장해 둔 곳입니다. 매일 커밋을 하는 습관을 들여 게을러지지 않도록 하고 있습니다."
            />
            <LinkCard
              title="Blog"
              href="https://pokycookie.tistory.com/"
              description="새롭게 공부한 내용 또는 이슈를 해결한 경험을 기록하며 운영하는 개인 기술 블로그입니다."
            />
            <LinkCard
              title="Baekjoon"
              href="https://solved.ac/profile/0cookieboy0"
              description="알고리즘 공부를 위해 Baekjoon 사이트를 이용하고 있습니다. 매일 한 문제 이상씩 풀어 알고리즘 풀이 감각을 익히려 노력하고 있습니다."
            />
          </div>
          <Link href="/aboutMe" className={styles.aboutMe}>
            About Me
          </Link>
        </div>
      </section>
      <div className={styles.marqueeArea}>
        <Marquee>COOKIE</Marquee>
        <Marquee delay={3}>COOKIE</Marquee>
        <Marquee delay={6}>COOKIE</Marquee>
      </div>
    </main>
  )
}
