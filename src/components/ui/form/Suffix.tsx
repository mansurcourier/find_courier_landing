import React from 'react'
import Icon from '../icon/Icon'
import s from './style.module.scss'

interface ISuffixProps {
  children?: React.ReactNode
  suffix?: string | undefined
  onClick?: VoidFunction
}

const Suffix = ({ children, suffix, onClick }: ISuffixProps) => (
  <span className={s.suffix} onClick={onClick}>
    {children}
    {suffix && <Icon name={suffix} />}
  </span>
)

export default Suffix
