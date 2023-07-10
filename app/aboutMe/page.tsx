import Marquee from '@/components/ui/marquee/marquee'
import styles from './page.module.scss'
import PrevNext from '@/components/ui/linkCard/prevNext'
import data from '@data/aboutMe.json'

const introduce = data.introduce

export default function aboutMe() {
  return (
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
      <div className={styles.marqueeArea1}>
        <Marquee>COOKIE</Marquee>
        <Marquee delay={3}>COOKIE</Marquee>
      </div>
      <div className={styles.marqueeArea2}>
        <Marquee>COOKIE</Marquee>
      </div>
    </main>
  )
}
