import React, { useRef, useState, useEffect } from 'react'
import { UseFormRegister } from 'react-hook-form'
import cx from 'classnames'
import FormLabel from './FormLabel'
import FormError from './FormError'
import Suffix from './Suffix'
import s from './style.module.scss'

interface IInputProps {
  name: string
  id?: string
  className?: string
  classNameInputWrapper?: string
  style?: React.CSSProperties
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void
  defaultValue?: string | boolean | object
  value?: any
  label?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  register?: UseFormRegister<any>
  rules?: any
  errors?: any
  suffix?: string
  prefix?: string
  fluid?: boolean
  textCenter?: boolean
  showLabelRequired?: boolean
  rows?: number
  maxLength?: number
  view?: 'light' | string
  autoHeight?: boolean
  isResetHeight?: boolean
  isActive?: boolean
  readOnly?: boolean
}

const Textarea = ({
  id,
  name,
  className,
  classNameInputWrapper,
  style,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  defaultValue,
  value,
  label,
  placeholder,
  disabled,
  required,
  register,
  rules,
  errors,
  suffix,
  prefix,
  fluid,
  textCenter,
  rows,
  view,
  autoHeight,
  isResetHeight,
  isActive,
  ...rest
}: IInputProps) => {
  const inputRef = useRef<HTMLDivElement | null>(null)
  const [validation, setValidation] = useState<any>(null)
  const [isRequired, setIsRequired] = useState<boolean>(false)
  const [inputActive, setInputActive] = useState<boolean>(
    isActive ||
      (Array.isArray(value) && Boolean(value?.length)) ||
      (!Array.isArray(value) && Boolean(value)) ||
      Boolean(placeholder) ||
      false
  )
  const isAuthView = view === 'auth'

  const formInputWrapperClassList = cx(
    s['form-input-wrapper'],
    {
      [s.error]: errors?.[name] || errors?.ref?.name === name,
      [s.fluid]: fluid,
      [s.active]: inputActive,
      [s[`view-${view}`]]: view,
      [s['has-label']]: label
    },
    classNameInputWrapper
  )

  const inputClassList = cx(
    s.input,
    s.textarea,
    {
      [s['has-prefix']]: prefix,
      [s['has-suffix']]: suffix,
      [s['text-center']]: textCenter,
      fluid,
      [s.error]: errors?.[name] || errors?.ref?.name === name
    },
    className
  )

  const handlerInputActive = (v: boolean) => {
    if (!placeholder) setInputActive(v)
  }

  useEffect(() => {
    if (!inputActive && !Array.isArray(value) && !!value) handlerInputActive(true)
  }, [value, inputActive, placeholder])

  useEffect(() => {
    setValidation(
      register ? { ...register(name, { ...rules, onChange: (e: any) => (onChange ? onChange(e) : null) }) } : null
    )
    setIsRequired(required || rules?.required?.value)
  }, [])

  useEffect(() => {
    if (autoHeight) {
      // @ts-ignore
      inputRef.current.lastElementChild.style.height = 'auto'

      if (value && inputRef?.current?.lastElementChild) {
        // @ts-ignore
        inputRef.current.lastElementChild.style.height = `${Math.min(
          inputRef.current.lastElementChild.scrollHeight,
          350
        )}px`
      }
    }
  }, [value, autoHeight])

  useEffect(() => {
    if (!value && isResetHeight && inputRef?.current?.lastElementChild) {
      // @ts-ignore
      inputRef.current.lastElementChild.style.height = `${Math.min(
        inputRef.current.lastElementChild.scrollHeight,
        40
      )}px`
    }
  }, [value, isResetHeight])

  return (
    <label className={formInputWrapperClassList}>
      <FormLabel label={label} required={isRequired} requiredColor={isAuthView ? 'grey' : undefined} />
      <div className={s['input-container']} ref={inputRef}>
        {suffix && <Suffix suffix={suffix} />}
        <textarea
          id={id}
          name={name}
          className={inputClassList}
          style={style}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
            handlerInputActive(true)
            if (onFocus) onFocus(e)
          }}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            if (!e.target.value) handlerInputActive(false)
            if (onBlur) onBlur(e)
          }}
          defaultValue={defaultValue}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          {...validation}
          {...rest}
        />
      </div>
      <FormError message={errors?.[name]?.message || (errors?.ref?.name === name && errors?.message)} />
    </label>
  )
}

export default Textarea
