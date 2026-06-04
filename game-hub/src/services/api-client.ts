import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd0d544ba4e6240a599604dc5fb5226f8'
  }
})