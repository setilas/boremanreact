import axios from "axios";
import { ADD_ENQUIRY, allEnquiry, GET_ALLENQUIRY } from "./type";
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
    const res = await axios.post("/api/user/addenquiry/", body, config);
    dispatch({
      type: ADD_ENQUIRY,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getallenquiry = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/user/addenquiry/${id}`);
    dispatch({
      type: GET_ALLENQUIRY,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
