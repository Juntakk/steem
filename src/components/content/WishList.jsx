import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCircleXmark } from "react-icons/fa6";
import "./styles/wishlist.css";

export const WishList = ({ wishList, removeFromWishList, total }) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1 className="title">Your Wishlist</h1>
      <div className="itemsContainer">
        {wishList.length > 0 ? (
          wishList.map((game) => (
            <div className="gameItem" key={game._id}>
              <NavLink to={`/games/${game._id}`} className="imageLink">
                <img src={game.image} alt={game.name} className="gameImage" />
              </NavLink>
              <div className="gameDetails">
                <span className="gameName">{game.name}</span>
                <span className="gamePrice">{game.price}</span>
              </div>
              <FaCircleXmark
                size={24}
                className="deleteBtn"
                onClick={() => removeFromWishList(game._id)}
              />
            </div>
          ))
        ) : (
          <div className="noGamesMessage">Your Wishlist is empty!</div>
        )}
      </div>
      {wishList.length > 0 && (
        <>
          <span className="total">Total: {total} $</span>
          <button
            className="paymentButton"
            onClick={() => navigate("/payment")}
          >
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
};
