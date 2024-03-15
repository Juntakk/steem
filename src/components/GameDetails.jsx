import { useParams } from "react-router-dom";
import data from "../data/data.js";
// import { AiFillHeart } from "react-icons/ai";
// import { AiOutlineHeart } from "react-icons/ai";
// import Product from "./Product";

export const GameDetails = () => {
  const games = data;
  const params = useParams();
  const game = games.find((item) => item.id.toString() === params.id);

  return (
    <>
      <div className="">
        <div className="">
          <div className="">
            <img src={`${game.image}`} alt="" />
          </div>
          <div className="">
            <h2>{game.name}</h2>
            <p className="">{game.description}</p>
            <div className="">
              <p className="">{game.price}</p>
              <button className="">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
