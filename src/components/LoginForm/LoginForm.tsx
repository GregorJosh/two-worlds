"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./LoginForm.module.scss";

interface FormElements extends HTMLFormControlsCollection {
  username: HTMLInputElement;
  password: HTMLInputElement;
}

interface Props {
  onSubmit?: () => void;
}

export const LoginForm = (props: Props) => {
  const [error, setError] = useState<string | boolean>(false);
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
      setError(data.message);
      setTimeout(() => setError(false), 5000);

      return;
    }

    router.back();
    router.refresh();

    if (props.onSubmit) {
      props.onSubmit();
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {error && <p>{error}</p>}
      <label className={styles.field}>
        Username:
        <input
          className={styles.input}
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="username"
        />
      </label>
      <label className={styles.field}>
        Password:
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="new-password"
        />
      </label>
      <button className={styles.button}>Lets go!</button>
    </form>
  );
};
