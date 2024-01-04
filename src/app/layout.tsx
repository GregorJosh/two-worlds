import { ReactNode } from "react";
import { Rubik } from "next/font/google";

import { Container, Footer, Header, SolarSystem } from "@/components";

import "./global.scss";
import styles from "./layout.module.scss";

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
        <Footer />
      </body>
    </html>
  );
}
