import { Container } from "..";
import styles from "./LoginModal.module.scss";

interface Props {
  onClose: () => void;
}

export const LoginModal = (props: Props) => {
  return (
    <div className={styles.backdrop}>
      <Container className={styles.container}>
        <div className={styles.window}>
          <button className={styles.button} onClick={props.onClose}>
            &#9587;
          </button>
        </div>
      </Container>
    </div>
  );
};
