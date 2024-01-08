import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
  return (
    <form className={styles.form}>
      <label className={styles.field}>
        Password:
        <input
          className={styles.input}
          type="password"
          name="password"
          placeholder="Password"
        />
      </label>
      <button className={styles.button}>Lets go!</button>
    </form>
  );
};
