import { NavLink, useNavigate } from "react-router-dom";
import "./styles/product.css";
import { useMemo } from "react";
import React from "react";

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
  const isGameWishListed = useMemo(() => {
    return wishList.some((item) => item._id === game._id);
  }, [wishList, game._id]);

  const navigate = useNavigate();

  return (
    <div className="productCard">
      <NavLink to={`/games/${_id}`} className="link">
        <div className="imageContainer">
          <img className="image" src={image} alt={name} />
        </div>
      </NavLink>
      <div className="textContainer">
        <h2 className="name">{name}</h2>
        <h3 className="category">{category}</h3>
        <div className="price">
          <span>${price}</span>
        </div>
        <button
          className={`addToWishListButton ${
            isGameWishListed ? "inWishlist" : ""
          }`}
          onClick={() =>
            !isGameWishListed ? addToWishList(game) : navigate("/wishlist")
          }
        >
          {isGameWishListed ? "Already in Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
};
