import cx from 'classnames'
import { Container, Text } from 'components/ui'
import styles from './styles.module.scss'

const Calculator = () => {
  return (
    <Container>
      <div className={styles.calculator}>
        <div className={styles.left}>
          <Text size='xxl' family='secondary'>
            Калькулятор гарантированной доставки
          </Text>
          <Text as='p' className={cx('offset-top-24', styles.calculator__description)}>
            По некоторым направлениям действует наша сервисная гарантированная доставка!
          </Text>
        </div>
        <div className={styles.right}>
          <Text size='xxl'>Калькулятор гарантированной доставки</Text>
        </div>
      </div>
    </Container>
  )
}

export default Calculator
