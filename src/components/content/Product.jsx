import { NavLink } from "react-router-dom";
// import { FaCircleXmark } from "react-icons/fa6";
// import { BsVectorPen } from "react-icons/bs";
// import { deleteGameById } from "../../apis/games";

import { useAuth } from "../../contexts/authContext";
import styles from "./styles/Product.module.scss";
import { useEffect } from "react";

export const Product = ({
  image,
  name,
  price,
  _id,
  category,
  games,
  setGames,
  addToWishList,
  game,
  isWishListed,
  setIsWishListed,
  wishList,
}) => {
  const { isLoggedIn } = useAuth();

  useEffect(() => {});
  // const handleDelete = async (gameId, e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   try {
  //     const response = await deleteGameById(gameId);
  //     if (response === gameId) {
  //       return setGames(games.filter((game) => game._id !== gameId));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const isGameWishListed = () => {
    return wishList.some((item) => item._id === game._id);
  };

  return (
    <div className={styles.flexContainer}>
      <NavLink to={`/games/${_id}`} className={styles.link}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} alt="" />
        </div>
      </NavLink>{" "}
      {isLoggedIn && (
        <>
          {/* <NavLink to={`update-game/${_id}`}>
            <BsVectorPen
              size={30}
              style={{ cursor: "pointer" }}
              className={styles.updateBtn}
            />
          </NavLink>
          <FaCircleXmark
            onClick={(e) => handleDelete(_id, e)}
            size={30}
            style={{ cursor: "pointer" }}
            className={styles.deleteBtn}
          /> */}
        </>
      )}
      <div className={styles.textContainer}>
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.category}>{category}</h3>
        <div className={styles.price}>
          <span>{price}</span>
        </div>
        <button
          className={styles.addToWishListButton}
          onClick={() => addToWishList(game)}
          style={isGameWishListed() ? { color: "green" } : null}
        >
          {isGameWishListed() ? "Already in Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
};
