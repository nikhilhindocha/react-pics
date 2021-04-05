import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID -gs5O-ATDXJqhs-c-N-GlC4G6onATAxPY9TWbEPpl-w",
  },
});
