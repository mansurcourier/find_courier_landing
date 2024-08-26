import React, { useEffect } from 'react'
import BaseModal from 'react-modal'
import cx from 'classnames'
import { CloseIcon } from 'components/ui'

interface IModalProps {
  children?: React.ReactNode
  isOpen: boolean
  size?: '' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full'
  onAfterOpen?: VoidFunction
  onAfterClose?: VoidFunction
  onRequestClose?: VoidFunction
  closeTimeoutMS?: number | undefined
  contentLabel?: string | undefined
  shouldCloseOnOverlayClick?: boolean | undefined
  shouldCloseOnEsc?: boolean | undefined
  parentSelector?: () => HTMLElement
  style?: React.CSSProperties
  overflow?: boolean
  closePlace?: 'left' | 'right' | 'uptop-right' | null
  fixCloseIcon?: boolean
}

const Modal = ({
  children,
  isOpen = false,
  size = 'md',
  onAfterOpen,
  onAfterClose,
  onRequestClose,
  closeTimeoutMS = 100,
  contentLabel,
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEsc = true,
  parentSelector,
  style,
  overflow = true,
  closePlace = null,
  fixCloseIcon = false
}: IModalProps) => {
  const classList = cx('modal', {
    [size]: size,
    'fix-close-icon': fixCloseIcon
  })

  const getInlineStyle = () => {
    let inlineStyle: {
      overlay?: React.CSSProperties
      content?: React.CSSProperties
    } = {}

    if (!isOpen && closeTimeoutMS) {
      inlineStyle = {
        ...inlineStyle,
        overlay: {
          ...inlineStyle.overlay,
          transition: `opacity ${closeTimeoutMS}ms ease-in-out`
        }
      }
    }

    if (style) {
      inlineStyle = {
        ...inlineStyle,
        content: {
          ...inlineStyle.content,
          ...style
        }
      }
    }

    return inlineStyle
  }

  useEffect(() => {
    if (overflow) {
      const bodyStyle = document.body.style
      if (isOpen) {
        bodyStyle.overflow = 'hidden'
      } else {
        bodyStyle.overflow = ''
      }
    }
  }, [overflow, isOpen])

  return (
    <BaseModal
      isOpen={isOpen}
      onAfterClose={onAfterClose}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={closeTimeoutMS}
      contentLabel={contentLabel}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      shouldCloseOnEsc={shouldCloseOnEsc}
      parentSelector={parentSelector}
      className={classList}
      style={getInlineStyle()}
      ariaHideApp={false}
      bodyOpenClassName='modalBodyOpen'
      portalClassName='modalPortal'
      overlayClassName='overlay'
    >
      {closePlace && (
        <CloseIcon className={cx('close', { [`icon-close-${closePlace}`]: closePlace })} onClick={onRequestClose} />
      )}
      <div className='content'>{children}</div>
    </BaseModal>
  )
}

export default Modal
