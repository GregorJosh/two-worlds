import { ReactNode } from "react";

import { Container, Footer, Header, SolarSystem } from "@/components";
import { rubik } from "@/fonts";

import "@/styles/global.scss";
import styles from "./layout.module.scss";

interface Props {
  children: ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body className={`${rubik.variable}`}>
        <Header />
        <Container className={styles.container}>
          <SolarSystem />
          {props.children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
