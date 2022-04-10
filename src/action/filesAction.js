import axios from "axios";

const filesAction = () => ({
  type: "GET_FILES_DETAILS",
  payload: axios.get("https://619f39821ac52a0017ba467e.mockapi.io/Files"),
});

export default filesAction;
