import { useNavigate, useParams } from "react-router-dom";
import styles from "./styles/GameDetails.module.scss";

export const GameDetails = ({ addToWishList, games }) => {
  const params = useParams();
  const navigate = useNavigate();

  const gameId = params.id;
  const game = games.find((item) => item._id === gameId);

  return (
    <>
      {!game ? (
        <div className={styles.container}>
          <h2 className={styles.loadingText}>
            Sorry working on deployment issues
          </h2>
        </div>
      ) : (
        <>
          <button
            className={styles.backButton}
            onClick={() => navigate("/games")}
          >
            Back to Store
          </button>
          <div className={styles.gameDetails}>
            <img className={styles.gameImage} src={`${game.image}`} alt="" />
            <div className={styles.gameInfo}>
              <h2 className={styles.gameName}>{game.name}</h2>
              <p className={styles.gameDescription}>{game.description}</p>
            </div>
            <div className={styles.gameActions}>
              <p className={styles.gamePrice}>{game.price}</p>
              <button
                className={styles.addToWishListButton}
                onClick={() => addToWishList(game)}
              >
                Add to WishList
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
