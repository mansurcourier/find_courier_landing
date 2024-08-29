import React, { useState } from 'react'
import cx from 'classnames'
import { useWindowSize } from 'hooks'
import { LOTTIE_ANIMATION_DESKTOP, LOTTIE_ANIMATION_MOBILE } from 'constants/const'
import { Button, Container, Lottie, Modal, Text } from 'components/ui'
import IconCarousel from './IconCarousel'
import DownloadAppModal from './DownloadAppModal'
import styles from './first-section.module.scss'
import turkishPeople from 'assets/images/people/turkish.png'
import chinaPeople from 'assets/images/people/china.png'
import vietnamPeople from 'assets/images/people/vietnam.png'
import russiaPeople from 'assets/images/people/russia.png'
import georgiaPeople from 'assets/images/people/georgia.png'
import saudiaPeople from 'assets/images/people/saudia.png'

const FirstSection = () => {
  const [showModal, setShowModal] = useState(false)
  const { deviceWidth } = useWindowSize()

  return (
    <div className={styles['first-section-wrapper']}>
      <Container>
        <div className={styles['first-section']}>
          <div className={styles['first-section__main-info']}>
            <Text
              as='h1'
              align='center'
              family='secondary'
              whiteSpace={deviceWidth === 'small' ? 'pre-line' : 'initial'}
              className={styles.title}
            >
              {`Самая мгновенная\nи надёжная доставка посылок\nи документов через границу России`}
            </Text>
            <Text
              as='p'
              align='center'
              size='lg'
              className={cx('offset-top-12 offset-sm-top-24 offset-md-top-32', styles.description)}
              whiteSpace={deviceWidth === 'small' ? 'pre-line' : 'initial'}
            >
              {`Первый в России сервис чемодан–шеринга:\nсообщество взаимопомощи по доставке\nпосылок через границы`}
            </Text>
            <Button className={cx('offset-top-80 offset-sm-top-32 offset-md-top-44', styles.button)} onClick={() => setShowModal(true)}>Скачать приложение</Button>

            <img src={turkishPeople} className={cx(styles['first-section__people'], styles.turkish)} alt='' />
            <img src={chinaPeople} className={cx(styles['first-section__people'], styles.china)} alt='' />
            <img src={vietnamPeople} className={cx(styles['first-section__people'], styles.vietnam)} alt='' />
            <img src={russiaPeople} className={cx(styles['first-section__people'], styles.russia)} alt='' />
            <img src={georgiaPeople} className={cx(styles['first-section__people'], styles.georgia)} alt='' />
            <img src={saudiaPeople} className={cx(styles['first-section__people'], styles.saudia)} alt='' />
            <Lottie
              className={styles['first-section__animation']}
              path={deviceWidth === 'small' ? LOTTIE_ANIMATION_MOBILE : LOTTIE_ANIMATION_DESKTOP}
            />
          </div>
          <div className={styles['first-section__carousel']}>
            <IconCarousel />
          </div>
        </div>
      </Container>

      <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
        <DownloadAppModal />
      </Modal>
    </div>
  )
}

export default FirstSection
