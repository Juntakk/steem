import { NavLink } from "react-router-dom";
import styles from "./styles/Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Welcome to Steem</h1>
          <p>Where play meets passion.</p>
          <NavLink to={"/games"}>
            <button className={styles.storeButton}>Go to Store</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
