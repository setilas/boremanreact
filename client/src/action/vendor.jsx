import axios from "axios";
import { ADD_VENDOR,  GET_ALLVENDORS } from "./type";
export const addVendor = ({
    code,
    name,
    address,
    email,
    te,
    ae,
    twc,
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    code: " ",
    name: " ",
    address: "",
    email: " ",
    te: " ",
    ae: " ",
    twc:"",
  });
  try {
    const res = await axios.post("/api/admin/adminuser/", body, config);
    dispatch({
      type: ADD_VENDOR,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getallvendors = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/admin/adminuser");
    dispatch({
      type: GET_ALLVENDORS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
