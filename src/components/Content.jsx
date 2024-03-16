/* eslint-disable no-unused-vars */
import { Product } from "./Product.jsx";
import { useState } from "react";
import data from "../data/data.js";
import { CategoryDropdown } from "./CategoryDropdown.jsx";

export const Content = () => {
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
    <div className="flex bg-gray-800 max-w-8xl p-10">
      <div className="p-2">
        <input
          onChange={handleValue}
          type="text"
          placeholder="Search"
          className="mt-10"
        />
        <CategoryDropdown onCategoryChange={handleSelectedCat} />
      </div>
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center p-8">
          {filteredGames.length > 0 ? (
            filteredGames.map((item) => (
              <Product
                key={item.id}
                name={item.name}
                image={item.image}
                id={item.id}
                price={item.price}
                rating={item.rating}
                category={item.category}
              />
            ))
          ) : (
            <p className="text-white text-3xl">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
