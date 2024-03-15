/* eslint-disable no-unused-vars */
import Product from "./Product.jsx";
import styles from "../assets/styles/Content.module.scss";
import { useState } from "react";
import data from "../data/data.js";
import CategoryDropdown from "./CategoryDropdown.jsx";

const Content = () => {
  // eslint-disable-next-line react/prop-types
  const [inputValue, setInputValue] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");

  const handleSelectedCat = (selectedCat) => {
    setSelectedCat(selectedCat);
  };

  const games = data;
  console.log(games);
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
    <div className="flex-fill p-20 container">
      <div className="d-flex">
        <input
          onChange={handleValue}
          type="text"
          placeholder="Search"
          className={styles.input}
        />
        <CategoryDropdown onCategoryChange={handleSelectedCat} />
      </div>
      <div className="">
        <h1 className="">
          {selectedCat[0].toUpperCase() + selectedCat.substring(1)}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredGames.length > 0 ? (
            filteredGames.map((item) => (
              <Product
                key={item.id}
                name={item.name}
                image={item.image}
                id={item.id}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <p className="">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
