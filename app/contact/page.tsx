import Marquee from '@/components/ui/marquee/marquee'
import styles from './page.module.scss'

export default function Contact() {
  return (
    <main className={styles.main}>
      <section className={styles.contact}>
        <h1>Contact</h1>
        <p>어떤 내용이든 편하게 메일을 보내주세요! 항상 확인하고 있습니다.</p>
        <a href="mailto:0cookieboy0@gmail.com" className={styles.email}>
          0cookieboy0@gmail.com
        </a>
        <a href="mailto:0cookieboy0@gmail.com" className={styles.link}>
          메일 보내기
        </a>
      </section>
      <div className={styles.marqueeArea}>
        <Marquee>COOKIE</Marquee>
        <Marquee delay={3}>COOKIE</Marquee>
        <Marquee delay={6}>COOKIE</Marquee>
      </div>
    </main>
  )
}
