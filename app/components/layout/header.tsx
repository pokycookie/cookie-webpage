'use client'

import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.title}>
        COOKIE
      </Link>
      <div className={styles.links}></div>
    </header>
  )
}
