import { FormEvent } from "react";
import { useRouter } from "next/navigation";

import { Container, Form, FormField, Window } from "..";

import styles from "./LoginModal.module.scss";

interface Props {
  onClose: () => void;
}

interface FormElements extends HTMLFormControlsCollection {
  username: HTMLInputElement;
  password: HTMLInputElement;
}

export const LoginModal = (props: Props) => {
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const formElement = event.target as HTMLFormElement;
    const { username, password } = formElement.elements as FormElements;

    const result = await fetch("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    });

    const data: ResponseBody = await result.json();

    if (data.status === "error") {
      return data.message;
    }

    router.back();
    router.refresh();
  };

  return (
    <div className={styles.backdrop}>
      <Container className={styles.container}>
        <Window title="Log in to Admin Panel" onClose={props.onClose}>
          <Form onSubmit={onSubmit} buttonClassName={styles["submit-btn"]}>
            <FormField label="Username:">
              <input
                className={styles.input}
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="username"
              />
            </FormField>
            <FormField label="Password:">
              <input
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
