import React from "react";
import Logo from "../Logo";
import SocialLinks from "../SocialLinks";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__inner}>
          <Logo />
          <SocialLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
