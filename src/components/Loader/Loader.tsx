import styles from "./Loader.module.scss";

interface Props {
  message?: string;
}

export const Loader = (props: Props) => {
  const { message = "Loading..." } = props;

  return (
    <div className={styles.container}>
      <p>{message}</p>
    </div>
  );
};
