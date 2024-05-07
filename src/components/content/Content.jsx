import { Product } from "./Product.jsx";
import { useState } from "react";
import { CategoryDropdown } from "../static/CategoryDropdown.jsx";
import styles from "./styles/Content.module.scss";
import { RingLoader } from "react-spinners";

export const Content = ({ games, setGames, addToWishList }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");

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
          <input
            onChange={handleValue}
            type="text"
            placeholder="Search"
            className={styles.inputField}
          />
          <CategoryDropdown onCategoryChange={handleSelectedCat} />
        </div>
        <div>
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
                />
              ))
            ) : (
              <div className={styles.loadingText}>
                <p>Loading...</p>
                <p>This while take about 30 seconds</p>
                <RingLoader color="#0a0129" size={100} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
