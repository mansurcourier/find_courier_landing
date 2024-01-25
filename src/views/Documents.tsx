import { Link, useLocation } from "react-router-dom";
import { nav } from "../const";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import cn from "classnames";
import { docs } from "../docs";
import { useLayoutEffect } from "react";
import styles from "./styles.module.scss";
import * as trace_events from "trace_events";

const HEADER_CLASSNAME = "blue";

const Documents = () => {
  const { search } = useLocation();
  const qp = new URLSearchParams(search);
  const doc = qp.get("doc") as keyof typeof docs;

  useLayoutEffect(() => {
    document.querySelector("header")?.classList.add(HEADER_CLASSNAME);

    return () => {
      document.querySelector("header")?.classList.remove(HEADER_CLASSNAME);
    };
  }, []);

  return (
    <div className="container">
      <div className={styles.docs}>
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
        <main className={styles.main}>
          <Markdown remarkPlugins={[remarkGfm]}>{docs[doc]}</Markdown>
        </main>
      </div>
    </div>
  );
};

export default Documents;
