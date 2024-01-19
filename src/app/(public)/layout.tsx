import { ReactNode } from "react";

import { isAuthenticated } from "@/libs";
import { Container, Footer, Header, SolarSystem } from "@/components";

import styles from "./layout.module.scss";

interface Props {
  children: ReactNode;
  auth: ReactNode;
}

export default function PublicLayout(props: Props) {
  return (
    <>
      <Header />
      <Container className={styles.container}>
        <SolarSystem />
        {props.children}
        {props.auth}
      </Container>
      <Footer />
    </>
  );
}
