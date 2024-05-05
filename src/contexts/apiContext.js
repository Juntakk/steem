import { createContext } from "react";

const ApiContext = createContext({
  BASE_URL: "https://steem-api.onrender.com",
});

export default ApiContext;
