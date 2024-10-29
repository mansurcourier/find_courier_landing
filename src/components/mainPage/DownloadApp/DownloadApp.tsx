import React from 'react'
import cx from 'classnames'
import { isAndroid, isIOS, isBrowser } from 'react-device-detect'
import { APP_STORE_LINK } from 'constants/const'
import { Container, Text } from 'components/ui'
import appStoreImg from 'assets/images/app-store.svg'
import googlePlayImg from 'assets/images/google-play.svg'
import styles from './download-app.module.scss'

const DownloadApp = () => (
  <div className={cx(styles['download-app-wrapper'], 'offset-top-92 offset-sm-top-150')}>
    <Container>
      <div className={styles['download-app']}>
        <Text as='p' align='center' size='lg'>
          Скачайте FindCourier на ваш смартфон и ощутите все преимущества нашего удобного сервиса доставки
        </Text>
        <div className={styles['download-app__buttons']}>
          {(!isAndroid || isBrowser) && (
            <a href={APP_STORE_LINK} target='_blank' className={styles.link}>
              <img src={appStoreImg as string} alt='app-store' />
            </a>
          )}
          {(!isIOS || isBrowser) && (
            <a download='findcourier.apk' href='/findcourier.apk' className={styles.link}>
              <img src={googlePlayImg as string} alt='google-play-app' />
            </a>
          )}
        </div>
      </div>
    </Container>
  </div>
)

export default DownloadApp
