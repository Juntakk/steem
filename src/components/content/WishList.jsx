import React from "react";
import { NavLink } from "react-router-dom";
import { FaCircleXmark } from "react-icons/fa6";
import styles from "./styles/WishList.module.scss";

export const WishList = ({ wishList, removeFromWishList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Wishlist</h1>
      <div className={styles.itemsContainer}>
        {wishList.length > 0 ? (
          wishList.map((game) => (
            <div className={styles.gameItem} key={game._id}>
              <NavLink to={`/games/${game._id}`} className={styles.imageLink}>
                <img
                  src={game.image}
                  alt={game.name}
                  className={styles.gameImage}
                />
              </NavLink>
              <div className={styles.gameDetails}>
                <span className={styles.gameName}>{game.name}</span>
                <span className={styles.gamePrice}>{game.price}</span>
              </div>
              <FaCircleXmark
                size={24}
                className={styles.deleteBtn}
                onClick={() => removeFromWishList(game._id)}
              />
            </div>
          ))
        ) : (
          <div className={styles.noGamesMessage}>Your Wishlist is empty!</div>
        )}
      </div>
      {wishList.length > 0 && (
        <button className={styles.paymentButton}>Proceed to Payment</button>
      )}
    </div>
  );
};
