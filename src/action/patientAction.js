import axios from "axios";

const patientAction = () => ({
  type: "GET_PATIENT_DETAILS",
  payload: axios.get(
    "https://619f39821ac52a0017ba467e.mockapi.io/patientDetails"
  ),
});

export default patientAction;
