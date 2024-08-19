import React from "react";
import { HashLink } from 'react-router-hash-link';
import { Text } from "components/ui";
import styles from "./styles.module.scss";

interface IMenuLink {
  text: string
  link: string
}

const MenuLinks = () => {
  const links: IMenuLink[] = [
    {
      text: 'Как это работает',
      link: '#how-it-work'
    },
    {
      text: 'Преимущества',
      link: '#advantages'
    },
    {
      text: 'Скачать',
      link: '#download'
    },
  ]

  return (
    <div className={styles['menu-links']}>
      {links.map((v: IMenuLink) => (
        <HashLink key={v.link} to={v.link} smooth>
          <Text size='md'>{v.text}</Text>
        </HashLink>
      ))}
    </div>
  )
}

export default MenuLinks
