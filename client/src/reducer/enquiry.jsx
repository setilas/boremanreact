 import { ADD_ENQUIRY, GET_ENQUIRY, GET_ALLENQUIRY } from "../action/type";

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ENQUIRY:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case GET_ALLENQUIRY:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    default:
      return state;
  }
}
