import React from "react";
import SocialLinks from "./SocialLinks";
import logoImg from 'assets/images/logo.svg'
import MenuLinks from "./MenuLinks";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      {/*@ts-ignore*/}
      <img src={logoImg} alt='logo' />
      <MenuLinks />
      <SocialLinks />
    </header>
  );
};

export default Header;
