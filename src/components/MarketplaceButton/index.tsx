import type { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

const MarketplaceButton = ({ children }: PropsWithChildren) => {
  return <button className={styles.button}>{children}</button>;
};

export default MarketplaceButton;
