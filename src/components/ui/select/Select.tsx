import React, { ForwardedRef, useEffect, useState } from 'react'
import BaseSelect, { OptGroup, Option } from 'rc-select'
import cx from 'classnames'
import { Icon } from 'components/ui'
import FormError from '../form/FormError'
import FormLabel from '../form/FormLabel'
import s from '../form/style.module.scss'

interface ISelect {
  children?: React.ReactNode
  id?: string
  name: string
  className?: string
  style?: React.CSSProperties
  value?: any
  defaultValue?: any
  label?: string
  required?: boolean
  onChange?: (event?: React.ChangeEvent<HTMLInputElement> | any) => void
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement> | any) => void
  onSearch?: (event: React.FocusEvent<HTMLInputElement> | any) => void
  onDeselect?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onPopupScroll?: (event: React.UIEventHandler<HTMLInputElement> | any) => void
  rules?: any
  errors?: any
  fluid?: boolean
  arrowIcon?: boolean
  classNameInputWrapper?: string
  view?: 'disabled-search-select' | 'auth' | string
  open?: boolean
  animation?: 'slide-up'
  mode?: 'combobox' | 'multiple' | 'tags' | 'search' | undefined
  placeholder?: string
  maxCount?: number
  disabled?: boolean
  textCenter?: boolean
  showSearch?: boolean
  menuItemSelectedIcon?: React.ReactNode
  allowClear?: boolean
  virtual?: boolean
  loadNextOptions?: (value: boolean) => void
  loading?: boolean
  isActive?: boolean
  searchValue?: string
  autoClearSearchValue?: boolean
  arrowIconSize?: string
  autoComplete?: 'on' | 'off' | 'none' | string
}

const Select = React.forwardRef(
  (
    {
      children,
      name,
      className,
      style,
      value,
      defaultValue,
      label,
      required,
      onChange,
      onFocus,
      onBlur,
      onPopupScroll,
      rules,
      errors,
      fluid,
      arrowIcon = false,
      classNameInputWrapper,
      view,
      mode,
      placeholder,
      textCenter,
      virtual = true,
      loading = false,
      loadNextOptions,
      isActive,
      searchValue,
      autoClearSearchValue = true,
      arrowIconSize = 'md',
      maxCount,
      ...rest
    }: ISelect,
    ref: ForwardedRef<any>
  ) => {
    const valueOrSearchValue = value || searchValue
    const [isRequired, setIsRequired] = useState(false)
    const [inputActive, setInputActive] = useState<boolean>(
      isActive ||
        (Array.isArray(valueOrSearchValue) && Boolean(valueOrSearchValue?.length)) ||
        (!Array.isArray(valueOrSearchValue) && Boolean(valueOrSearchValue && String(valueOrSearchValue))) ||
        Boolean(placeholder) ||
        false
    )
    const isAuthView = view === 'auth'

    const formInputWrapperClassList = cx(
      s['form-input-wrapper'],
      {
        [s.error]: errors?.[name],
        [s.fluid]: fluid,
        [s.active]: inputActive,
        [s['text-center']]: textCenter,
        [s['has-label']]: label,
        [s[`view-${view}`]]: view
      },
      classNameInputWrapper
    )

    const selectClassList = cx(
      {
        fluid,
        error: errors?.[name],
        'has-label': label,
        [`view-${view}`]: view
      },
      className
    )

    const handlerInputActive = (v: boolean) => {
      if (!placeholder) setInputActive(v)
    }

    const popupScrollHandler = (e: React.UIEventHandler<HTMLInputElement> | any) => {
      if (onPopupScroll && !loadNextOptions) return onPopupScroll(e)
      if (!onPopupScroll && loadNextOptions) {
        return loadNextOptions && loadNextOptions(e.target.offsetHeight + e.target.scrollTop === e.target.scrollHeight)
      }

      if (onPopupScroll) onPopupScroll(e)
      if (loadNextOptions) loadNextOptions(e.target.offsetHeight + e.target.scrollTop === e.target.scrollHeight)
    }

    useEffect(() => {
      setIsRequired(required || rules?.required?.value)
    }, [])

    return (
      <label className={formInputWrapperClassList}>
        <FormLabel label={label} required={isRequired} requiredColor={isAuthView ? 'grey' : undefined} />
        <div className={s['input-container']} ref={ref}>
          <BaseSelect
            ref={ref}
            className={selectClassList}
            style={style}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
              onBlur?.(e)
              if (!valueOrSearchValue?.length) handlerInputActive(false)
            }}
            onFocus={(e) => {
              onFocus?.(e)
              handlerInputActive(true)
            }}
            onPopupScroll={onPopupScroll || loadNextOptions ? popupScrollHandler : () => {}}
            suffixIcon={
              arrowIcon && (
                <Icon name='arrow-down' size={arrowIconSize} color='gray' className='rc-select-arrow-icon' />
              )
            }
            clearIcon={<Icon name='close' size='xs' color='gray' />}
            removeIcon={<Icon name='close' size='xs' color='gray' />}
            // getPopupContainer={(trigger: any) => trigger.parentNode}
            menuItemSelectedIcon={<Icon name='check' color='blue' />}
            mode={mode === 'search' ? 'combobox' : mode}
            notFoundContent='Не найдено'
            virtual={!loadNextOptions ? virtual : false}
            loading={loading}
            placeholder={placeholder}
            autoClearSearchValue={mode !== 'search' || autoClearSearchValue}
            dropdownClassName={cx({ [`view-${view}-dropdown`]: view })}
            maxCount={maxCount}
            {...rest}
          >
            {children}
          </BaseSelect>
        </div>
        <FormError message={errors?.[name]?.message || errors?.[name]} />
      </label>
    )
  }
)

export default Object.assign(Select, {
  Option,
  OptGroup
})
