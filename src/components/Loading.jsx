import styles from "../styles/loading.module.css";

export const Loading = () => {
  return (
      <div className={styles.loadingbody}>
    <div className={styles.progress}>
      <div className={styles.colour}></div>
    </div>
    </div>
  );
};
