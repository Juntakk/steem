import { NavLink, Link } from "react-router-dom";
import styles from "../assets/styles/Navbar.module.scss";
import { LuGamepad2 } from "react-icons/lu";

const Header = () => {
  return (
    <nav className={`${styles.navbar} d-flex flex-row jcsb`}>
      <div className={`${styles.logo}`}>
        <Link to={"/"}>
          Steem
          <LuGamepad2 />
        </Link>
      </div>
      <div className={`${styles.choices}`}>
        <NavLink to={"/"} end>
          <span>Home</span>
        </NavLink>
        <NavLink to={"/games"}>
          <span>Store</span>
        </NavLink>
      </div>
      <div className={`${styles.logout}`}>
        <NavLink to={"/wishlist"}>
          <span>WishList</span>
          {/* {nbOfWishedItems} */}
        </NavLink>
        <NavLink to={"/login"}>
          <span>Login</span>
        </NavLink>
      </div>
    </nav>
  );
};
export default Header;
