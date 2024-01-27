import { InputHTMLAttributes, ReactElement } from "react";

import styles from "./FormField.module.scss";

interface Props {
  label: string;
  children: ReactElement<FormInputElement>;
}

export const FormField = (props: Props) => {
  const { children } = props;

  return (
    <label className={styles["form-field"]} htmlFor={children.props.id}>
      {props.label}
      {children}
    </label>
  );
};
