import { ADD_VENDOR,  GET_ALLVENDORS } from "../action/type";

const initialState = {
  vendors: [],
  loading: true,
  vendor: null,
  error: {},
  redirect: false,
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

    default:
      return state;
  }
}
