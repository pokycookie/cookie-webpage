'use client'

import styled from '@emotion/styled'
import styles from './marquee.module.css'
import { keyframes } from '@emotion/react'

interface IProps {
  children: string
  repeat?: number
  delay?: number
  duration?: number
}

export default function Marquee(props: IProps) {
  return (
    <div className={styles.container}>
      {new Array(props.repeat ?? 6).fill(0).map((_, i) => {
        return (
          <Text key={i} className={styles.text} delay={props.delay}>
            {props.children}
          </Text>
        )
      })}
    </div>
  )
}

const Text = styled.span<Pick<IProps, 'delay' | 'duration'>>((props) => ({
  animation: `${marqueeKeyframes} ${props.duration ?? 10}s linear ${
    props.delay ?? 0
  }s infinite normal none`,
}))

const marqueeKeyframes = keyframes({
  from: {
    transform: `translate(0%)`,
  },
  to: {
    transform: `translate(-100%)`,
  },
})
