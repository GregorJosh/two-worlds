"use client";

import { FormHTMLAttributes, PropsWithChildren, ReactElement } from "react";
import { useFormStatus } from "react-dom";

import { FormField, Button, Loader, MessageBox } from "..";
import { useFormState } from "@/hooks";

import styles from "./Form.module.scss";

const Submit = (props: PropsWithChildren<PropsWithClassName>) => {
  const { pending } = useFormStatus();

  return (
    <Button
      className={props.className}
      type="submit"
      disabled={pending}
      aria-disabled={pending}
    >
      {props.children || "Submit"}
    </Button>
  );
};

type FormField = typeof FormField | HTMLInputElement;

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  action: ActionHandler;
  children?: ReactElement<FormField>[] | ReactElement<FormField>;
  className?: string;
  buttonClassName?: string;
  buttonLabel?: string | ReactElement;
}

export const Form = (props: FormProps) => {
  const { action, children, buttonClassName, buttonLabel, ...restProps } =
    props;
  const [status, message, isLoading, formAction] = useFormState(action);

  return (
    <>
      {isLoading ? (
        <Loader inner />
      ) : (
        <form
          {...restProps}
          className={`${styles.form} ${props.className}`}
          action={formAction}
        >
          {status === "error" && <MessageBox message={message} />}
          {children}
          <Submit className={buttonClassName}>{buttonLabel}</Submit>
        </form>
      )}
    </>
  );
};
