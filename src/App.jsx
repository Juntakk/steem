import { useEffect, useState } from "react";
import {
  Header,
  Home,
  Content,
  WishList,
  Login,
  GameDetails,
  NotFound,
} from "./components";
import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const [wishList, setWishList] = useState([]);
  // const [inWishList, setInWishList] = useState(false);
  const [wishedItems, setWishedItems] = useState(0);

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
    if (!wishList.includes(game)) {
      setWishList([...wishList, game]);
      setWishedItems(wishedItems + 1);
    } else {
      return;
    }
  };

  const removeFromWishList = (id) => {
    const newWishList = wishList.filter((game) => game.id !== id);
    setWishList(newWishList);
    if (wishedItems > 0) {
      setWishedItems(wishedItems - 1);
    }
  };

  return (
    <>
      <div className="app">
        <main>
          <Header wishedItems={wishedItems} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Content />} />
            <Route
              path="/wishlist"
              element={
                <WishList
                  wishList={wishList}
                  removeFromWishList={removeFromWishList}
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/games/:id"
              element={
                <GameDetails
                  addToWishList={addToWishList}
                  removeFromWishList={removeFromWishList}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
