import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { autoRehydrate } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const intialstate = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  intialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
