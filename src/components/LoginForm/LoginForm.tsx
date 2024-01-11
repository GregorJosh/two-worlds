"use client";

import { FormEvent } from "react";

import styles from "./LoginForm.module.scss";

interface FormElements extends HTMLFormControlsCollection {
  username: HTMLInputElement;
  password: HTMLInputElement;
}

export const LoginForm = () => {
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

    const data = await result.json();

    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
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
