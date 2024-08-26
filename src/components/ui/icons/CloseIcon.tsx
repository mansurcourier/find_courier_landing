import React from 'react'
import cx from 'classnames'
import { Icon } from '../icon'
import s from './icons.module.scss'

interface ICloseIconProps {
  className?: string
  onClick?: VoidFunction
  color?: 'primary' | 'white-grey'
}

const CloseIcon = ({ className, onClick, color = 'primary' }: ICloseIconProps) => (
  <div
    className={cx(
      s['close-icon'],
      {
        [s[`color-${color}`]]: color
      },
      className
    )}
    onClick={onClick}
  >
    <Icon name='close' size='lg' color='gray' />
  </div>
)

export default CloseIcon
