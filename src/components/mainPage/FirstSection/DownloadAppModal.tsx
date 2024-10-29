import React from 'react'
import { isAndroid, isIOS, isBrowser } from 'react-device-detect'
import { Link } from 'react-router-dom'
import { QRCodeSVG } from 'qrcode.react'
import { APP_STORE_LINK, GOOGLE_PLAY_LINK } from 'constants/const'
import { Text } from 'components/ui'
import appStoreImg from 'assets/images/app-store-white.svg'
import googlePlayImg from 'assets/images/google-play-white.svg'
import s from './first-section.module.scss'

const DownloadAppModal = () => (
  <div className={s['download-app']}>
    <div className={s['download-app__header']}>
      <Text as='p' className={s.text} align='center'>
        Отсканируйте QR-код, чтобы скачать приложение на смартфон
      </Text>
    </div>
    <div className={s['download-app__content-wrapper']}>
      <div className={s['download-app__content']}>
        <div className={s.apps}>
          {(!isAndroid || isBrowser) && (
            <div className={s.apps__item}>
              <Link to={APP_STORE_LINK} target='_blank'>
                <QRCodeSVG value={APP_STORE_LINK} bgColor='#FFFFFF' fgColor='#000000' width={150} height={150} />
              </Link>
              <img src={appStoreImg as string} alt='app-store' />
            </div>
          )}
          {/* {(!isIOS || isBrowser) && (
            <div className={s.apps__item}>
              <Link to={GOOGLE_PLAY_LINK} target='_blank'>
                <QRCodeSVG value={GOOGLE_PLAY_LINK} bgColor='#FFFFFF' fgColor='#000000' width={150} height={150} />
              </Link>
              <img src={googlePlayImg as string} alt='google-play' />
            </div>
          )} */}
        </div>
      </div>
    </div>
  </div>
)

export default DownloadAppModal
