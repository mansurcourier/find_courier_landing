import React from 'react'
import cx from 'classnames'
import s from './style.module.scss'

interface IInputGroupProps {
  children: React.ReactNode
  className?: string
  alignItems?: 'center' | 'start' | 'end'
  style?: React.CSSProperties
  gap?: 4 | 6 | 16
}

const InputGroup = ({ children, className, alignItems, style, gap }: IInputGroupProps) => {
  const classList = cx(
    s['input-group'],
    {
      [`align-items-${alignItems}`]: alignItems,
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

export default InputGroup
