'use client'

import Link from 'next/link'
import styles from './header.module.scss'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Header() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)
  const [hoverIdx, setHoverIdx] = useState<number | null>(null)

  const pathname = usePathname()

  useEffect(() => {
    const idx = links.findIndex((e) => new RegExp(e.regex).test(pathname))
    setSelectedIdx(idx < 0 ? null : idx)
  }, [pathname])

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.title}>
        COOKIE
      </Link>
      <div className={styles.links}>
        {links.map((e, i) => {
          return (
            <Link
              href={e.href}
              key={i}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
            >
              {e.title}
            </Link>
          )
        })}
        <motion.div
          className={styles.selector}
          animate={{
            x: 100 * (hoverIdx ?? selectedIdx ?? 0),
            opacity: hoverIdx !== null ? 1 : selectedIdx !== null ? 1 : 0,
          }}
        ></motion.div>
      </div>
    </header>
  )
}

const links = [
  { title: 'About Me', href: '/aboutMe', regex: /^\/aboutMe/ },
  { title: 'Skills', href: '/skills', regex: /^\/skills/ },
  { title: 'Portfolio', href: '/portfolio', regex: /^\/portfolio/ },
  { title: 'Contact', href: '/contact', regex: /^\/contact/ },
]
