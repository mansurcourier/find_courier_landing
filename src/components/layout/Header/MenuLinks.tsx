import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import { Modal, Text } from 'components/ui'
import { DownloadAppModal } from 'components/mainPage/FirstSection'
import styles from "./styles.module.scss";
import { isAndroid, isBrowser } from 'react-device-detect';
interface IMenuLink {
  text: string
  link: string
}

const MenuLinks = () => {
  const [showModal, setShowModal] = useState(false)

  const links: IMenuLink[] = [
    {
      text: 'Как это работает',
      link: '#how-it-work'
    },
    {
      text: 'Преимущества',
      link: '#advantages'
    },
  ]

  return (
    <div className={styles['menu-links']}>
      {links.map((v: IMenuLink) => (
        <HashLink key={v.link} to={v.link} smooth>
          <Text size='md' className={styles['menu-links__text']}>
            {v.text}
          </Text>
        </HashLink>
      ))}
      
      {(!isAndroid || isBrowser) && (
        <Text size='md' className={styles['menu-links__text']} onClick={() => setShowModal(true)}>
          Скачать
        </Text>
      )} 
      {(isAndroid) && (
        <HashLink to={'#download'} smooth>
          <Text size='md' className={styles['menu-links__text']}>
              Скачать
          </Text>
        </HashLink>
      )}    
      <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)}>
        <DownloadAppModal />
      </Modal>
    </div>
  )
}

export default MenuLinks
