import {
  ADD_VENDOR,
  GET_VENDOR,
  GET_ALLVENDORS,
  GET_USERS,
  GET_USER,
} from "../action/type";

const initialState = {
  vendors: [],
  loading: true,
  vendor: null,
  error: {},
  redirect: false,
  users: [],
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_VENDOR: {
      return {
        ...state,
        vendor: payload,
        redirect: true,
      };
    }
    case GET_ALLVENDORS: {
      return {
        ...state,
        vendors: payload,
        loading: false,
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
      };
    }
    case GET_VENDOR: {
      return {
        ...state,
        vendor: payload,
      };
    }
    default:
      return state;
  }
}
