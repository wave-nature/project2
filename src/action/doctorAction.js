import axios from "axios";

const doctorAction = () => ({
  type: "GET_DOCTOR_DETAILS",
  payload: axios.get(
    "https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails"
  ),
});

export default doctorAction;
