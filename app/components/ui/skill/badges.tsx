import styles from './badges.module.scss'

interface ISkills {
  name: string
  color: string
  bgColor: string
}

interface IProps {
  skills: ISkills[]
}

export default function Badges({ skills }: IProps) {
  return (
    <ul className={styles.badgeArea}>
      {skills.map((e, i) => {
        return (
          <li
            key={i}
            className={styles.badge}
            style={{ backgroundColor: e.bgColor, color: e.color }}
          >
            {e.name}
          </li>
        )
      })}
    </ul>
  )
}
