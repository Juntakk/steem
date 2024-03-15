import { NavLink } from "react-router-dom";
import "../styles/Home.css";

export const Home = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>Welcome to Steem</h1>
        <p>Where play meets passion.</p>
        <NavLink to={"/games"}>
          <button className="text-2xl text-white bg-blue-900 p-4 font-medium rounded-lg hover:bg-blue-700">
            Go to Store
          </button>
        </NavLink>
      </div>
    </div>
  );
};
