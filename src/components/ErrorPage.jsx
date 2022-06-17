import { Link } from "react-router-dom";
import styles from "../styles/errorpage.module.css";

export const ErrorPage = () => {
  return (
    <div className={styles.errorpage}>
      <div className={styles.content}>
        <h2 className={styles.header} data-text="404">
          404
        </h2>
        <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
        <p>
          Sorry, the page you're looking for doesn't exist.
        </p>
        <div className={styles.btns}>
          <Link to="/articles"> Return Home</Link>
        </div>
      </div>
    </div>
  );
};
