import styles from './skillSection.module.scss'
import Image, { StaticImageData } from 'next/image'

interface IProps {
  src: StaticImageData
  title: string
  description: string[]
  id?: string
}

export default function SkillSection(props: IProps) {
  return (
    <section className={styles.section}>
      <div id={props.id} className={styles.hashPosition}></div>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          src={props.src}
          alt="skillIcon"
          draggable={false}
        />
      </div>
      <div className={styles.info}>
        <h2>{props.title}</h2>
        <span>
          {props.description.map((description, i) => {
            return <p key={i}>{description}</p>
          })}
        </span>
      </div>
    </section>
  )
}
