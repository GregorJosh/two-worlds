import { HTMLAttributes, ReactElement } from "react";

import { Container } from "..";

import styles from "./Backdrop.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement | ReactElement[];
}

export const Backdrop = (props: Props) => {
  const { children, ...restProps } = props;

  return (
    <div {...restProps} className={styles.backdrop}>
      <Container className={styles.container}>{children}</Container>
    </div>
  );
};
