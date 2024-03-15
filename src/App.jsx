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
  return (
    <>
      <div className="app">
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
