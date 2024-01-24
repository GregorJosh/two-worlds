import { ReactElement } from "react";

import styles from "./Window.module.scss";

interface Props extends ModalProps {
  title: string;
  children?: ReactElement;
}

export const Window = (props: Props) => {
  return (
    <div className={styles.window}>
      <header className={styles.header}>
        <h3 className={styles.heading}>{props.title}</h3>
        <button className={styles.button} onClick={props.onClose}>
          &#9587;
        </button>
      </header>
      {props.children}
    </div>
  );
};
