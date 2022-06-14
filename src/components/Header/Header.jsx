import styles from "../../styles/header.module.css";
import { SideMenu } from "./SideMenu";
import { SideMenuButton } from "./SideMenuButton";
import { TopicNav } from "./TopicNav";

export const Header = ({ sideMenu, setSideMenu }) => {
  return (
    <header>
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
