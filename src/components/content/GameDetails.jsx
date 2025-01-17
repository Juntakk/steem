import { useNavigate, useParams } from "react-router-dom";
import styles from "./styles/GameDetails.module.scss";

export const GameDetails = ({ addToWishList, games, wishList }) => {
  const params = useParams();
  const navigate = useNavigate();

  const gameId = params.id;
  const game = games.find((item) => item._id === gameId);

  const isGameWishListed = () => {
    return wishList.some((item) => item._id === game._id);
  };

  return (
    <>
      {!game ? (
        <div className={styles.loadingContainer}>
          <h2 className={styles.loadingText}>
            Sorry, we're currently resolving deployment issues.
          </h2>
        </div>
      ) : (
        <div className={styles.gameDetailsContainer}>
          <button
            className={styles.backButton}
            onClick={() => navigate("/games")}
          >
            Back to Store
          </button>
          <div className={styles.gameDetails}>
            <div className={styles.gameImageContainer}>
              <img
                className={styles.gameImage}
                src={game.image}
                alt={game.name}
              />
            </div>
            <div className={styles.gameInfo}>
              <h2 className={styles.gameName}>{game.name}</h2>
              <p className={styles.gameDescription}>{game.description}</p>
              <p className={styles.gamePrice}>{game.price}</p>
              <button
                className={`${styles.addToWishListButton} ${
                  isGameWishListed() ? styles.inWishlist : ""
                }`}
                onClick={() => addToWishList(game)}
              >
                {isGameWishListed() ? "Already in Wishlist" : "Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
