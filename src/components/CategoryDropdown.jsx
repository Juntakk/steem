/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

export const CategoryDropdown = ({ onCategoryChange }) => {
  const [selectedCat, setSelectedCat] = useState("all");

  const handleSelectedCat = (e) => {
    const selectedCat = e.target.value;
    setSelectedCat(selectedCat);
    onCategoryChange(selectedCat);
  };

  return (
    <div className="flex flex-row mt-5">
      <select
        className="w-auto bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500"
        name="Categories"
        value={selectedCat}
        onChange={handleSelectedCat}
      >
        <option value="all">All</option>
        <option value="Adventure">Adventure</option>
        <option value="Platformer">Platformer</option>
        <option value="Souls-like">Souls-like</option>
        <option value="Roguelike">Roguelike</option>
        <option value="RPG">RPG</option>
        <option value="Horror">Horror</option>
      </select>
    </div>
  );
};
