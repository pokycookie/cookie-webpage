'use client'

import Link from 'next/link'
import styles from './header.module.scss'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)
  const [hoverIdx, setHoverIdx] = useState<number | null>(null)
  const [menu, setMenu] = useState(false)

  const pathname = usePathname()

  const menuBtnREF = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const idx = links.findIndex((e) => new RegExp(e.regex).test(pathname))
    setSelectedIdx(idx < 0 ? null : idx)
  }, [pathname])

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (
        menuBtnREF.current &&
        !menuBtnREF.current.contains(e.target as HTMLElement)
      ) {
        setMenu(false)
      }
    }
    if (menu) {
      window.addEventListener('click', clickHandler)
    }
    return () => {
      window.removeEventListener('click', clickHandler)
    }
  }, [menu])

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
      <FontAwesomeIcon
        className={styles.menu}
        ref={menuBtnREF}
        icon={faBars}
        onClick={() => setMenu((prev) => !prev)}
      />
      <motion.section
        className={styles.menuArea}
        animate={{ height: menu ? 'auto' : 0 }}
      >
        {links.map((e, i) => {
          return (
            <Link href={e.href} key={i}>
              {e.title}
            </Link>
          )
        })}
      </motion.section>
    </header>
  )
}

const links = [
  { title: 'About Me', href: '/aboutMe', regex: /^\/aboutMe/ },
  { title: 'Skills', href: '/skills', regex: /^\/skills/ },
  { title: 'Portfolio', href: '/portfolio', regex: /^\/portfolio/ },
  { title: 'Contact', href: '/contact', regex: /^\/contact/ },
]
