import styles from "../../styles/header.module.css";
import { SideMenu } from "./SideMenu";
import { SideMenuButton } from "./SideMenuButton";

export const Header = ({ sideMenu, setSideMenu }) => {
  return (
    <header>
      <img src='../../Alitt.png' alt="logo" ></img>
      <h1>Alitt</h1>

      <div className={styles.sidemenu}>
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
