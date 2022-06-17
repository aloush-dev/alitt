import { useContext } from "react";
import styles from "../../styles/sidemenu.module.css";
import { userContext } from "../../contexts/user";
import { Link } from "react-router-dom";

export const SideMenu = ({ sideMenu }) => {
  const { user } = useContext(userContext);

  let stateOfMenu = styles.menumain;

  if (sideMenu) {
    stateOfMenu = styles.menumainopen;
  }

  return (
    <>
      <div className={`${stateOfMenu}`}>
        {user.username ? (
          <div className={styles.userprofile}>
            <div className={styles.userwelcome}>
              <h3>Hello, {user.name}</h3>
            </div>
            <div>
              <img
                className={styles.avatar}
                alt="avatar"
                src={user.avatar_url}
              />
            </div>
          </div>
        ) : (
          <div className={styles.loginlinks}>
            <Link to="/">Login</Link>
            <Link to="create-user">Sign Up</Link>
          </div>
        )}
      </div>
    </>
  );
};
