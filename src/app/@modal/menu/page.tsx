"use client";

import { usePathname, useRouter } from "next/navigation";

import { useAuth } from "@/context";
import { signOut } from "@/actions";
import { Backdrop, Menu, Footer, MenuItem } from "@/components";

import styles from "./page.module.scss";
import { EventHandler, MouseEventHandler } from "react";

export default function MenuModal(): React.JSX.Element | null {
  const router = useRouter();
  const isAuth: boolean = useAuth();
  const pathname: string = usePathname();

  const close: Fun = () => {
    router.back();
  };

  const onSignOut: MouseEventHandler = (event) => {
    event.preventDefault();
    signOut();
    router.push("/", { scroll: false });
  };

  if (pathname !== "/menu") {
    return null;
  }

  console.log("Rendering modal menu page...");

  return (
    <Backdrop containerClassName={styles.container}>
      <Menu navClassName={styles.nav} ulClassName={styles.ul}>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/dev">Dev World</MenuItem>
        <MenuItem href="/music">Music World</MenuItem>
        {isAuth && (
          <MenuItem href="#" onClick={onSignOut}>
            Sign out
          </MenuItem>
        )}
      </Menu>
      <button className={styles.button} onClick={close} type="button">
        &#9587;
      </button>
      <Footer />
    </Backdrop>
  );
}
