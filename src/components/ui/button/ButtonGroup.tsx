import React from 'react'
import cx from 'classnames'
import s from './style.module.scss'

interface IButtonGroupProps {
  children: React.ReactNode
  className?: string
  justifyContent?: 'center' | 'start' | 'end'
  style?: React.CSSProperties
  gap?: 8 | 16
}

const ButtonGroup = ({ children, className, justifyContent, style, gap }: IButtonGroupProps) => {
  const classList = cx(
    s['button-group'],
    {
      [`justify-content-${justifyContent}`]: justifyContent,
      [s[`gap-${gap}`]]: gap
    },
    className
  )

  return (
    <div className={classList} style={style}>
      {children}
    </div>
  )
}

export default ButtonGroup
