import { HTMLAttributes } from "react";

import { Container } from "..";

interface Props extends HTMLAttributes<HTMLElement> {
  navClassName?: string;
  ulClassName?: string;
  containerClassName?: string;
}

export const Menu = (props: Props) => {
  const {
    navClassName,
    ulClassName,
    containerClassName,
    children,
    ...restProps
  } = props;

  return (
    <nav {...restProps} className={navClassName}>
      <Container className={containerClassName}>
        <ul className={ulClassName}>{children}</ul>
      </Container>
    </nav>
  );
};
