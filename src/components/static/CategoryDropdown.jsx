/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./styles/dropDown.css"; // Assuming your CSS file is now DropDown.css
import React from "react";

export const CategoryDropdown = ({ onCategoryChange }) => {
  const [selectedCat, setSelectedCat] = useState("all");

  const handleSelectedCat = (e) => {
    const selectedCat = e.target.value;
    setSelectedCat(selectedCat);
    onCategoryChange(selectedCat);
  };

  return (
    <div className="catDropDown">
      <label htmlFor="category-select" className="dropdownLabel">
        Category
      </label>
      <select
        id="category-select"
        className="customSelect"
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
