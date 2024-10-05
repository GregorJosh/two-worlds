import styles from "./Repository.module.scss";

export const Repository = ({ repo }: { repo: GitHubRepo }) => {
  return (
    <>
      <div className={styles.repo}>
        <h3>{repo.name}</h3>
        <p className={styles.link}>
          <a href={repo.html_url}>{repo.full_name}</a>
        </p>
      </div>
    </>
  );
};
