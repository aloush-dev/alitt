import styles from "../../styles/sidemenubutton.module.css";

export const SideMenuButton = ({ sideMenu }) => {
  let topline = styles.toplinestraight;
  let midline = styles.midlinestraight;
  let botline = styles.botlinestraight;

  if (sideMenu) {
    topline = styles.toplinerotated;
    midline = styles.midlinerotated;
    botline = styles.botlinerotated;
  }

  return (
    <>
      <div className={topline} />
      <div className={midline} />
      <div className={botline} />
    </>
  );
};
