"use client";

import { MouseEventHandler, ReactElement } from "react";
import { useRouter } from "next/navigation";

import styles from "./Window.module.scss";

interface Props extends ModalProps {
  title: string;
  children?: ReactElement;
  className?: string;
}

export const Window = (props: Props) => {
  const router = useRouter();
  const onClose: MouseEventHandler = (event) => {
    event.preventDefault();
    router.back();
    //router.refresh();

    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <div className={styles.window}>
      <header className={styles.header}>
        <h3 className={styles.heading}>{props.title}</h3>
        <button className={styles.button} onClick={onClose}>
          &#9587;
        </button>
      </header>
      <section className={props.className}>{props.children}</section>
    </div>
  );
};
