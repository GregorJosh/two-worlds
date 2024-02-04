"use client";

import { useContext } from "react";
import { usePathname, useRouter } from "next/navigation";

import { signOut } from "@/actions";
import { Backdrop, Menu, Footer, IsAuthContext, MenuItem } from "@/components";

import styles from "./page.module.scss";

export default function MenuModal() {
  const isAuth = useContext(IsAuthContext);
  const router = useRouter();
  const pathname = usePathname();

  const onClose = () => {
    router.back();
  };

  const onSignOut = () => {
    signOut();
    router.back();
    router.refresh();
  };

  if (pathname !== "/menu") {
    return null;
  }

  return (
    <Backdrop containerClassName={styles.container}>
      <Menu navClassName={styles.nav} ulClassName={styles.ul}>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/dev">Dev World</MenuItem>
        <MenuItem href="/music">Music World</MenuItem>
        {isAuth && (
          <MenuItem href="/" onClick={onSignOut}>
            Sign out
          </MenuItem>
        )}
      </Menu>
      <button className={styles.button} onClick={onClose} type="button">
        &#9587;
      </button>
      <Footer />
    </Backdrop>
  );
}
