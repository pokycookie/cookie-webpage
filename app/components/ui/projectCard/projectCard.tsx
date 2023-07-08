import Link from 'next/link'
import styles from './projectCard.module.scss'
import Image, { StaticImageData } from 'next/image'
import Badges from '../skill/badges'

interface ISkills {
  name: string
  color: string
  bgColor: string
}

interface IProps {
  thumb: StaticImageData
  info: {
    title: string
    skills: ISkills[]
    description: string[]
  }
  href: string
}

export default function ProjectCard(props: IProps) {
  return (
    <Link
      href={props.href}
      className={styles.projectCard}
      id={props.info.title}
    >
      <div className={styles.titleArea}>
        <h2 className={styles.title}>{props.info.title}</h2>
      </div>
      <Image
        src={props.thumb}
        alt={props.info.title}
        draggable={false}
        className={styles.thumb}
      />
      <Badges skills={props.info.skills} />
      <span className={styles.description}>
        {props.info.description.map((text, i) => {
          return <p key={i}>{text}</p>
        })}
      </span>
    </Link>
  )
}
