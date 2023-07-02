'use client'

import styles from './page.module.scss'
import SkillBubble from '@/components/ui/skill/skillBubble'
import htmlIcon from '@img/icons8-html-5-480.png'
import cssIcon from '@img/icons8-css3-480.png'
import jsIcon from '@img/icons8-javascript-480.png'
import tsIcon from '@img/icons8-typescript-480.png'
import reactIcon from '@img/icons8-react-400.png'
import nodeIcon from '@img/icons8-nodejs-480.png'
import gitIcon from '@img/icons8-git-480.png'
import nextIcon from '@img/nextjs-icon.png'
import GooeyArea from '@/components/ui/gooeyEffect/gooeyArea'
import { useEffect, useRef, useState } from 'react'
import Marquee from '@/components/ui/marquee/marquee'
import { useScrollTop } from '@/hooks/scrollTop'

export default function Skills() {
  const [size, setSize] = useState(0)

  const bubbleAreaREF = useRef<HTMLDivElement>(null)
  const isScrlTop = useScrollTop()

  const resizeHandler = () => {
    const element = bubbleAreaREF.current
    if (!element) return
    const rect = element.getBoundingClientRect()
    setSize(rect.width)
  }

  useEffect(() => {
    console.log(isScrlTop)
  }, [isScrlTop])

  useEffect(() => {
    resizeHandler()
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <main className={styles.skills}>
      <div className={styles.marqueeArea}>
        <Marquee>COOKIE</Marquee>
        <Marquee delay={3}>COOKIE</Marquee>
      </div>
      <section className={styles.bubbleArea}>
        <div className={styles.wrapper} ref={bubbleAreaREF}>
          <GooeyArea blur={35}>
            <SkillBubble
              src={nextIcon}
              x="48%"
              y="77%"
              size={size * 0.08}
              color="#FFFFFF"
            />
            <SkillBubble
              src={gitIcon}
              x="23%"
              y="66%"
              size={size * 0.1}
              color="#EAE9E1"
            />
            <SkillBubble
              src={htmlIcon}
              x="27%"
              y="27%"
              size={size * 0.12}
              color="#FF5900"
            />
            <SkillBubble
              src={nodeIcon}
              x="77%"
              y="56%"
              size={size * 0.08}
              color="#5EBA62"
            />
            <SkillBubble
              src={tsIcon}
              x="42%"
              y="19%"
              size={size * 0.15}
              color="#1F82E4"
            />
            <SkillBubble
              src={cssIcon}
              x="63%"
              y="69%"
              size={size * 0.2}
              color="#0383D2"
            />
            <SkillBubble
              src={reactIcon}
              x="66%"
              y="28%"
              size={size * 0.3}
              color="#82D7E2"
            />
            <SkillBubble
              src={jsIcon}
              x="40%"
              y="52%"
              size={size * 0.25}
              color="#FFDC19"
            />
          </GooeyArea>
        </div>
      </section>
    </main>
  )
}
