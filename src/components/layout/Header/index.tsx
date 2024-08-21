import React from 'react'
import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks'
import MenuLinks from './MenuLinks'
import logoImg from 'assets/images/logo.svg'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <img src={logoImg as string} alt='logo' />
      </Link>
      <MenuLinks />
      <SocialLinks />
    </header>
  )
}

export default Header
