'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './hiddenSection.module.scss'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface IProps {
  title: string
  deafultOpen?: boolean
  children?: React.ReactNode
}

export default function HiddenSection(props: IProps) {
  const [isOpen, setIsOpen] = useState(props.deafultOpen ?? false)

  return (
    <div className={styles.hiddenSection}>
      <div
        className={styles.titleArea}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h3>{props.title}</h3>
        <motion.div
          className={styles.iconArea}
          animate={{ transform: isOpen ? 'rotate(180deg)' : undefined }}
        >
          <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
        </motion.div>
      </div>
      <motion.div
        animate={{ height: isOpen ? 'auto' : '0px' }}
        className={styles.content}
      >
        {props.children}
      </motion.div>
    </div>
  )
}
