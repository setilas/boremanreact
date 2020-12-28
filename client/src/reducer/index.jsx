import { combineReducers } from "redux";
import auth from "./auth";
import register from "../reducer/auth";
import alert from "./alert";
import Customizer from "../redux/customizer/reducer";
import enquiry from "./enquiry";
import vendor from "./vendor";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  register,
  Customizer,
  auth,
  alert,
  enquiry,
  vendor,
});
export default persistReducer(persistConfig, rootReducer);
