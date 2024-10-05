"use client";

import { Circles } from "react-loader-spinner";

import styles from "./Loader.module.scss";

interface Props {
  inner?: boolean;
  message?: string;
}

export const Loader = (props: Props) => {
  const { inner = false, message = "Loading..." } = props;
  const className: string = inner
    ? styles["inner-container"]
    : styles["outer-container"];

  return (
    <div className={className}>
      <Circles wrapperClass={styles.loader} />
      <p>{message}</p>
    </div>
  );
};
