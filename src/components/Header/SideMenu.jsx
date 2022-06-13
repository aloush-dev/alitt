import styles from "../../styles/sidemenu.module.css";

export const SideMenu = ({sideMenu}) => {
  let stateOfMenu = styles.menumain;

  if (sideMenu) {
    stateOfMenu = styles.menumainopen;
  }

  return <div className={`${stateOfMenu}`}></div>;
};
