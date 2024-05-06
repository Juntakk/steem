import { createContext } from "react";

const ApiContext = createContext({
  BASE_URL: "https://steem-api.onrender.com",
  // BASE_URL: "http://localhost:5000",
});

export default ApiContext;
