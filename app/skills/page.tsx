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
import { useEffect, useState } from 'react'
import Marquee from '@/components/ui/marquee/marquee'
import SkillSection from '@/components/ui/skill/skillSection'
import styled from '@emotion/styled'
import PrevNext from '@/components/ui/linkCard/prevNext'

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
          description={htmlDescription}
          id="html"
        />
        <SkillSection
          src={cssIcon}
          title="CSS3"
          description={cssDescription}
          id="css"
        />
        <SkillSection
          src={jsIcon}
          title="JavaScript"
          description={jsDescription}
          id="js"
        />
        <SkillSection
          src={tsIcon}
          title="TypeScript"
          description={tsDescription}
          id="ts"
        />
        <SkillSection
          src={reactIcon}
          title="React"
          description={reactDescription}
          id="react"
        />
        <SkillSection
          src={gitIcon}
          title="Git"
          description={gitDescription}
          id="git"
        />
        <SkillSection
          src={nodeIcon}
          title="NodeJS"
          description={nodeDescription}
          id="node"
        />
        <SkillSection
          src={nextIcon}
          title="Next13"
          description={nextDescription}
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

const htmlDescription = [
  '상황에 맞는 태그를 사용하여 문서의 기본 뼈대를 잡을 수 있습니다.',
  '각 태그의 의미와 관련 속성에 대해 이해하고 있습니다.',
]
const cssDescription = [
  'HTML 문서 구조에 맞는 스타일을 상황에 맞게 적용시킬 수 있습니다.',
  'flex와 grid, media query 등을 이용하여 반응형 레이아웃을 만들 수 있습니다.',
]
const jsDescription = [
  'JavaScript의 기초적인 동작에 대해 이해하고 있습니다.',
  '실행 컨텍스트의 동작과 이로 인해 생기는 스코프와 호이스팅, 함수 호출방식에 따라 달라지는 this와 this 바인딩, 클로저, 프로토타입과 같은 JavaScript의 핵심 개념을 이해하고 있으며, 완벽하게 체화하기 위해 계속해서 공부하고 있습니다.',
  'ES5, ES6를 포함하여 최신의 ECMAScript 내용을 꾸준히 공부하고 있습니다. let과 const, 화살표 함수, spread문법, 구조분해할당, Promise와 async 및 await 등을 자유롭게 사용할 수 있습니다.',
]
const tsDescription = [
  '타입이 강제되지 않아 런타임환경에서 오류가 일어나기 쉬운 JavaScript의 단점을 보완하고자 새롭게 선택한 언어입니다.',
  '필요한 type과 interface를 선언하여 사용할 수 있습니다. 이때 제네릭과 TypeScript의 여러 유틸리티 타입 등을 함께 사용할 수 있습니다.',
]
const reactDescription = [
  'React를 이용하여 복잡한 기능의 웹 어플리케이션을 만들 수 있습니다.',
  '프로젝트를 컴포넌트 단위로 설계하고, 각 컴포넌트가 유연하게 동작하여 재사용이 쉬운 구조가 되도록 노력합니다.',
  'React Hooks를 이용하여 함수형 컴포넌트를 사용할 수 있습니다. 또한 필요한 custom hook을 직접 제작하여 사용할 수 있습니다.',
]
const gitDescription = ['비어있음']
const nodeDescription = ['비어있음']
const nextDescription = ['비어있음']
