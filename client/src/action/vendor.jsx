import axios from "axios";
import { ADD_VENDOR, GET_ALLVENDORS } from "./type";
export const addVendor = ({
  vendorName,
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
    vendorName,
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
