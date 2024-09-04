import { useWindowSize } from 'hooks'
import { Icon, Text } from 'components/ui'
import styles from './styles.module.scss'

const SocialLinks = () => {
  const { deviceWidth } = useWindowSize()

  return (
    <ul className={styles['social-links']}>
      <li className={styles['social-links__item']}>
        <a href='https://t.me/findcourier' target='_blank'>
          <Icon name='telegram' size='sm' />
          {deviceWidth === 'large' && <Text size='md'>Telegram</Text>}
        </a>
      </li>
    </ul>
  )
}

export default SocialLinks
