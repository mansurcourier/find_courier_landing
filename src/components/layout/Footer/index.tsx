import { Link } from 'react-router-dom'
import { nav } from 'const'
import { useWindowSize } from 'hooks'
import { Text } from 'components/ui'
import logoTextImg from 'assets/images/logo-white-text.svg'
import logoIconImg from 'assets/images/logo-white-icon.svg'
import styles from './styles.module.scss'

const Footer = () => {
  const { deviceWidth } = useWindowSize()

  return (
    <div className={styles['footer-wrapper']}>
      <footer className={styles.footer}>
        <div className={styles.footer__logo}>
          <img src={logoIconImg as string} className={styles['logo-icon']} alt='' />
          <img src={logoTextImg as string} className={styles['logo-text']} alt='' />
        </div>
        <div className={styles.footer__content}>
          <div className={styles.left}>
            <Text as='p' color='white' className={styles.email}>
              <a href='mailto:info@findcourier.ru' target='_blank'>
                info@findcourier.ru
              </a>
            </Text>
            <div className='offset-top-48 offset-md-top-32'>
              <Text as='p' color='gray' size='xs'>
                ОГРН 1232000006150
              </Text>
              <Text as='p' color='gray' size='xs'>
                ИНН 2013011589
              </Text>
            </div>
            <Text className='offset-top-48 offset-md-top-56' as='p' color='gray' size='xs'>
              © 2024 ООО «Опенскай»
            </Text>
          </div>
          <div className={styles.right}>
            <ul className={styles['menu-nav']}>
              {nav
                .filter((v) => v.id !== 'reklama')
                .map((item) => (
                  <li key={item.id} className={styles['menu-nav__item']}>
                    <Text as='p' size='sm' color='white' align={deviceWidth === 'small' ? 'start' : 'end'}>
                      <Link className={styles.link} to={`/docs?doc=${item.id}`}>
                        {item.label}
                      </Link>
                    </Text>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
