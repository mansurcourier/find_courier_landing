import React from 'react'
import cx from 'classnames'
import { Button, Container, Text } from 'components/ui'
import IconCarousel from './IconCarousel'
import styles from './first-section.module.scss'

const FirstSection = () => (
  <div className={styles['first-section-wrapper']}>
    <Container>
      <div className={styles['first-section']}>
        <div className={styles['first-section__main-info']}>
          <Text as='h1' align='center' family='secondary'>
            Самая мгновенная и надёжная доставка посылок и документов через границу России
          </Text>
          <Text as='p' align='center' className={cx('offset-top-32', styles.description)}>
            Первый в России сервис чемодан–шеринга: сообщество взаимопомощи по доставке посылок через границы
          </Text>
          <Button className='offset-top-44'>Скачать приложение</Button>
        </div>
        <div className={styles['first-section__carousel']}>
          <IconCarousel />
        </div>
      </div>
    </Container>
  </div>
)

export default FirstSection
