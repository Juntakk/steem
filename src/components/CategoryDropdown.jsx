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
    <div className="flex flex-row">
      <select
        className="w-auto bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500"
        name="Categories"
        value={selectedCat}
        onChange={handleSelectedCat}
      >
        <option value="all">All</option>
        <option value="adventure">Adventure</option>
        <option value="platformer">Platformer</option>
        <option value="souls-like">Souls-like</option>
        <option value="roguelike">Roguelike</option>
        <option value="rpg">RPG</option>
        <option value="horror">Horror</option>
      </select>
    </div>
  );
};
