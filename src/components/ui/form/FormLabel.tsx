import React from 'react'
import cx from 'classnames'
import { Text } from '../text'
import s from './style.module.scss'

interface IFormLabel {
  label?: string | undefined
  isActive?: boolean
  color?: string
  requiredColor?: string
  required?: boolean
  className?: string
}

const FormLabel = ({ label, isActive, className, ...rest }: IFormLabel) => (
  <div
    onClick={(e) => {
      e.preventDefault()
      e.stopPropagation()
    }}
  >
    {label && (
      <Text className={cx(s.label, { [s.active]: isActive }, className)} {...rest}>
        {label}
      </Text>
    )}
  </div>
)

export default FormLabel
