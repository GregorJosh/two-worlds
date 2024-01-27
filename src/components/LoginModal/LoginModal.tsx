import { useRouter } from "next/navigation";

import { signIn } from "@/actions";
import { Container, Form, FormField, Window } from "..";

import styles from "./LoginModal.module.scss";

export const LoginModal = (props: ModalProps) => {
  const router = useRouter();

  const onSuccess = () => {
    router.back();
    router.refresh();
  };

  return (
    <div className={styles.backdrop}>
      <Container className={styles.container}>
        <Window title="Log in to Admin Panel" onClose={props.onClose}>
          <Form
            buttonClassName={styles["submit-btn"]}
            action={signIn}
            onSuccess={onSuccess}
          >
            <FormField label="Username:">
              <input
                id="username"
                className={styles.input}
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="username"
              />
            </FormField>
            <FormField label="Password:">
              <input
                id="password"
                className={styles.input}
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="new-password"
              />
            </FormField>
          </Form>
        </Window>
      </Container>
    </div>
  );
};
