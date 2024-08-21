import React from 'react'
import cx from 'classnames'
import { isAndroid, isIOS } from 'react-device-detect'
import { Container, Text } from 'components/ui'
import appStoreImg from 'assets/images/app-store.svg'
import googlePlayImg from 'assets/images/google-play.svg'
import styles from './download-app.module.scss'

const DownloadApp = () => {
  return (
    <div className={cx(styles['download-app-wrapper'], 'offset-top-150')}>
      <Container>
        <div className={styles['download-app']}>
          <Text as='p' align='center'>
            Скачайте FindCourier на ваш смартфон и ощутите все преимущества нашего удобного сервиса доставки
          </Text>
          <div className={styles['download-app__buttons']}>
            {!isAndroid && (
              <a
                href='https://apps.apple.com/us/app/findcourier/id6471444446'
                target='_blank'
                className={styles.link}
              >
                <img src={appStoreImg as string} alt='app-store' />
              </a>
            )}
            {!isIOS && (
              <a
                href='https://play.google.com/store/apps/details?id=com.denievhalid.courierapp'
                target='_blank'
                className={styles.link}
              >
                <img src={googlePlayImg as string} alt='google-play' />
              </a>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default DownloadApp
