import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  GET_USERS,
  GET_USER,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_USER,
  DELETE_USER,
} from "./type";
import { setAuthToken } from "../utils/setAuthToken";
import { setAlert } from "./alert";
//load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const register = ({
  firstname,
  lastname,
  address,
  phone,
  email,
  password,
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    firstname,
    lastname,
    address,
    phone,
    email,
    password,
  });
  console.log(body);
  try {
    const res = await axios.post("/api/user", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    dispatch(setAlert("success", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({ type: REGISTER_FAIL });
  }
};

//login user
export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post("/api/auth", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

//get all users

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("api/auth/users");
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getuserbyid = (id) => async (dispatch) => {
  try {
    console.log("in action");
    const res = await axios.get(`/api/auth/user/${id}`);
    console.log("res");
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const edituserbyid = ({
  vendorcode,
  firstname,
  address,
  phone,
  email,
  totalEnquiry,
  activeEnquiry,
  completedEnquiry,
  activate,
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    vendorcode,
    firstname,
    address,
    phone,
    email,
    totalEnquiry,
    activeEnquiry,
    completedEnquiry,
    activate,
  });
  try {
    const res = await axios.post(`/api/user/edit/${vendorcode}`, body, config);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export const deleteUser = (id, history) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/user/${id}`);
    dispatch({
      type: DELETE_USER,
      payload: id,
    });
    history.push("/admindashboard");
    dispatch({
      type: CLEAR_USER,
    });
    dispatch(setAlert("user deleted", "success"));
  } catch (err) {}
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
