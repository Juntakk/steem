import { NavLink } from "react-router-dom";

export const Product = ({ image, name, price, id, category }) => {
  return (
    <div className="flex w-full max-w-sm bg-gray-400 shadow dark:bg-gray-800 dark:border-gray-700">
      <NavLink to={`/games/${id}`} className="flex-none">
        <img className="max-w-40 h-64" src={image} alt="" />
      </NavLink>{" "}
      <div className="flex-grow px-5 pb-5 flex flex-col justify-between">
        <h2 className="text-3xl text-center pt-5 font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h2>
        <h3 className="flex justify-center mt-auto border-2 rounded-md border-blue-900 p-1 text-lg font-bold ">
          {category}
        </h3>
        <div className="mt-auto">
          <div className="text-center">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
