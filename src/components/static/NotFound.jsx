import { useNavigate } from "react-router-dom";
import "./styles/notFound.css";
import React from "react";
import image from "../../images/404.jpg";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notFoundPage">
      <h2 className="notFoundText">Page Not Found</h2>
      <img className="notFoundImage" src={image} alt="" />
      <button className="backToStoreButton" onClick={() => navigate("/games")}>
        Back to Store
      </button>
    </div>
  );
};
