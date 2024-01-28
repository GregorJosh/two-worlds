import { Backdrop, Footer, Menu } from "..";

import styles from "./MenuModal.module.scss";

export const MenuModal = (props: ModalProps) => {
  return (
    <Backdrop containerClassName={styles.container}>
      <Menu navClassName={styles.nav} ulClassName={styles.ul} />
      <button className={styles.button} onClick={props.onClose} type="button">
        &#9587;
      </button>
      <Footer />
    </Backdrop>
  );
};
