import { Link, useLocation } from "react-router-dom";
import { nav } from "../../const";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { isMobile } from "react-device-detect";
import cn from "classnames";
import { docs } from "../../docs";
import styles from "./styles.module.scss";

const Documents = () => {
  const { search } = useLocation();
  const qp = new URLSearchParams(search);
  const doc = qp.get("doc") as keyof typeof docs;

  return (
    <div className="container">
      <div className={styles.docs}>
        {!isMobile && (
          <aside>
            <ul className={styles.nav}>
              {nav.map((item) => (
                <li key={item.id}>
                  <Link
                    className={cn({
                      [styles.nav__link]: true,
                      [styles.nav__link_active]: item.id === doc,
                    })}
                    to={`?doc=${item.id}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
        <main className={styles.main}>
          <Markdown remarkPlugins={[remarkGfm]}>{docs[doc]}</Markdown>
        </main>
      </div>
    </div>
  );
};

export default Documents;
