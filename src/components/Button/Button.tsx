import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

import styles from "./Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  redirectTo?: string;
  type?: "button" | "submit";
}

export const Button = (props: Props): React.JSX.Element => {
  const {
    children,
    className,
    type = "button",
    redirectTo,
    ...restProps
  } = props;

  const newClassName = `${styles.button} ${className}`;

  if (redirectTo) {
    return (
      <Link
        href={redirectTo}
        scroll={false}
        prefetch={false}
        className={newClassName}
      >
        {children}
      </Link>
    );
  }

  return (
    <button {...restProps} className={newClassName} type={type}>
      {children}
    </button>
  );
};
