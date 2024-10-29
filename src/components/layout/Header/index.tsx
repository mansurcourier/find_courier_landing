import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import { useWindowSize } from 'hooks'
import { Button, Modal } from 'components/ui'
import { DownloadAppModal } from 'components/mainPage'
import SocialLinks from './SocialLinks'
import MenuLinks from './MenuLinks'
import styles from './styles.module.scss'
import logoImg from 'assets/images/logo.svg'
import { isAndroid } from 'react-device-detect'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [showDownloadButton, setShowDownloadButton] = useState(false)
  const { deviceWidth } = useWindowSize()

  const onScroll = () => {
    setShowDownloadButton(window.scrollY > 500)
  }

  React.useEffect(() => {
    if (deviceWidth === 'small') {
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
    }
  }, [deviceWidth])

  return (
    <div className={styles['header-wrapper']}>
      <header className={cx(styles.header, { [styles['show-download-button']]: showDownloadButton })}>
        <Link to='/'>
          <img className={styles.header__img} src={logoImg as string} alt='logo' />
        </Link>
        {deviceWidth === 'small' ? (
          isAndroid ? (
            <Button className={styles['header__download-button']}>
              <HashLink style={{ color: '#fff' }} to={'#download'} smooth>
                Скачать
              </HashLink>
            </Button>
          ) : (
            <Button className={styles['header__download-button']} onClick={() => setShowModal(true)}>
              Скачать
            </Button>
          )
        ) : (
          <>
            <MenuLinks />
            <SocialLinks />
          </>
        )}
      </header>

      <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
        <DownloadAppModal />
      </Modal>
    </div>
  )
}

export default Header
