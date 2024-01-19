import { ReactElement } from "react";

import styles from "./FormField.module.scss";

interface Props {
  label: string;
  children: ReactElement<FormInputElement>;
}

export const FormField = (props: Props) => {
  return (
    <label className={styles["form-field"]}>
      {props.label}
      {props.children}
    </label>
  );
};
