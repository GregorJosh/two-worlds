import { ReactNode } from "react";

import styles from "./Container.module.scss";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container = (props: Props) => {
  return (
    <div className={`${styles.container} ${props.className}`}>
      {props.children}
    </div>
  );
};
