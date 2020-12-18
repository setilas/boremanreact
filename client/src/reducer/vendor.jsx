import { ADD_VENDOR, GET_VENDOR, GET_ALLVENDORS } from "../action/type";

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_VENDOR:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case GET_ALLVENDORS:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    default:
      return state;
  }
}
