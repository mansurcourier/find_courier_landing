import React, { ForwardedRef, RefObject, useEffect, useRef, useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import cx from 'classnames'
import { Icon } from 'components/ui'
import FormLabel from './FormLabel'
import FormError from './FormError'
// import Prefix from './Prefix'
import Suffix from './Suffix'
import s from './style.module.scss'

type TInputType =
  | 'button'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'

interface IInputProps {
  name: string
  id?: string
  className?: string
  classNameInputWrapper?: string
  style?: React.CSSProperties
  type?: TInputType
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onClear?: (event: React.MouseEvent<HTMLSpanElement>) => void
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => Promise<void> | void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => Promise<void> | void
  defaultValue?: string | boolean | object
  value?: string | number | unknown
  label?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  autoComplete?: 'on' | 'off' | 'none' | string
  register?: UseFormRegister<any>
  rules?: any
  errors?: any
  suffix?: string
  prefix?: string
  togglePassword?: boolean
  fluid?: boolean
  textCenter?: boolean
  view?: 'primary' | 'search' | 'auth'
  step?: number
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
  tooltip?: string
  readOnly?: boolean
  isActive?: boolean
  autoFocus?: boolean
}

const Input = React.forwardRef(
  (
    {
      id,
      name,
      className,
      classNameInputWrapper,
      style,
      type = 'text',
      onChange,
      onFocus,
      onBlur,
      onClear,
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
      togglePassword,
      fluid,
      textCenter,
      view = 'primary',
      tooltip,
      isActive,
      ...rest
    }: IInputProps,
    ref: ForwardedRef<HTMLInputElement> | any
  ) => {
    const excludeTypes: string[] = ['checkbox', 'radio', 'file', 'color', 'range', 'hidden']
    const defaultRef = useRef<RefObject<HTMLInputElement | null> | null>(null)
    const inputRef = ref || defaultRef
    const [inputType, setInputType] = useState<string>(type)
    const [validation, setValidation] = useState<any>(null)
    const [isRequired, setIsRequired] = useState<boolean>(false)
    const [inputActive, setInputActive] = useState<boolean>(
      isActive ||
        (Array.isArray(value) && Boolean(value?.length)) ||
        (!Array.isArray(value) && Boolean(value)) ||
        Boolean(placeholder) ||
        false
    )
    const requiredValue = required || rules?.required?.value
    const searchType = type === 'search'
    const isAuthView = view === 'auth'
    const isInputTypeTel = inputType === 'tel'
    const hasError = Boolean(errors?.[name])

    const formInputWrapperClassList = cx(
      s['form-input-wrapper'],
      s[type],
      {
        [s.error]: hasError,
        [s.fluid]: fluid,
        [s.active]: inputActive,
        [s[`view-${view}`]]: view,
        [s['with-tooltip']]: tooltip,
        [s['has-label']]: label
      },
      classNameInputWrapper
    )

    const inputClassList = cx(
      s.input,
      {
        [s['has-prefix']]: prefix,
        [s['has-suffix']]: suffix || tooltip,
        [s['text-center']]: textCenter,
        [s.password]: togglePassword,
        [s['with-error']]: hasError
      },
      className
    )

    const handlerInputActive = (v: boolean) => {
      if (!placeholder && !isActive) setInputActive(v)
    }

    useEffect(() => {
      if (!inputActive && !Array.isArray(value) && !!value) handlerInputActive(true)
    }, [value, inputActive, placeholder])

    useEffect(() => {
      setValidation(
        register
          ? {
              ...register(name, {
                ...rules,
                onChange: (e) => onChange?.(e),
                onBlur: (e) => {
                  if (!e.target.value) handlerInputActive(false)
                }
              })
            }
          : null
      )
      setIsRequired(requiredValue)

      if (isInputTypeTel && inputRef.current) {
        setValidation(
          register
            ? {
                ...register(name, {
                  ...rules,
                  pattern: {
                    value: /\+\d{1}\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}/,
                    message: 'Неверный номер телефона'
                  }
                })
              }
            : null
        )
      }

      if (inputType === 'email' && inputRef.current) {
        setValidation(
          register
            ? {
                ...register(name, {
                  ...rules,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,8}$/,
                    message: 'Неверный email'
                  }
                })
              }
            : null
        )
      }
    }, [requiredValue])

    const TogglePassword: React.FC = () => {
      const togglePasswordHandler = () => {
        if (inputType === 'text') {
          setInputType('password')
        } else {
          setInputType('text')
        }
      }

      return (
        <>
          {togglePassword && (
            <span className={s['toggle-password']} onClick={togglePasswordHandler}>
              {inputType === 'password' && <Icon name='visibility' />}
              {inputType === 'text' && <Icon name='visibility_off' />}
            </span>
          )}
        </>
      )
    }

    const ClearInput: React.FC = () => (
      <>
        {searchType && inputRef?.current?.firstChild?.value && (
          <span
            className={s['clear-input']}
            onClick={(e) => {
              if (onClear) {
                e.stopPropagation()
                onClear(e)
              }
            }}
          >
            <Icon name='close' size='xs' />
          </span>
        )}
      </>
    )

    return (
      <label htmlFor={id} className={formInputWrapperClassList}>
        <FormLabel
          label={label}
          required={isRequired}
          requiredColor={!hasError && (isAuthView || disabled) ? 'grey' : undefined}
        />
        <div className={s['input-container']} ref={inputRef}>
          <input
            id={id}
            name={name}
            className={inputClassList}
            style={style}
            type={inputType}
            onChange={onChange}
            onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
              handlerInputActive(true)
              if (onFocus) onFocus(e)
            }}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
              if (!e.target.value) handlerInputActive(false)
              if (onBlur) onBlur(e)
            }}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            {...validation}
            {...rest}
          />
          {/* {!excludeTypes.includes(type) && <Prefix icon={prefix} />} */}
          {!excludeTypes.includes(type) && (suffix || togglePassword || tooltip || searchType) && (
            <Suffix suffix={suffix}>
              <TogglePassword />
              <ClearInput />
            </Suffix>
          )}
        </div>
        <FormError message={errors?.[name]?.message || hasError} />
      </label>
    )
  }
)

export default Input
