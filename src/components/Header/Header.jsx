import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../contexts/user";
import styles from "../../styles/header.module.css";
import { SideMenu } from "./SideMenu";
import { SideMenuButton } from "./SideMenuButton";

export const Header = ({ sideMenu, setSideMenu }) => {
  const { user } = useContext(userContext);

  return (
    <header>
      <div className={styles.logoarea}>
        <Link to="/articles">
          <h1>Alitt</h1>
        </Link>
      </div>
      <div className={styles.sidemenuarea}>

        <SideMenu
          className={styles.sidemenu}
          setSideMenu={setSideMenu}
          sideMenu={sideMenu}
        />

        <button
          onClick={(event) => {
            setSideMenu(!sideMenu);
          }}
        >
          <SideMenuButton sideMenu={sideMenu} setSideMenu={setSideMenu} />
        </button>
      </div>
    </header>
  );
};
