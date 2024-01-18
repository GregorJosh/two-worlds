import { ReactNode } from "react";

import { rubik } from "@/fonts";

import "@/styles/global.scss";

interface Props {
  children: ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body className={`${rubik.variable}`}>{props.children}</body>
    </html>
  );
}
