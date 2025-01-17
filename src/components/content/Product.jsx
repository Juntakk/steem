import { NavLink } from "react-router-dom";
import styles from "./styles/Product.module.scss";

export const Product = ({
  image,
  name,
  price,
  _id,
  category,
  addToWishList,
  game,
  wishList,
}) => {
  const isGameWishListed = () => {
    return wishList.some((item) => item._id === game._id);
  };

  return (
    <div className={styles.productCard}>
      <NavLink to={`/games/${_id}`} className={styles.link}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={image} alt={name} />
        </div>
      </NavLink>
      <div className={styles.textContainer}>
        <h2 className={styles.name}>{name}</h2>
        <h3 className={styles.category}>{category}</h3>
        <div className={styles.price}>
          <span>${price}</span>
        </div>
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
  );
};
