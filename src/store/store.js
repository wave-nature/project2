import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { doctorReducer } from "../reducer/doctorReducer";
import { patientReducer } from "../reducer/patientReducer";
import { appointmentReducer } from "../reducer/appointmentReducer";
import { filesReducer } from "../reducer/filesReducer";

const middlewares = [thunk, promise];

const reducers = combineReducers({
  doctor: doctorReducer,
  patient: patientReducer,
  appointment: appointmentReducer,
  files: filesReducer,
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
