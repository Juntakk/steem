import { useNavigate } from "react-router-dom";
import styles from "./styles/NotFound.module.scss";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.notFoundPage}>
      <h2 className={styles.notFoundText}>Page Not Found</h2>
      <img className={styles.notFoundImage} src="../images/404.png" alt="" />
      <button
        className={styles.backToStoreButton}
        onClick={() => navigate("/games")}
      >
        Back to Store
      </button>
    </div>
  );
};
