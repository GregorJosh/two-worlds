import { ReactNode } from "react";
import { Rubik } from "next/font/google";

import "./global.scss";
import styles from "./layout.module.scss";

import { Container, Header, SolarSystem } from "@/components";

interface Props {
  children: ReactNode;
}

const font = Rubik({ subsets: ["latin"] });

export default function RootLayout(props: Props) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <Header />
        <Container className={styles.container}>
          <SolarSystem />
          {props.children}
        </Container>
      </body>
    </html>
  );
}
