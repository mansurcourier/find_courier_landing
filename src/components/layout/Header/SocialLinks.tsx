import styles from "./styles.module.scss";
import { Icon, Text } from "components/ui";

const SocialLinks = () => (
  <ul className={styles['social-links']}>
    <li className={styles['social-links__item']}>
      <a href="https://t.me/findcourier" target="_blank">
        <Icon name='telegram' size='sm' />
        <Text size='md'>Telegram</Text>
      </a>
    </li>
  </ul>
);

export default SocialLinks;
