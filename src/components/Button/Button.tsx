import { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  type?: "button" | "submit";
}

export const Button = (props: Props) => {
  const { children, className, type = "button", ...restProps } = props;

  return (
    <button
      {...restProps}
      className={`${styles.button} ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};
