import { ReactNode } from "react";

import { rubik } from "@/fonts";

import {
  Container,
  Footer,
  Header,
  MenuButton,
  SolarSystem,
} from "@/components";

import "@/styles/global.scss";
import styles from "./layout.module.scss";

interface Props {
  children: ReactNode;
  modal: ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body className={`${rubik.variable}`}>
        <Header className={styles.header} />
        <Container className={styles.container}>
          <SolarSystem />
          {props.children}
        </Container>
        <Footer className={styles.footer} />
        <MenuButton />
        {props.modal}
      </body>
    </html>
  );
}
