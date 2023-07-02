'use client'

import styled from '@emotion/styled'

interface IProps {
  children?: React.ReactNode
  blur?: number
  className?: string
}

export default function GooeyArea(props: IProps) {
  return (
    <>
      <Filter width="0px" height="0px">
        <defs>
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation={props.blur ?? 15}
            />
            <feColorMatrix
              in="blur"
              result="gooey"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -5"
            />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </Filter>
      <Area className={props.className}>{props.children}</Area>
    </>
  )
}

const Filter = styled.svg(() => ({
  display: 'none',
}))

const Area = styled.div(() => ({
  width: '100%',
  height: '100%',
  filter: 'url(#gooey)',
  overflow: 'hidden',
  position: 'relative',
}))
