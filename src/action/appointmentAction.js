import axios from "axios";

const appointmentAction = () => ({
  type: "GET_APPOINTMENT_DETAILS",
  payload: axios.get(
    "https://619f39821ac52a0017ba467e.mockapi.io/appointment_details"
  ),
});

export default appointmentAction;
