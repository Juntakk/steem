import { Content } from "./components/content/Content";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import { NotFound } from "./components/static/NotFound";
import { Header } from "./components/static/Header";
import { Home } from "./components/static/Home";
import { GameDetails } from "./components/content/GameDetails";
import { WishList } from "./components/content/WishList";
import { useAuth } from "./contexts/authContext";
import data from "../src/data/data.js";
import "./index.css";

function App() {
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishlist"))
  );
  const [wishedItems, setWishedItems] = useState(
    parseInt(localStorage.getItem("wishedItems"))
  );
  const [isWishListed, setIsWishListed] = useState(false);
  const [games, setGames] = useState(data);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const addToWishList = (game) => {
    const gameIds = wishList.map((item) => item._id);

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    if (!gameIds.includes(game._id)) {
      setWishList([...wishList, game]);
      setWishedItems((prev) => prev + 1);
      navigate("/wishlist");
      localStorage.setItem("wishlist", JSON.stringify([...wishList, game]));
      localStorage.setItem(
        "wishedItems",
        parseInt(JSON.stringify(wishedItems + 1))
      );
    } else {
      setIsWishListed(true);
    }
  };

  const removeFromWishList = (id) => {
    const updatedWishList = wishList.filter((game) => game._id !== id);
    setWishList(updatedWishList);
    if (wishedItems > 0) {
      localStorage.setItem(
        "wishedItems",
        parseInt(JSON.stringify(wishedItems - 1))
      );
      localStorage.setItem("wishlist", JSON.stringify(updatedWishList));
      setWishedItems(wishedItems - 1);
    } else {
      setIsWishListed(false, id);
    }
  };

  return (
    <>
      <main>
        <Header wishedItems={wishedItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/games"
            element={
              <Content
                games={games}
                setGames={setGames}
                addToWishList={addToWishList}
                wishList={wishList}
                setIsWishListed={setIsWishListed}
                isWishListed={isWishListed}
              />
            }
          />
          <Route
            path="/wishlist"
            element={
              <WishList
                wishList={wishList}
                removeFromWishList={removeFromWishList}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/games/:id"
            element={
              <GameDetails
                addToWishList={addToWishList}
                removeFromWishList={removeFromWishList}
                wishList={wishList}
                games={games}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
