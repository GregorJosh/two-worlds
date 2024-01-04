"use client";

import { useState } from "react";

import { Container, LoginModal } from "..";

import styles from "./Footer.module.scss";

export const Footer = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <footer className={styles.footer}>
      <Container>
        <p>
          © 2024{" "}
          <a href="#" onClick={() => setIsModalVisible(true)}>
            Grzegorz Jóźwiak
          </a>
        </p>
      </Container>
      {isModalVisible && (
        <LoginModal onClose={() => setIsModalVisible(!isModalVisible)} />
      )}
    </footer>
  );
};
