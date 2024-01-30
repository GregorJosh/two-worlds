"use client";

import { FormHTMLAttributes, ReactElement, useState } from "react";
import { useFormStatus } from "react-dom";

import { FormField, Button } from "..";

import styles from "./Form.module.scss";

type FormField = typeof FormField;

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactElement<FormField>[] | ReactElement<FormField>;
  action: ActionHandler;
  onSuccess?: Fun;
  onFailed?: Fun;
  className?: string;
  buttonClassName?: string;
}

const useFormState = (
  action: ActionHandler,
  onSuccess?: Fun,
  onFailed?: Fun
) => {
  const [status, setStatus] = useState<ActionResultStatus>("unknown");
  const [message, setMessage] = useState<string | false>(false);

  const clearState = () => {
    setStatus("unknown");
    setMessage(false);
  };

  const formAction = async (formData: FormData) => {
    const result = await action(formData);

    setStatus(result.status);
    setMessage(result.message);
    setTimeout(clearState, 5000);

    if (result.status === "success" && onSuccess) {
      onSuccess();
    }

    if (result.status === "error" && onFailed) {
      onFailed();
    }
  };

  return [status, message, formAction] as const;
};

const Submit = ({ className }: PropsWithClassName) => {
  const { pending } = useFormStatus();

  return (
    <Button className={className} type="submit" disabled={pending}>
      Submit
    </Button>
  );
};

export const Form = (props: FormProps) => {
  const {
    action,
    onSuccess,
    onFailed,
    children,
    buttonClassName,
    ...restProps
  } = props;

  const [status, message, formAction] = useFormState(
    action,
    onSuccess,
    onFailed
  );

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
