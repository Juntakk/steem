import { NavLink } from "react-router-dom";

export const Product = ({ image, name, price, id, category }) => {
  return (
    <div className="flex w-full max-w-sm bg-gray-400 dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition duration-300">
      <NavLink to={`/games/${id}`} className="flex-none">
        <img className="max-w-32 h-48" src={image} alt="" />
      </NavLink>{" "}
      <div className="flex-grow px-3 pb-5 flex flex-col justify-between">
        <h2 className="text-2xl text-center pt-3 font-semibold tracking-tight text-blue-900 dark:text-white">
          {name}
        </h2>
        <h3 className="flex justify-center text-blue-900 mt-auto border-2 border-blue-900 rounded-md border-blue-900 p-1 text-lg font-bold ">
          {category}
        </h3>
        <div className="mt-auto">
          <div className="text-center">
            <span className="text-xl font-bold text-blue-900 dark:text-white">
              {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
