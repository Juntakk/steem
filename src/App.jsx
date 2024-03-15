import Home from "./components/Home";
import Header from "./components/Header";
import Content from "./components/Content";
// import Footer from "./components/Footer";
import styles from "./assets/styles/App.module.scss";
import { Routes, Route } from "react-router-dom";
import GameDetails from "./components/GameDetails";
import WishList from "./components/WishList";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import "./index.css";

function App() {
  return (
    <>
      <div className={`${styles.appContainer} `}>
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Content />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/games/:id" element={<GameDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
