import { Product } from "./Product.jsx";
import { useState } from "react";
import { CategoryDropdown } from "../static/CategoryDropdown.jsx";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/authContext.js";
import "./styles/content.css"; // Update to regular CSS
import React from "react";

export const Content = ({
  games,
  setGames,
  addToWishList,
  isWishListed,
  wishList,
  setIsWishListed,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");
  const { isLoggedIn } = useAuth();

  const handleSelectedCat = (selectedCat) => {
    setTimeout(() => {
      setSelectedCat(selectedCat);
    }, 300);
  };
  const handleValue = (e) => {
    setTimeout(() => {
      setInputValue(e.target.value.toLowerCase().trim());
    }, 300);
  };
  const filteredGames =
    selectedCat === "all"
      ? games.filter((item) => item.name.toLowerCase().includes(inputValue))
      : games.filter(
          (item) =>
            item.name.toLowerCase().includes(inputValue) &&
            item.category === selectedCat
        );

  return (
    <>
      <div className="flexContainer">
        <div className="subContainer">
          <CategoryDropdown onCategoryChange={handleSelectedCat} />
          <input
            onChange={handleValue}
            type="text"
            placeholder="Search"
            className="inputField"
          />
        </div>
        <div>
          {!isLoggedIn ? (
            <p className="message">
              <NavLink to={"/login"}>
                <span className="login">Login</span>
              </NavLink>
              <span> to unlock your wishlist !</span>
            </p>
          ) : (
            ""
          )}
          <div className="productContainer">
            {filteredGames.map((item) => (
              <Product
                key={item._id}
                name={item.name}
                image={item.image}
                _id={item._id}
                price={item.price}
                rating={item.rating}
                category={item.category}
                games={games}
                setGames={setGames}
                game={item}
                addToWishList={addToWishList}
                isWishListed={isWishListed}
                setIsWishListed={setIsWishListed}
                wishList={wishList}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
