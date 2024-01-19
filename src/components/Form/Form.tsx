"use client";

import { FormEvent, FormHTMLAttributes, ReactElement, useState } from "react";
import { useFormStatus } from "react-dom";

import { FormField } from "..";

import styles from "./Form.module.scss";

type FormField = typeof FormField;

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactElement<FormField>[] | ReactElement<FormField>;
  onSubmit?: OnSubmitHandler;
  error?: string;
  className?: string;
  buttonClassName?: string;
}

export const Form = (props: Props) => {
  const [error, setError] = useState<string | boolean>(false);
  const { pending } = useFormStatus();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (props.onSubmit) {
      const error = await props.onSubmit(event);

      if (error) {
        setError(error);
        setTimeout(() => setError(false), 5000);
      }
    }
  };

  return (
    <form
      className={`${styles.form} ${props.className}`}
      onSubmit={onSubmit}
      action={props.action}
    >
      {error && <p>{error}</p>}
      {props.children}
      <button
        className={`${props.buttonClassName} ${styles.button}`}
        aria-disabled={pending}
      >
        Submit
      </button>
    </form>
  );
};
