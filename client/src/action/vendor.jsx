import axios from "axios";
import { setAlert } from "./alert";
import { ADD_VENDOR, GET_ALLVENDORS, GET_VENDOR } from "./type";
export const addVendor = ({
  firstname,
  vendorLastName,
  vendorAddress,
  vendorPhone,
  vendorEmail,
  password,
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    firstname,
    vendorLastName,
    vendorAddress,
    vendorPhone,
    vendorEmail,
    password,
  });
  try {
    const res = await axios.post("/api/admin/vendor", body, config);
    dispatch({
      type: ADD_VENDOR,
      payload: res.data,
    });
    dispatch(setAlert("User Added", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export const getallvendors = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/admin/vendor");
    dispatch({
      type: GET_ALLVENDORS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export const getvendorbyid = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/admin/vendor/${id}`);
    dispatch({
      type: GET_VENDOR,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};
