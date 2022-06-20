import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../contexts/user";
import styles from "../styles/desksidemenu.module.css";

export const DeskSideMenu = () => {
  const { user } = useContext(userContext);


  return (
    <div className={styles.menumain}>
      {user.username ? (
        <div className={styles.userprofile}>
          <div className={styles.userwelcome}>
            <h3>Hello, {user.name}</h3>
          </div>
          <div>
            <img className={styles.avatar} alt="avatar" src={user.avatar_url} />
          </div>
        </div>
      ) : (
        <div className={styles.loginlinks}>
          <Link to="/">Login</Link>
          <Link to="create-user">Sign Up</Link>
        </div>
      )}
    </div>
  );
};
