import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// defaults to localStorage for web
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducer from "./reducer";

const intialstate = {};
const middleware = [thunk];
export const store = createStore(
  rootReducer,
  intialstate,
  composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);

export default { store, persistor };
