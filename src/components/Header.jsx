import { NavLink, Link } from "react-router-dom";
import styles from "../assets/styles/Navbar.module.scss";
import { LuGamepad2 } from "react-icons/lu";

const Header = () => {
  const activeClass = styles.active;
  const inActiveClass = styles.inActive;
  return (
    <nav className={`${styles.navbar} d-flex flex-row jcsb`}>
      <div className={`${styles.logo}`}>
        <Link to={"/"}>
          Steem
          <LuGamepad2 />
        </Link>
      </div>
      <div className={`${styles.choices}`}>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
          end
        >
          <span>Home</span>
        </NavLink>
        <NavLink
          to={"/games"}
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          <span>Store</span>
        </NavLink>
      </div>
      <div className={`${styles.logout}`}>
        <NavLink
          to={"/wishlist"}
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          <span>WishList</span>
          {/* {nbOfWishedItems} */}
        </NavLink>
        <NavLink
          to={"/login"}
          className={({ isActive }) => (isActive ? activeClass : inActiveClass)}
        >
          <span>Login</span>
        </NavLink>
      </div>
    </nav>
  );
};
export default Header;
