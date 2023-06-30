'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './linkCard.module.css'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface IProps {
  title: string
  href?: string
  description?: string
}

export default function LinkCard(props: IProps) {
  return (
    <a className={styles.card} href={props.href} target="_blank">
      <span className={styles.title}>
        <h2>{props.title}</h2>
        <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
      </span>
      <p className={styles.description}>{props.description}</p>
    </a>
  )
}
