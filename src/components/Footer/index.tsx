import { Link } from "react-router-dom";
import { nav } from "../../const";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              {nav.map((item) => (
                <li key={item.id} className={styles.nav__item}>
                  <Link
                    className={styles.nav__link}
                    to={`/docs?doc=${item.id}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className={styles.footer__copy}>© 2024 FindCourier</div>
      </div>
    </footer>
  );
};

export default Footer;
