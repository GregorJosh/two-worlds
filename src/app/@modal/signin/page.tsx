"use client";

import { useRouter } from "next/navigation";

import { signIn } from "@/actions";
import { Backdrop, Window, Form, FormField } from "@/components";

import styles from "./page.module.scss";

export default function SigninModal() {
  const router = useRouter();

  const onClose = () => {
    router.back();
  };

  const onSignIn: ActionHandler = async (formData) => {
    const result = await signIn(formData);

    if (result.status === "success") {
      router.back();
      router.back();
      router.refresh();

      return;
    }

    return result;
  };

  return (
    <Backdrop>
      <Window title="Login" onClose={onClose}>
        <Form
          className={styles.form}
          buttonClassName={styles["submit-btn"]}
          action={onSignIn}
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
    </Backdrop>
  );
}
