import { NavLink } from "react-router-dom";
import "./styles/home.css";
import React from "react";

export const Home = () => {
  return (
    <div className="landingPage">
      <div className="overlay">
        <div className="content">
          <h1>Welcome to Steem</h1>
          <p>Where play meets passion.</p>
          <NavLink to={"/games"}>
            <button className="storeButton">Go to Store</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
