import axios from "axios";

const RAWG_API_KEY = "955107d6c8af4d77bec356b4604520bb";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: RAWG_API_KEY,
  },
});
