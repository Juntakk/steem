import { NavLink, useLocation } from "react-router-dom";
import { LuGamepad2 } from "react-icons/lu";
import { useAuth } from "../../contexts/authContext";
import styles from "./styles/Header.module.scss";

export const Header = ({ wishedItems }) => {
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLink}>
        <NavLink to={"/"} className={styles.logo}>
          <LuGamepad2 size={66} />
          <span>Steem</span>
        </NavLink>{" "}
        {isLoggedIn ? (
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={`${location.pathname === "/" && styles.active}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/games"}
                className={`${styles.navItem} ${
                  location.pathname === "/games" && styles.active
                }`}
              >
                Store
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/add-game"}
                className={`${styles.navItem} ${
                  location.pathname === "/add-game" && styles.active
                }`}
              >
                Add
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/wishlist"}
                className={`${styles.navItem} ${
                  location.pathname === "/wishlist" && styles.active
                }`}
              >
                Wishlist
                <span>{wishedItems}</span>
              </NavLink>
            </li>
            <NavLink
              onClick={logout}
              to={"/login"}
              className={styles.logoutLink}
            >
              Logout
            </NavLink>
          </ul>
        ) : (
          <>
            <ul>
              <li>
                <NavLink
                  to={"/"}
                  className={`${styles.navItem} ${
                    location.pathname === "/" && styles.active
                  }`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/games"}
                  className={`${styles.navItem} ${
                    location.pathname === "/games" && styles.active
                  }`}
                >
                  Store
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/login"}
                  className={`${styles.loginRegister} ${
                    location.pathname === "/login" && styles.active
                  }`}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};
