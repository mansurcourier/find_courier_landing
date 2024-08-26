import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import { useWindowSize } from 'hooks'
import { Button } from 'components/ui'
import SocialLinks from './SocialLinks'
import MenuLinks from './MenuLinks'
import styles from './styles.module.scss'
import logoImg from 'assets/images/logo.svg'

const Header = () => {
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
      <header className={cx(styles.header, { [styles['show-download-button']]: showDownloadButton})}>
        <Link to='/'>
          <img className={styles.header__img} src={logoImg as string} alt='logo' />
        </Link>
        {deviceWidth === 'small' ? (
          <Button className={styles['header__download-button']}>
            Скачать
          </Button>
        ) : (
          <>
            <MenuLinks />
            <SocialLinks />
          </>
        )}
      </header>
    </div>
  )
}

export default Header
