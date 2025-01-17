import { NavLink, useLocation } from "react-router-dom";
import { LuGamepad2 } from "react-icons/lu";
import { useAuth } from "../../contexts/authContext";
import styles from "./styles/Header.module.scss";

export const Header = ({ wishedItems }) => {
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <NavLink to={"/"} className={styles.logo}>
          <LuGamepad2 size={40} />
          <span className={styles.logoText}>Steem</span>
        </NavLink>
      </div>
      <div className={styles.links}>
        {isLoggedIn ? (
          <>
            <ul className={styles.navList}>
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
              <li className={styles.wishlistItem}>
                <NavLink
                  to={"/wishlist"}
                  className={`${styles.navItem} ${
                    location.pathname === "/wishlist" && styles.active
                  }`}
                >
                  Wishlist
                </NavLink>
                {wishedItems > 0 && (
                  <span className={styles.wishedCount}>{wishedItems}</span>
                )}
              </li>
              <li>
                <NavLink
                  onClick={logout}
                  to={"/login"}
                  className={styles.navItem}
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <ul className={styles.navList}>
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
                to={isLoginPage ? "/register" : "/login"}
                className={`${styles.navItem} ${
                  (isLoginPage || isRegisterPage) && styles.active
                }`}
              >
                {isLoginPage ? "Signup" : "Login"}
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
