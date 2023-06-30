import Link from 'next/link'
import styles from './prevNext.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons'

interface IProps {
  prevTitle: string
  prevHref: string
  nextTitle: string
  nextHref: string
}

export default function PrevNext(props: IProps) {
  return (
    <div className={styles.linkArea}>
      <Link href={props.prevHref}>
        <FontAwesomeIcon className={styles.icon} icon={faCircleChevronLeft} />
        <p>{props.prevTitle}</p>
      </Link>
      <Link href={props.nextHref}>
        <p>{props.nextTitle}</p>
        <FontAwesomeIcon className={styles.icon} icon={faCircleChevronRight} />
      </Link>
    </div>
  )
}
