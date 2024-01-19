import { FormHTMLAttributes, ReactElement } from "react";

import { FormField } from "..";

import styles from "./Form.module.scss";

type FormField = typeof FormField;

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactElement<FormField>[] | ReactElement<FormField>;
  className?: string;
}

export const Form = (props: Props) => {
  return (
    <form className={`${styles.form} ${props.className}`}>
      {props.children}
    </form>
  );
};
