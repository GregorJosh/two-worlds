"use client";

import { FormHTMLAttributes, ReactElement, useState } from "react";
import { useFormStatus } from "react-dom";

import { FormField, Button } from "..";

import styles from "./Form.module.scss";

const useFormState = (action: ActionHandler) => {
  const [status, setStatus] = useState<ActionResultStatus>("unknown");
  const [message, setMessage] = useState<string | false>(false);

  const clearState = () => {
    setStatus("unknown");
    setMessage(false);
  };

  const formAction = async (formData: FormData) => {
    const result = await action(formData);

    if (result) {
      setStatus(result.status);
      setMessage(result.message);
      setTimeout(clearState, 5000);
    }
  };

  return [status, message, formAction] as const;
};

const Submit = (props: PropsWithClassName) => {
  const { pending } = useFormStatus();

  return (
    <Button
      className={props.className}
      type="submit"
      disabled={pending}
      aria-disabled={pending}
    >
      Submit
    </Button>
  );
};

type FormField = typeof FormField;

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactElement<FormField>[] | ReactElement<FormField>;
  action: ActionHandler;
  className?: string;
  buttonClassName?: string;
}

export const Form = (props: FormProps) => {
  const { action, children, buttonClassName, ...restProps } = props;
  const [status, message, formAction] = useFormState(action);

  return (
    <form
      {...restProps}
      className={`${styles.form} ${props.className}`}
      action={formAction}
    >
      {status === "error" && <p>{message}</p>}
      {children}
      <Submit className={buttonClassName} />
    </form>
  );
};
