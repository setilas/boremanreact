import axios from "axios";
import { setAlert } from "./alert";
import {
  ADD_ENQUIRY,
  allEnquiry,
  GET_ALLENQUIRY,
  GET_ENQUIRY,
  SET_ALERT,
} from "./type";
export const addEnquiry = ({
  name,
  location,
  lat,
  long,
  estimate,
  addstatus,
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    name,
    location,
    lat,
    long,
    estimate,
    addstatus,
  });
  try {
    const res = await axios.post("/api/user/enquiry/", body, config);
    dispatch({
      type: ADD_ENQUIRY,
      payload: res.data,
    });
    dispatch(setAlert("Enquiry Added", "success"));
  } catch (err) {
    console.log(err);
  }
};

export const getAllEnquiry = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/user/enquiry/");
    dispatch({
      type: GET_ALLENQUIRY,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const enquirybyid = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/user/enquiry/${id}`);
    dispatch({
      type: GET_ENQUIRY,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
