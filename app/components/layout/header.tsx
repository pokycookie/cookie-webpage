'use client'

import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>COOKIE</h1>
      <div className={styles.links}></div>
    </header>
  )
}
