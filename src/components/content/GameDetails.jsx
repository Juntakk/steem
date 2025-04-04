import { useNavigate, useParams } from "react-router-dom";
import "./styles/gameDetails.css";
import React from "react";

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
      <div className="gameDetailsContainer">
        <button
          className="backButton"
          onClick={() => navigate("/games")}
          aria-label="Back to game store"
        >
          Back to Store
        </button>
        <div className="gameDetailsDetails">
          <div className="gameImageContainer">
            <img
              className="gameImage"
              src={game.image}
              alt={game.name}
              loading="lazy"
            />
          </div>
          <div className="gameInfo">
            <h2 className="gameName">{game.name}</h2>
            <p className="gameDescription">{game.description}</p>
            <p className="gamePrice">{game.price}</p>
            <button
              className={`addToWishListButton ${
                isGameWishListed() ? "inWishlist" : ""
              }`}
              onClick={() =>
                !isGameWishListed()
                  ? addToWishList(game)
                  : navigate("/wishlist")
              }
            >
              {isGameWishListed() ? "Already in Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
