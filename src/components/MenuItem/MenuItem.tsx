"use client";

import Link, { LinkProps } from "next/link";
import { MouseEvent } from "react";

interface Props extends LinkProps {
  children: string;
}

export const MenuItem = (props: Props) => {
  const { children, ...linkProps } = props;

  const onMouseOver = (event: MouseEvent<HTMLLIElement>) => {};

  return (
    <li onMouseOver={onMouseOver}>
      <Link {...linkProps}>{children}</Link>
    </li>
  );
};
