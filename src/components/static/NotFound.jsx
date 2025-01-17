import { useNavigate } from "react-router-dom";
import "./styles/notFound.css";
import React from "react";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notFoundPage">
      <h2 className="notFoundText">Page Not Found</h2>
      <img className="notFoundImage" src="../images/404.png" alt="" />
      <button className="backToStoreButton" onClick={() => navigate("/games")}>
        Back to Store
      </button>
    </div>
  );
};
