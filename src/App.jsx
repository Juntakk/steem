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
// import axios from "axios";

function App() {
  const [wishList, setWishList] = useState([]);
  const [wishedItems, setWishedItems] = useState(0);
  const [games, setGames] = useState(data); // Initialize directly from data.js
  const { isLoggedIn } = useAuth();
  const [isWishListed, setIsWishListed] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  // const location = useLocation();

  //WishList storage
  useEffect(() => {
    const storedWishList = JSON.parse(localStorage.getItem("wishlist"));
    const storedWishedItems = JSON.parse(localStorage.getItem("wishedItems"));
    if (storedWishList) {
      setWishList(storedWishList);
    }
    if (storedWishedItems) {
      setWishedItems(storedWishedItems);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
    localStorage.setItem("wishedItems", JSON.stringify(wishedItems));
  }, [wishList, wishedItems]);

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
    } else {
      setIsWishListed(true);
    }
  };
  const removeFromWishList = (id) => {
    setWishList(wishList.filter((game) => game._id !== id));
    if (wishedItems > 0) {
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
