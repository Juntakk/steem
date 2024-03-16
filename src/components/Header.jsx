import { NavLink } from "react-router-dom";
import { LuGamepad2 } from "react-icons/lu";

export const Header = () => {
  return (
    <nav className="bg-blue-900 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto text-white p-3 ">
        <NavLink to={"/"} className="flex">
          <LuGamepad2 size={65} />
          <span className="mt-2 text-4xl mx-3">Steem</span>
        </NavLink>{" "}
        <ul className="flex text-2xl justify-center">
          <li>
            <NavLink to={"/"} className="mx-10" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/games"} className="mx-10">
              Store
            </NavLink>
          </li>
          <li>
            <NavLink to={"/wishlist"} className="mx-10">
              Wishlist
              {/* {wishedItems} */}
            </NavLink>
          </li>
        </ul>
        <NavLink to={"/login"} className="text-xl mx-10">
          Login
        </NavLink>
      </div>
    </nav>
  );
};
