import { NavLink, useLocation } from "react-router-dom";
import { LuGamepad2 } from "react-icons/lu";
import { useAuth } from "../../contexts/authContext";
import "./styles/header.css";
import React from "react";

export const Header = ({ wishedItems }) => {
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  return (
    <nav className="navbar">
      <div className="logoContainer">
        <NavLink to={"/"} className="logo">
          <LuGamepad2 size={40} />
          <span className="logoText">Steem</span>
        </NavLink>
      </div>
      <div className="links">
        {isLoggedIn ? (
          <>
            <ul className="navList">
              <li>
                <NavLink
                  to={"/"}
                  className={`navItem ${location.pathname === "/" && "active"}`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/games"}
                  className={`navItem ${
                    location.pathname === "/games" && "active"
                  }`}
                >
                  Store
                </NavLink>
              </li>
              <li className="wishlistItem">
                <NavLink
                  to={"/wishlist"}
                  className={`navItem ${
                    location.pathname === "/wishlist" && "active"
                  }`}
                >
                  Wishlist
                </NavLink>
                {wishedItems > 0 && (
                  <span className="wishedCount">{wishedItems}</span>
                )}
              </li>
              <li>
                <NavLink onClick={logout} to={"/login"} className="navItem">
                  Logout
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <ul className="navList">
            <li>
              <NavLink
                to={"/"}
                className={`navItem ${location.pathname === "/" && "active"}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/games"}
                className={`navItem ${
                  location.pathname === "/games" && "active"
                }`}
              >
                Store
              </NavLink>
            </li>
            <li>
              <NavLink
                to={isLoginPage ? "/register" : "/login"}
                className={`navItem ${
                  (isLoginPage || isRegisterPage) && "active"
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
