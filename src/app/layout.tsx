import { ReactNode } from "react";

import { AuthProvider, PlayerProvider } from "@/context";

import { getIsAuth } from "@/actions";

import {
  Container,
  Footer,
  Header,
  MenuButton,
  SolarSystem,
} from "@/components";

import { rubik } from "@/fonts";

import "@/styles/global.scss";

import styles from "./layout.module.scss";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Two Worlds",
};

export default function RootLayout({
  children,
  modal,
  player,
}: {
  children: ReactNode;
  modal: ReactNode;
  player: ReactNode;
}) {
  console.log("Rendering root layout...");

  return (
    <html lang="en">
      <body className={rubik.variable}>
        <AuthProvider isAuth={getIsAuth()}>
          <PlayerProvider>
            <Header className={styles.header} />
            {player}
            <Container className={styles.container}>
              <SolarSystem />
              {children}
            </Container>
            <Footer className={styles.footer} />
            <MenuButton />
            {modal}
          </PlayerProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
