import { useParams } from "react-router-dom";
import data from "../data/data.js";
import styles from "../assets/styles/GameDetails.module.scss";
// import { AiFillHeart } from "react-icons/ai";
// import { AiOutlineHeart } from "react-icons/ai";
// import Product from "./Product";

const GameDetails = () => {
  const games = data;
  const params = useParams();
  const game = games.find((item) => item.id.toString() === params.id);

  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.image}>
            <img src={`.${game.image}`} alt="" />
          </div>
          <div className={styles.details}>
            <h2>{game.name}</h2>
            <p className={styles.description}>{game.description}</p>
            <div className={styles.bottomDetails}>
              <p className={styles.price}>{game.price}</p>
              <button className={styles.button}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetails;
