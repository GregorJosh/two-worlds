"use client";

import { usePathname, useRouter } from "next/navigation";

import { Backdrop, Menu, Footer } from "@/components";

import styles from "./page.module.scss";

export default function MenuModal() {
  const router = useRouter();
  const pathname = usePathname();

  const onClose = () => {
    router.back();
  };

  if (pathname !== "/menu") {
    return null;
  }

  return (
    <Backdrop containerClassName={styles.container}>
      <Menu navClassName={styles.nav} ulClassName={styles.ul} />
      <button className={styles.button} onClick={onClose} type="button">
        &#9587;
      </button>
      <Footer />
    </Backdrop>
  );
}
