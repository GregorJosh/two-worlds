import { Container, LoginForm, Window } from "..";

import styles from "./LoginModal.module.scss";

interface Props {
  onClose: () => void;
}

export const LoginModal = (props: Props) => {
  return (
    <div className={styles.backdrop}>
      <Container className={styles.container}>
        <Window title="Log in to Admin Panel" onClose={props.onClose}>
          <LoginForm />
        </Window>
      </Container>
    </div>
  );
};
