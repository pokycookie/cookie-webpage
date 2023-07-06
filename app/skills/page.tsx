'use client'

import styles from './page.module.scss'
import SkillBubble from '@/components/ui/skill/skillBubble'
import htmlIcon from '@img/icons/icons8-html-5-480.png'
import cssIcon from '@img/icons/icons8-css3-480.png'
import jsIcon from '@img/icons/icons8-javascript-480.png'
import tsIcon from '@img/icons/icons8-typescript-480.png'
import reactIcon from '@img/icons/icons8-react-400.png'
import nodeIcon from '@img/icons/icons8-nodejs-480.png'
import gitIcon from '@img/icons/icons8-git-480.png'
import nextIcon from '@img/icons/nextjs-icon.png'
import GooeyArea from '@/components/ui/gooeyEffect/gooeyArea'
import { useEffect, useState } from 'react'
import Marquee from '@/components/ui/marquee/marquee'
import SkillSection from '@/components/ui/skill/skillSection'
import styled from '@emotion/styled'
import PrevNext from '@/components/ui/linkCard/prevNext'
import data from '@data/skills.json'

const description = data.description

export default function Skills() {
  const [size, setSize] = useState(0)

  const resizeHandler = () => {
    const vw = window.innerWidth
    const vh = window.innerHeight - 110
    setSize(Math.max(Math.min(Math.min(vw, (vh / 2) * 3), 1200), 500))
  }

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
        <BubbleWrapper className={styles.wrapper} size={size}>
          <GooeyArea blur={35}>
            <SkillBubble
              src={nextIcon}
              x="48%"
              y="77%"
              size={size * 0.08}
              color="#FFFFFF"
              hash="next"
            />
            <SkillBubble
              src={gitIcon}
              x="23%"
              y="66%"
              size={size * 0.1}
              color="#EAE9E1"
              hash="git"
            />
            <SkillBubble
              src={htmlIcon}
              x="27%"
              y="27%"
              size={size * 0.12}
              color="#FF5900"
              hash="html"
            />
            <SkillBubble
              src={nodeIcon}
              x="77%"
              y="56%"
              size={size * 0.08}
              color="#5EBA62"
              hash="node"
            />
            <SkillBubble
              src={tsIcon}
              x="42%"
              y="19%"
              size={size * 0.15}
              color="#1F82E4"
              hash="ts"
            />
            <SkillBubble
              src={cssIcon}
              x="63%"
              y="69%"
              size={size * 0.2}
              color="#0383D2"
              hash="css"
            />
            <SkillBubble
              src={reactIcon}
              x="66%"
              y="28%"
              size={size * 0.3}
              color="#82D7E2"
              hash="react"
            />
            <SkillBubble
              src={jsIcon}
              x="40%"
              y="52%"
              size={size * 0.25}
              color="#FFDC19"
              hash="js"
            />
          </GooeyArea>
        </BubbleWrapper>
      </section>
      <article className={styles.article}>
        <SkillSection
          src={htmlIcon}
          title="HTML5"
          description={description.html}
          id="html"
        />
        <SkillSection
          src={cssIcon}
          title="CSS3"
          description={description.css}
          id="css"
        />
        <SkillSection
          src={jsIcon}
          title="JavaScript"
          description={description.js}
          id="js"
        />
        <SkillSection
          src={tsIcon}
          title="TypeScript"
          description={description.ts}
          id="ts"
        />
        <SkillSection
          src={reactIcon}
          title="React"
          description={description.react}
          id="react"
        />
        <SkillSection
          src={gitIcon}
          title="Git"
          description={description.git}
          id="git"
        />
        <SkillSection
          src={nodeIcon}
          title="NodeJS"
          description={description.node}
          id="node"
        />
        <SkillSection
          src={nextIcon}
          title="Next13"
          description={description.next}
          id="next"
        />
      </article>
      <PrevNext
        prevTitle="About Me"
        prevHref="/aboutMe"
        nextTitle="Portfolio"
        nextHref="/portfolio"
      />
    </main>
  )
}

const BubbleWrapper = styled.div<{ size: number }>((props) => ({
  width: props.size,
  aspectRatio: '3 / 2',
  position: 'relative',
}))
