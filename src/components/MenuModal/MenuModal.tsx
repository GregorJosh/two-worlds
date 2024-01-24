import { Backdrop, Menu } from "..";

import styles from "./MenuModal.module.scss";

export const MenuModal = (props: ModalProps) => {
  return (
    <Backdrop>
      <button className={styles.button} onClick={props.onClose} type="button">
        &#9587;
      </button>
      <Menu customStyles={styles} />
    </Backdrop>
  );
};
