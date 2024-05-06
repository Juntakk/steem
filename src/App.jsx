import { Content } from "./components/content/Content";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Register from "./components/auth/Register";
import { Login } from "./components/auth/Login";
import AddGame from "./components/admin/AddGame";
import UpdateGame from "./components/admin/UpdateGame";
import { NotFound } from "./components/static/NotFound";
import { Header } from "./components/static/Header";
import { Home } from "./components/static/Home";
import { GameDetails } from "./components/content/GameDetails";
import { WishList } from "./components/content/WishList";
import { useAuth } from "./contexts/authContext";
import styles from "./App.module.scss";

import axios from "axios";

function App() {
  const [wishList, setWishList] = useState([]);
  const [wishedItems, setWishedItems] = useState(0);
  const [games, setGames] = useState([]);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

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

  //Get games from DB
  useEffect(() => {
    axios
      .get(`https://steem-api.onrender.com/games`)
      .then((games) => setGames(games.data))
      .catch((err) => console.log(err));
  }, [location]);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/games`)
  //     .then((games) => setGames(games.data))
  //     .catch((err) => console.log(err));
  // }, [location]);

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
      console.log("Game already in wishlist");
    }
  };
  const removeFromWishList = (id) => {
    setWishList(wishList.filter((game) => game._id !== id));
    if (wishedItems > 0) {
      setWishedItems(wishedItems - 1);
    }
  };

  return (
    <>
      <div className={styles.app}>
        <main>
          <Header wishedItems={wishedItems} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-game" element={<AddGame />} />
            <Route
              path="games/update-game/:id"
              element={<UpdateGame games={games} setGames={setGames} />}
            />
            <Route
              path="/games"
              element={
                <Content
                  games={games}
                  setGames={setGames}
                  addToWishList={addToWishList}
                  wishList={wishList}
                  setWishList={setWishList}
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
                  games={games}
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
