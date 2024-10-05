"use client";

import React, {
  ChangeEventHandler,
  InputHTMLAttributes,
  ReactComponentElement,
  ReactElement,
  useState,
} from "react";

import styles from "./FormField.module.scss";

export const Input = (
  props: InputHTMLAttributes<HTMLInputElement>
): React.JSX.Element => {
  const { value, onChange, ...restProps } = props;
  const [newValue, setNewValue] = useState<typeof value>(value);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNewValue(event.target.value);
  };

  return (
    <input {...restProps} value={newValue} onChange={handleChange}></input>
  );
};

interface FormFieldProps {
  label: string;
  children:
    | ReactElement<FormInputElement>
    | ReactComponentElement<typeof Input>;
}

export const FormField = (props: FormFieldProps): React.JSX.Element => {
  const { children } = props;

  return (
    <label className={styles["form-field"]} htmlFor={children.props.id}>
      {props.label}
      {children}
    </label>
  );
};
