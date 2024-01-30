"use client";

import { usePathname, useRouter } from "next/navigation";

import { signIn } from "@/actions";
import { Backdrop, Window, Form, FormField } from "@/components";

import styles from "./page.module.scss";

export default function SigninModal() {
  const router = useRouter();
  const pathname = usePathname();

  const onClose = () => {
    router.back();
  };

  const onSuccess = () => {
    router.push("/");
  };

  if (pathname !== "/signin") {
    return null;
  }

  return (
    <Backdrop>
      <Window title="Log in to Admin Panel" onClose={onClose}>
        <Form
          buttonClassName={styles["submit-btn"]}
          action={signIn}
          onSuccess={onSuccess}
        >
          <FormField label="Username:">
            <input
              id="username"
              className={styles.input}
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="username"
            />
          </FormField>
          <FormField label="Password:">
            <input
              id="password"
              className={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="new-password"
            />
          </FormField>
        </Form>
      </Window>
    </Backdrop>
  );
}
