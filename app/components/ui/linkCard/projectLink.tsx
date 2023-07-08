import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './projectLink.module.scss'
import { faChrome, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'

interface IProps {
  github?: string
  webpage?: string
  download?: string
}

export default function ProjectLink(props: IProps) {
  return (
    <div className={styles.linkWrapper}>
      {props.github ? (
        <a className={styles.github} href={props.github} target="_blank">
          <FontAwesomeIcon className={styles.icon} icon={faGithub} />
          <p>Github 이동하기</p>
        </a>
      ) : null}
      {props.webpage ? (
        <a className={styles.github} href={props.webpage} target="_blank">
          <FontAwesomeIcon className={styles.icon} icon={faChrome} />
          <p>프로젝트 웹사이트</p>
        </a>
      ) : null}
      {props.download ? (
        <a className={styles.github} href={props.download} target="_blank">
          <FontAwesomeIcon className={styles.icon} icon={faCloudArrowDown} />
          <p>프로젝트 다운로드</p>
        </a>
      ) : null}
    </div>
  )
}
