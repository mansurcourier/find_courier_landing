import { Link } from "react-router-dom";
import { nav } from "../const";
import styles from "./styles.module.scss";

const Documents = () => {
  return (
    <div className="container">
      <div className={styles.docs}>
        <aside>
          <ul className={styles.nav}>
            {nav.map((item) => (
              <li key={item.id}>
                <Link className={styles.nav__link} to={`?doc=${item.id}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <main>2</main>
      </div>
    </div>
  );
};

export default Documents;
