"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Container } from "..";

import styles from "./MenuButton.module.scss";

export const MenuButton = () => {
  const router = useRouter();
  const [isHidden, setIsHidden] = useState(true);
  const { hidden, visible } = styles;

  useEffect(() => {
    const eventType = "mousemove";
    const onScroll = () => {
      setIsHidden(false);
      setTimeout(() => setIsHidden(true), 3000);
    };

    window.addEventListener(eventType, onScroll);

    return () => {
      window.removeEventListener(eventType, onScroll);
    };
  }, []);

  return (
    <Container className={styles.container}>
      <button
        className={isHidden ? hidden : visible}
        type="button"
        onClick={() => router.push("/menu")}
      >
        MENU
      </button>
    </Container>
  );
};
