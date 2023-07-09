import styles from './page.module.scss'
import ProjectCard from '@/components/ui/projectCard/projectCard'
import projectData from '@data/projects.json'
import PrevNext from '@/components/ui/linkCard/prevNext'
import Marquee from '@/components/ui/marquee/marquee'

import mapleMesiterThumb from '@img/projects/maple-meister.gif'
import whatToDoNowThumb from '@img/projects/what-to-do-now.gif'

export default function Portfolio() {
  return (
    <main className={styles.portfolio}>
      <section>
        <ProjectCard
          thumb={mapleMesiterThumb}
          info={projectData.mapleMesiter}
          href="/portfolio/mapleMesiter"
        />
        <ProjectCard
          thumb={whatToDoNowThumb}
          info={projectData.WhatToDoNow}
          href="/portfolio/whatToDoNow"
        />
      </section>
      <PrevNext
        prevHref="/skills"
        prevTitle="Skills"
        nextHref="/contact"
        nextTitle="Contact"
      />
      <div className={styles.marqueeArea1}>
        <Marquee>COOKIE</Marquee>
        <Marquee delay={3}>COOKIE</Marquee>
      </div>
      <div className={styles.marqueeArea2}>
        <Marquee>COOKIE</Marquee>
        <Marquee delay={3}>COOKIE</Marquee>
      </div>
    </main>
  )
}
