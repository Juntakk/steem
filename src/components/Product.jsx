/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import styles from "../assets/styles/Content.module.scss";
import { NavLink } from "react-router-dom";

const Product = ({ image, id }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-20">
      <NavLink to={`/games/${id}`}>
        <img className={styles.gameImage} src={image} alt="" />
      </NavLink>
      <p className={styles.heart} onClick={handleLike}>
        {liked ? <AiFillHeart size={40} /> : <AiOutlineHeart size={40} />}
      </p>
    </div>
  );
};

export default Product;
