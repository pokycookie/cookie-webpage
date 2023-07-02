/** @jsxImportSource @emotion/react */
'use client'

import styled from '@emotion/styled'
import styles from './skillBubble.module.scss'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

interface IProps {
  src: StaticImageData
  x?: number | string
  y?: number | string
  size?: number
  color?: string
}

export default function SkillBubble(props: IProps) {
  return (
    <Bubble
      className={styles.bubble}
      x={props.x}
      y={props.y}
      size={props.size}
      color={props.color}
      initial={{ x: '-50%', y: '-50%' }}
      whileHover={{ scale: 1.1, x: '-50%', y: '-50%' }}
    >
      <Image
        src={props.src}
        alt="html"
        placeholder="empty"
        className={styles.img}
        draggable="false"
      />
    </Bubble>
  )
}

const Bubble = styled(motion.div)<Omit<IProps, 'src'>>((props) => ({
  width: props.size ?? '20vw',
  height: props.size ?? '20vw',
  left: props.x ?? 0,
  top: props.y ?? 0,
  position: 'absolute',
  backgroundColor: props.color ?? 'rgba($color: white, $alpha: 0.5)',
  padding: (props.size ?? 1) * 0.1,
  cursor: 'pointer',
}))
