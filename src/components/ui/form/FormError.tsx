import React from 'react'
import { Text } from '../text'
import s from './style.module.scss'

interface IFormError {
  message?: string
}

function FormError({ message }: IFormError) {
  return (
    <>
      {message && (
        <Text as='p' color='red' weight='regular' className={s['error-message']}>
          {message}
        </Text>
      )}
    </>
  )
}

export default FormError
