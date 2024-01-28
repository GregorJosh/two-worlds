import { Container, MenuItem } from "..";

interface Props {
  navClassName: string;
  ulClassName: string;
  containerClassName?: string;
}

export const Menu = (props: Props) => {
  return (
    <nav className={props.navClassName}>
      <Container className={props.containerClassName}>
        <ul className={props.ulClassName}>
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/dev">Dev World</MenuItem>
          <MenuItem href="/music">Music World</MenuItem>
        </ul>
      </Container>
    </nav>
  );
};
