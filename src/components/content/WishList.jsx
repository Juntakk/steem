import React from "react";
import { FaSadCry } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaCircleXmark } from "react-icons/fa6";
import styles from "./styles/WishList.module.scss";

export const WishList = ({ wishList, removeFromWishList }) => {
  return (
    <>
      <div>
        <h1 className={styles.title}>WishList</h1>
      </div>
      <div className={styles.container}>
        {wishList.length > 0 ? (
          wishList.map((game) => (
            <>
              <div className={styles.gamesContainer}>
                <div className={styles.gameContainer}>
                  <NavLink to={`/games/${game._id}`}>
                    <img className={styles.image} src={game.image} alt="" />
                  </NavLink>
                  <span className={styles.name}> {game.name}</span>
                  <span className={styles.price}>{game.price}</span>
                  <FaCircleXmark
                    size={30}
                    className={styles.deleteBtn}
                    onClick={() => removeFromWishList(game._id)}
                  />
                </div>
              </div>
            </>
          ))
        ) : (
          <div className={styles.noGamesMessage}>
            No games in WishList <FaSadCry size={50} />
          </div>
        )}

        {wishList.length > 0 && (
          <button className={styles.paymentButton}>Proceed to payment</button>
        )}
      </div>
    </>
  );
};
