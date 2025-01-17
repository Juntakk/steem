import { Product } from "./Product.jsx";
import { useState } from "react";
import { CategoryDropdown } from "../static/CategoryDropdown.jsx";
import styles from "./styles/Content.module.scss";
import { RingLoader } from "react-spinners";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/authContext.js";

export const Content = ({
  games,
  setGames,
  addToWishList,
  isLoading,
  isWishListed,
  wishList,
  setIsWishListed,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");
  const { isLoggedIn } = useAuth();

  const handleSelectedCat = (selectedCat) => {
    setSelectedCat(selectedCat);
  };
  const handleValue = (e) => {
    setInputValue(e.target.value.toLowerCase().trim());
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
      <div className={styles.flexContainer}>
        <div className={styles.subContainer}>
          <CategoryDropdown onCategoryChange={handleSelectedCat} />
          <input
            onChange={handleValue}
            type="text"
            placeholder="Search"
            className={styles.inputField}
          />
        </div>
        <div>
          {!isLoggedIn ? (
            <p className={styles.message}>
              <NavLink to={"/login"}>
                <span className={styles.login}>Login</span>
              </NavLink>
              <span> to unlock your wishlist !</span>
            </p>
          ) : (
            ""
          )}
          <div className={styles.productContainer}>
            {filteredGames.length > 0 ? (
              filteredGames.map((item) => (
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
              ))
            ) : isLoading ? (
              <div className={styles.loadingText}>
                <p>Loading...</p>
                <p>This will take about 30 seconds</p>
                <RingLoader color="rgb(214, 164, 99)" size={100} />
              </div>
            ) : (
              <div className={styles.nogames}>
                <p>No results found.</p>
                {isLoggedIn ? (
                  <p>
                    Add your own game
                    <NavLink to={"/add-game"}>
                      <span className={styles.linkToAdd}> here</span>
                    </NavLink>
                  </p>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
