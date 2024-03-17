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
  const [inWishList, setInWishList] = useState(false);

  useEffect(() => {
    const storedWishList = JSON.parse(localStorage.getItem("wishlist"));
    if (storedWishList) {
      setWishList(storedWishList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  const addToWishList = (game) => {
    if (!wishList.includes(game)) {
      setWishList([...wishList, game]);
      setInWishList(true);
    } else {
      return;
    }
  };

  const removeFromWishList = (id) => {
    const newWishList = wishList.filter((game) => game.id !== id);
    setWishList(newWishList);
    setInWishList(false);
  };

  return (
    <>
      <div className="app">
        <main>
          <Header />
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
                  inWishList={inWishList}
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
