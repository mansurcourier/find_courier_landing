import React from 'react'
import cx from 'classnames'

interface IContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
  style?: React.CSSProperties
  fluid?: boolean
  small?: boolean
}

const Container = ({ children, className, fluid, small, ...rest }: IContainerProps) => {
  const classList = cx(
    'container',
    {
      'container-fluid': fluid,
      'container-small': small
    },
    className
  )

  return (
    <div className={classList} {...rest}>
      {children}
    </div>
  )
}

export default Container
