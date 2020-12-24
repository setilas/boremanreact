import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  DELETE_ACCOUNT,
} from "../action/type";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  userData: localStorage.getItem("userData"),
  role: false,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);

      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false,
        role: payload == "admin" ? true : false,
      };
    case DELETE_ACCOUNT:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };

    case USER_LOADED:
      localStorage.setItem("userData", JSON.stringify(payload));
      return {
        ...state,
        isAuthenticated: true,
        loading: false,

        role: payload == "admin" ? true : false,
      };
    default:
      return state;
  }
}
