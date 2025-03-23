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
import Payment from "./components/payment/Payment.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51QlHYfGBZc78i3YysL9uvIBzuVgvo4hIDPSlexYeYuWM6Mnyr5EHftu9r3TxRo4ysIdFGwySIf7DLPw8hzNUaqfq00r4WFJ6vA"
);

function App() {
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [wishedItems, setWishedItems] = useState(
    parseInt(localStorage.getItem("wishedItems")) || 0
  );
  const [isWishListed, setIsWishListed] = useState(false);
  const [total, setTotal] = useState(
    parseFloat(localStorage.getItem("total")) || 0.0
  );

  const [games, setGames] = useState(data);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const addToWishList = (game) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    const gameIds = wishList.map((item) => item._id);
    const price = parseFloat(
      parseFloat(game.price.replace("$", "")).toFixed(2)
    );

    if (!gameIds.includes(game._id)) {
      const newWishList = [...wishList, game];
      const newWishedItems = wishedItems + 1;
      const newTotal = total + price;

      setWishList(newWishList);
      setWishedItems(newWishedItems);
      setTotal(parseFloat(newTotal.toFixed(2)));

      localStorage.setItem("total", newTotal.toFixed(2));
      localStorage.setItem("wishlist", JSON.stringify(newWishList));
      localStorage.setItem("wishedItems", newWishedItems);

      navigate("/wishlist");
    } else {
      setIsWishListed(true);
    }
  };
  const removeFromWishList = (id) => {
    const newWishList = wishList.filter((game) => game._id !== id);
    const game = wishList.find((item) => item._id === id);

    if (!game) return;

    const price = parseFloat(
      parseFloat(game.price.replace("$", "")).toFixed(2)
    );
    const newWishedItems = Math.max(wishedItems - 1, 0);
    const newTotal = Math.max(total - price, 0);

    setWishList(newWishList);
    setWishedItems(newWishedItems);
    setTotal(parseFloat(newTotal.toFixed(2)));

    localStorage.setItem(
      "wishedItems",
      parseInt(JSON.stringify(newWishedItems))
    );
    localStorage.setItem("wishlist", JSON.stringify(newWishList));
    localStorage.setItem("total", newTotal.toFixed(2));

    if (newWishList.length === 0) {
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
                total={total}
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
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
