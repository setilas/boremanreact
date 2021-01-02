import {
  ADD_VENDOR,
  GET_VENDOR,
  GET_ALLVENDORS,
  GET_USERS,
  GET_USER,
  DELETE_USER,
  CLEAR_USER,
  PERCENTAGE,
} from "../action/type";

const initialState = {
  vendors: [],
  Vendor: null,
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
        Vendor: payload,
        loadingVendor: false,
      };
    }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id != payload),
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
}
