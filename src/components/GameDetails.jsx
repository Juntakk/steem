import { useParams } from "react-router-dom";
import data from "../data/data.js";

export const GameDetails = ({ addToWishList }) => {
  const games = data;
  const params = useParams();
  const game = games.find((item) => item.id.toString() === params.id);

  return (
    <>
      <div className="flex ms-40 py-20 px-20 border-4 rounded-md border-blue-900 mt-10 me-40 bg-gray-500">
        <div className="">
          <img className="h-96 w-64" src={`${game.image}`} alt="" />
        </div>
        <div className="px-10 mt-10">
          <h2 className="text-4xl">{game.name}</h2>
          <p className="text-xl mt-5 max-w-lg">{game.description}</p>
          <div className="flex mt-10">
            <p className="text-4xl">{game.price}</p>
            <button
              className="text-white ms-10 bg-blue-900 p-3 text-2xl hover:bg-blue-800"
              onClick={() => addToWishList(game)}
            >
              Add to WishList
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
