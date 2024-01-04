import { ReactNode } from "react";

import "./global.scss";
import styles from "./layout.module.scss";

import { Container, Header, Hero } from "@/components";

interface Props {
  children: ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Hero />
        <Container className={styles.container}>{props.children}</Container>
      </body>
    </html>
  );
}
