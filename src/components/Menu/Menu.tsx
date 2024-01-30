import { HTMLAttributes } from "react";
import { Container, MenuItem } from "..";

interface Props extends HTMLAttributes<HTMLElement> {
  navClassName?: string;
  ulClassName?: string;
  containerClassName?: string;
}

export const Menu = (props: Props) => {
  const {
    navClassName = "",
    ulClassName = "",
    containerClassName = "",
    ...restProps
  } = props;

  return (
    <nav {...restProps} className={navClassName}>
      <Container className={containerClassName}>
        <ul className={ulClassName}>
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/dev">Dev World</MenuItem>
          <MenuItem href="/music">Music World</MenuItem>
        </ul>
      </Container>
    </nav>
  );
};
