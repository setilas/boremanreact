import { combineReducers } from "redux";
import auth from "./auth";
import register from "../reducer/auth";
import alert from "./alert";
import Customizer from "../redux/customizer/reducer";
import enquiry from "./enquiry";

const reducers = combineReducers({
  register,
  Customizer,
  auth,
  alert,
  enquiry,
});
export default reducers;
