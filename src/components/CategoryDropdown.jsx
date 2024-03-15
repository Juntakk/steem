/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "../assets/styles/Content.module.scss";

const CategoryDropdown = ({ onCategoryChange }) => {
  const [selectedCat, setSelectedCat] = useState("all");

  const handleSelectedCat = (e) => {
    const selectedCat = e.target.value;
    setSelectedCat(selectedCat);
    onCategoryChange(selectedCat);
  };

  return (
    <div>
      <select
        className={styles.catDropDown}
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

export default CategoryDropdown;
