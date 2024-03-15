import { NavLink } from "react-router-dom";
import "../assets/styles/Home.css";

const Home = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>Welcome to Steem</h1>
        <p>Where play meets passion.</p>
        <NavLink to={"/games"}>
          <button className="cta-button">Go to Store</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
