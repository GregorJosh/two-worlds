import { ReactNode } from "react";

import { isAuth } from "@/libs";
import {
  Container,
  Footer,
  Header,
  MenuButton,
  SolarSystem,
  Providers,
} from "@/components";
import { rubik } from "@/fonts";

import "@/styles/global.scss";

import styles from "./layout.module.scss";

interface Props {
  children: ReactNode;
  modal: ReactNode;
}

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Two Worlds",
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body className={rubik.variable}>
        <Header className={styles.header} />
        <Container className={styles.container}>
          <SolarSystem />
          {props.children}
        </Container>
        <Footer className={styles.footer} />
        <MenuButton />
        <Providers isAuth={isAuth()}>{props.modal}</Providers>
      </body>
    </html>
  );
}
