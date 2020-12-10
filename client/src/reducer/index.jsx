import { combineReducers } from "redux";
import auth from "./auth";
import register from "../reducer/auth";
import Customizer from "../redux/customizer/reducer";

const reducers = combineReducers({
  register,
  Customizer,
  auth,
});

export default reducers;
