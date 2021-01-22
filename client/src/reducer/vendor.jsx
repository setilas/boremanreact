import {
  ADD_VENDOR,
  GET_VENDOR,
  GET_ALLVENDORS,
  GET_USERS,
  GET_USER,
} from "../action/type";

const initialState = {
  vendors: [],
  vendor: null,
  error: {},
  users: [],
  user: null,
  loadingVendor: true,
  loadingUser: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_VENDOR: {
      return {
        ...state,
        vendor: payload,
      };
    }
    case GET_ALLVENDORS: {
      return {
        ...state,
        vendors: payload,
      };
    }
    case GET_USERS: {
      return {
        ...state,
        users: payload,
      };
    }
    case GET_USER: {
      return {
        ...state,
        user: payload,
        loadingUser: false,
      };
    }
    case GET_VENDOR: {
      return {
        ...state,
        vendor: payload,
        loadingVendor: false,
      };
    }
    default:
      return state;
  }
}
