import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container p-30 d-flex jcc aic flex-column">
      <h1 className="tac">Welcome to Steem</h1>
      <h3 className="tac">Start shopping</h3>
      <button>
        <NavLink to="/games" className="games">
          Games
        </NavLink>
      </button>
    </div>
  );
};

export default Home;
