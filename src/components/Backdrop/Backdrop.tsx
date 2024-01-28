import { HTMLAttributes, ReactElement } from "react";

import { Container } from "..";

import styles from "./Backdrop.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement | ReactElement[];
  containerClassName?: string;
}

export const Backdrop = (props: Props) => {
  const { children, ...restProps } = props;

  return (
    <div {...restProps} className={`${styles.backdrop} ${props.className}`}>
      <Container className={`${styles.container} ${props.containerClassName}`}>
        {children}
      </Container>
    </div>
  );
};
